import { createClient } from "@supabase/supabase-js";
import { type NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr"; // For session check
import { cookies } from "next/headers";

// Admin Client (Service Role) - DANGEROUS, usage restricted to backend
const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
        auth: {
            autoRefreshToken: false,
            persistSession: false,
        },
    }
);

// Helper to get current session user
async function getCurrentUser() {
    const cookieStore = await cookies();
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll();
                },
                setAll(cookiesToSet) {
                    // No need to set cookies here for read-only check
                },
            },
        }
    );
    const { data: { user } } = await supabase.auth.getUser();
    return user;
}

// Get Super Admins List
const getSuperAdmins = () => {
    const envEmails = process.env.SUPER_ADMIN_EMAILS || "";
    return envEmails.split(",").map(e => e.trim().toLowerCase()).filter(e => e);
}

export async function GET(req: NextRequest) {
    // 1. Verify User is logged in
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    // 2. Fetch all users using Admin Client
    const { data: users, error } = await supabaseAdmin.auth.admin.listUsers();

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // 3. Mark Super Admins in response
    const superAdmins = getSuperAdmins();
    const enrichedUsers = users.users.map(u => ({
        ...u,
        isSuperAdmin: superAdmins.includes(u.email?.toLowerCase() || "")
    }));

    return NextResponse.json({ users: enrichedUsers });
}

export async function POST(req: NextRequest) {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
        return NextResponse.json({ error: "Missing email or password" }, { status: 400 });
    }

    const { data, error } = await supabaseAdmin.auth.admin.createUser({
        email,
        password,
        email_confirm: true, // Auto-confirm
    });

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ user: data.user });
}

export async function DELETE(req: NextRequest) {
    const currentUser = await getCurrentUser();
    if (!currentUser) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const { userId } = body;

    // 1. Get user to be deleted to check email
    const { data: { user: targetUser }, error: fetchError } = await supabaseAdmin.auth.admin.getUserById(userId);

    if (fetchError || !targetUser) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // 2. Super Admin Protection: Prevent deletion if email is in list
    const superAdmins = getSuperAdmins();
    const targetEmail = targetUser.email?.toLowerCase();

    if (targetEmail && superAdmins.includes(targetEmail)) {
        return NextResponse.json({ error: "Cannot delete a Super Admin account." }, { status: 403 });
    }

    // 3. Prevent self-deletion via UI (though UI should block it too)
    if (currentUser.id === userId) {
        return NextResponse.json({ error: "Cannot delete your own account." }, { status: 403 });
    }

    // 4. Delete
    const { error } = await supabaseAdmin.auth.admin.deleteUser(userId);

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
}

export async function PUT(req: NextRequest) {
    const currentUser = await getCurrentUser();
    if (!currentUser) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const { userId, password } = body;

    // 1. Get user to be updated
    const { data: { user: targetUser }, error: fetchError } = await supabaseAdmin.auth.admin.getUserById(userId);

    if (fetchError || !targetUser) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // 2. Super Admin Protection Logic
    const superAdmins = getSuperAdmins();
    const targetEmail = targetUser.email?.toLowerCase();
    const currentUserEmail = currentUser.email?.toLowerCase();

    const isTargetSuperAdmin = targetEmail && superAdmins.includes(targetEmail);
    const amISuperAdmin = currentUserEmail && superAdmins.includes(currentUserEmail);

    // If target is Super Admin:
    // Only the owner of that account can change their password.
    // Even another Super Admin cannot change it (safest policy).
    if (isTargetSuperAdmin) {
        if (currentUser.id !== userId) {
            return NextResponse.json({ error: "Super Admin passwords can only be changed by themselves." }, { status: 403 });
        }
    }

    // 3. Update Password
    const { error } = await supabaseAdmin.auth.admin.updateUserById(userId, {
        password: password
    });

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
}
