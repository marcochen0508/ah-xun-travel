import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
    try {
        const now = new Date().toISOString();

        // 1. Try to find an active scheduled banner for current time
        const { data: scheduledBanners, error: scheduledError } = await supabase
            .from('banners')
            .select('*')
            .eq('is_active', true)
            .eq('is_default', false)
            .lte('start_at', now)
            .gte('end_at', now)
            .order('start_at', { ascending: false })
            .limit(1);

        if (scheduledError) throw scheduledError;

        if (scheduledBanners && scheduledBanners.length > 0) {
            return NextResponse.json(scheduledBanners[0]);
        }

        // 2. Fallback to default banner if no schedule matches
        const { data: defaultBanners, error: defaultError } = await supabase
            .from('banners')
            .select('*')
            .eq('is_active', true)
            .eq('is_default', true)
            .limit(1);

        if (defaultError) throw defaultError;

        if (defaultBanners && defaultBanners.length > 0) {
            return NextResponse.json(defaultBanners[0]);
        }

        // 3. Last resort: Return null (Frontend uses default static image)
        return NextResponse.json(null);

    } catch (error) {
        console.error('Error fetching banner:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
