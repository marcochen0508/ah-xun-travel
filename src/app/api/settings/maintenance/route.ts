import { createClient } from "@supabase/supabase-js";
import { type NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// Admin Client (Service Role)
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
                },
            },
        }
    );
    const { data: { user } } = await supabase.auth.getUser();
    return user;
}

// Helper to check if user is a super admin
const isSuperAdmin = (user: any) => {
    const envEmails = (process.env.SUPER_ADMIN_EMAILS || "").split(",").map(e => e.trim().toLowerCase()).filter(e => e);
    const email = user.email?.toLowerCase();
    const isEnvSuperAdmin = email && envEmails.includes(email);
    const isMetadataSuperAdmin = user.app_metadata?.is_super_admin === true;
    return isEnvSuperAdmin || isMetadataSuperAdmin;
};

export async function GET(req: NextRequest) {
    // Public endpoint to check maintenance status (for middleware/layout)
    // No auth required for reading status, but maybe we want to restrict detailing?
    // Actually, layout needs to know this.

    // We store this in 'general_content' table with id 'site_settings'
    const { data, error } = await supabaseAdmin
        .from('general_content')
        .select('settings')
        .eq('key', 'site_settings')
        .single();

    if (error) {
        // If not found, assume false
        return NextResponse.json({ maintenance_mode: false });
    }

    return NextResponse.json({ maintenance_mode: data.settings?.maintenance_mode || false });
}

export async function POST(req: NextRequest) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!isSuperAdmin(currentUser)) {
        return NextResponse.json({ error: "Only Super Admin can toggle maintenance mode" }, { status: 403 });
    }

    const body = await req.json();
    const { enabled } = body;

    // Fetch existing settings first
    const { data: existingData, error: fetchError } = await supabaseAdmin
        .from('general_content')
        .select('settings')
        .eq('key', 'site_settings')
        .single();

    let newSettings = existingData?.settings || {};
    newSettings.maintenance_mode = enabled;

    // Update
    const { error: updateError } = await supabaseAdmin
        .from('general_content')
        .upsert({
            key: 'site_settings',
            settings: newSettings,
            // Assuming other columns like title_zh_tw need to be preserved or provided if new row
            title_zh_tw: '網站基本設定 (SEO)'
        }, { onConflict: 'key' });

    if (updateError) {
        return NextResponse.json({ error: updateError.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, maintenance_mode: enabled });
}
