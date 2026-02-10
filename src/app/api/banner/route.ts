import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

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
            .order('start_at', { ascending: false });

        if (scheduledError) throw scheduledError;

        // If specific schedule exists, return IT (as an array, but standardizes response)
        if (scheduledBanners && scheduledBanners.length > 0) {
            // Prioritize the top 1 if multiple overlap, but return as list
            return NextResponse.json([scheduledBanners[0]]);
        }

        // 2. Fallback to ALL active default banners for rotation
        const { data: defaultBanners, error: defaultError } = await supabase
            .from('banners')
            .select('*')
            .eq('is_active', true)
            .eq('is_default', true);

        if (defaultError) throw defaultError;

        if (defaultBanners && defaultBanners.length > 0) {
            return NextResponse.json(defaultBanners);
        }

        // 3. Last resort: Return empty array (Frontend uses default static image)
        return NextResponse.json([]);

    } catch (error) {
        console.error('Error fetching banner:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
