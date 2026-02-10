import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const now = new Date().toISOString();
        console.log(`[API] Fetching Banner at ${now}`);

        // 1. Try to find an active scheduled banner for current time
        const { data: scheduledBanners, error: scheduledError } = await supabase
            .from('banners')
            .select('*')
            .eq('is_active', true)
            .eq('is_default', false)
            .lte('start_at', now)
            .gte('end_at', now)
            .order('start_at', { ascending: false });

        if (scheduledError) {
            console.error('[API] Scheduled Banner Error:', scheduledError);
        }

        if (scheduledBanners && scheduledBanners.length > 0) {
            console.log(`[API] Found ${scheduledBanners.length} scheduled banners. Returning top 1.`);
            // Return prioritized scheduled banner (as a single item array/or just strict mode)
            // User wants priority: Scheduled > Random. 
            // If scheduled exists, we usually just show THAT one (no rotation for scheduled unless requested).
            return NextResponse.json([scheduledBanners[0]]);
        }

        console.log('[API] No scheduled banners found. Fetching defaults.');

        // 2. Fallback to ALL active default banners for rotation
        const { data: defaultBanners, error: defaultError } = await supabase
            .from('banners')
            .select('*')
            .eq('is_active', true)
            .eq('is_default', true);

        if (defaultError) {
            console.error('[API] Default Banner Error:', defaultError);
        }

        if (defaultBanners && defaultBanners.length > 0) {
            console.log(`[API] Found ${defaultBanners.length} default banners.`);
            return NextResponse.json(defaultBanners);
        }

        console.log('[API] No banners found at all.');
        return NextResponse.json([]);

    } catch (error) {
        console.error('Error fetching banner:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
