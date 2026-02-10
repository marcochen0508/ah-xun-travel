import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { supabaseAdmin } from '@/lib/supabase-admin';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const { data, error } = await supabase
            .from('general_content')
            .select('content')
            .eq('key', 'banner_settings')
            .single();

        if (error && error.code !== 'PGRST116') {
            console.error('Error fetching banner settings:', error);
        }

        // Default to 5000ms if not found
        const settings = data?.content || { interval: 5000 };
        return NextResponse.json(settings);

    } catch (error) {
        return NextResponse.json({ interval: 5000 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { interval } = body;

        const { error } = await supabaseAdmin
            .from('general_content')
            .upsert({
                key: 'banner_settings',
                content: { interval: parseInt(interval) || 5000 }
            }, { onConflict: 'key' });

        if (error) throw error;

        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
