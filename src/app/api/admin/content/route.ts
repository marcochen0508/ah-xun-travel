import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { supabase } from '@/lib/supabase';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// Disable caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;

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

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const key = searchParams.get('key');

    if (!key) {
        return NextResponse.json({ error: 'Key is required' }, { status: 400 });
    }

    try {
        // Use standard supabase client (RLS must allow public select)
        const { data, error } = await supabase
            .from('general_content')
            .select('*')
            .eq('key', key)
            .single();

        if (error && error.code !== 'PGRST116') {
            const now = new Date().toISOString();
            console.error(`[API Error ${now}]:`, error);
            throw error;
        }

        // Return empty structure if not found
        return NextResponse.json(data || { key });

    } catch (error: any) {
        const now = new Date().toISOString();
        console.error(`[API Exception ${now}]:`, error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req: Request) {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    try {
        const body = await req.json();
        const { key, ...contentData } = body;

        if (!key) {
            return NextResponse.json({ error: 'Key is required' }, { status: 400 });
        }

        const { error } = await supabaseAdmin
            .from('general_content')
            .upsert({
                key,
                ...contentData,
                updated_at: new Date().toISOString()
            }, { onConflict: 'key' });

        if (error) throw error;

        // Revalidate the root layout to update metadata
        revalidatePath('/', 'layout');

        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
