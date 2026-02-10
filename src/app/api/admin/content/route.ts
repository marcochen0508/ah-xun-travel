import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const key = searchParams.get('key');

    if (!key) {
        return NextResponse.json({ error: 'Key is required' }, { status: 400 });
    }

    try {
        // Use supabaseAdmin to bypass RLS and ensure data access
        const { data, error } = await supabaseAdmin
            .from('general_content')
            .select('*')
            .eq('key', key)
            .single();

        if (error && error.code !== 'PGRST116') {
            console.error("API Error:", error);
            throw error;
        }

        // Return empty structure if not found
        return NextResponse.json(data || { key });

    } catch (error: any) {
        console.error("API Exception:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req: Request) {
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

        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
