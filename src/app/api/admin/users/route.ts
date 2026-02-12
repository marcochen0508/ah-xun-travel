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

// Helper to check if a user is a super admin based on email (env) or metadata
const isSuperAdmin = (user: any) => {
    const envEmails = (process.env.SUPER_ADMIN_EMAILS || "").split(",").map(e => e.trim().toLowerCase()).filter(e => e);
    const email = user.email?.toLowerCase();
    const isEnvSuperAdmin = email && envEmails.includes(email);
    const isMetadataSuperAdmin = user.app_metadata?.is_super_admin === true;
    return isEnvSuperAdmin || isMetadataSuperAdmin;
};

// Helper: Check if user is THE Root Admin (Godotchen)
const isRootAdmin = (email: string | undefined) => {
    return email?.toLowerCase() === "godotchen@hotmail.com";
};

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
    const enrichedUsers = users.users.map(u => ({
        ...u,
        isSuperAdmin: isSuperAdmin(u)
    }));

    return NextResponse.json({ users: enrichedUsers });
}

export async function POST(req: NextRequest) {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const { email, password, isSuperAdmin: makeSuperAdmin } = body;

    if (!email || !password) {
        return NextResponse.json({ error: "Missing email or password" }, { status: 400 });
    }

    // Only Root Admin can create Super Admins
    if (makeSuperAdmin && !isRootAdmin(user.email)) {
        return NextResponse.json({ error: "Only the Root Admin can create Super Admins." }, { status: 403 });
    }

    const { data, error } = await supabaseAdmin.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
        app_metadata: makeSuperAdmin ? { is_super_admin: true } : undefined
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

    // 2. Permission Checks
    const currentUserEmail = currentUser.email?.toLowerCase();
    const targetEmail = targetUser.email?.toLowerCase();

    // Config
    const amISuper = isSuperAdmin(currentUser);
    const amIRoot = isRootAdmin(currentUserEmail);
    const isTargetSuper = isSuperAdmin(targetUser);

    // Rule 1: Only Super Admins can delete users
    if (!amISuper) {
        return NextResponse.json({ error: "Only Super Admins can delete users." }, { status: 403 });
    }

    // Rule 2: Cannot delete yourself
    if (currentUser.id === userId) {
        return NextResponse.json({ error: "Cannot delete your own account." }, { status: 403 });
    }

    // Rule 3: Handling Super Admin Deletion
    if (isTargetSuper) {
        // Only Root Admin can delete other Super Admins
        if (!amIRoot) {
            return NextResponse.json({ error: "Only the Root Admin can delete other Super Admins." }, { status: 403 });
        }
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
    const isTargetSuperAdmin = isSuperAdmin(targetUser);

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
