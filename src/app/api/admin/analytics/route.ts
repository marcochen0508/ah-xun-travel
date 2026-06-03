import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';
export const revalidate = 0;


const countryMap: { [key: string]: string } = {
    "TW": "Taiwan",
    "TAIWAN": "Taiwan",
    "TH": "Thailand",
    "THAILAND": "Thailand",
    "HK": "Hong Kong",
    "HONG KONG": "Hong Kong",
    "MY": "Malaysia",
    "MALAYSIA": "Malaysia",
    "MO": "Macau",
    "MACAO": "Macau",
    "MACAU": "Macau",
    "NL": "Netherlands",
    "NETHERLANDS": "Netherlands",
    "SE": "Sweden",
    "SWEDEN": "Sweden",
    "US": "United States",
    "UNITED STATES": "United States",
    "JP": "Japan",
    "JAPAN": "Japan",
    "CN": "China",
    "CHINA": "China",
    "SG": "Singapore",
    "SINGAPORE": "Singapore"
};

function normalizeCountry(country: string | null | undefined): string {
    if (!country) return "Taiwan";
    const upper = country.trim().toUpperCase();
    return countryMap[upper] || country;
}

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
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

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

    try {
        // 1. Total views
        const { count: totalViews, error: countErr } = await supabase
            .from('page_views')
            .select('*', { count: 'exact', head: true });

        if (countErr) {
            // Table might not exist yet
            if (countErr.code === '42P01') {
                return NextResponse.json({ 
                    setupRequired: true,
                    error: "Table 'page_views' not found. Please run the SQL setup script."
                });
            }
            throw countErr;
        }


        // 2. Fetch last 7 days of data
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        sevenDaysAgo.setHours(0, 0, 0, 0);

        const { data: recentViews, error: fetchErr } = await supabase
            .from('page_views')
            .select('created_at, country, ip_hash')
            .gte('created_at', sevenDaysAgo.toISOString());

        if (fetchErr) throw fetchErr;

        // Process daily stats (past 7 days)
        const dailyStats: { [key: string]: { views: number; visitors: Set<string> } } = {};
        for (let i = 6; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            const dateStr = d.toISOString().slice(0, 10); // YYYY-MM-DD
            dailyStats[dateStr] = { views: 0, visitors: new Set() };
        }

        // Process hourly stats (0-23) in Bangkok time (UTC+7)
        const hourlyStats = Array.from({ length: 24 }, (_, i) => ({ hour: i, views: 0 }));

        // Process country stats
        const countryCount: { [key: string]: { views: number; visitors: Set<string> } } = {};

        // Unique visitors overall in past 7 days
        const totalUniqueVisitors = new Set<string>();

        // Total views in past 7 days
        let totalViewsPast7Days = 0;

        // Today's stats (Bangkok Time)
        const nowBangkok = new Date(new Date().getTime() + (new Date().getTimezoneOffset() * 60000) + (3600000 * 7));
        const todayStr = nowBangkok.toISOString().slice(0, 10);
        let todayViews = 0;
        const todayUniqueVisitors = new Set<string>();

        (recentViews || []).forEach(row => {
            totalViewsPast7Days += 1;
            // Bangkok local time (UTC+7)
            const date = new Date(row.created_at);
            const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
            const bangkokTime = new Date(utc + (3600000 * 7));
            
            const dateStr = bangkokTime.toISOString().slice(0, 10);
            const hour = bangkokTime.getHours();

            // Daily count (if date is within our 7-day map)
            if (dailyStats[dateStr]) {
                dailyStats[dateStr].views += 1;
                if (row.ip_hash) dailyStats[dateStr].visitors.add(row.ip_hash);
            }

            // Hourly count
            hourlyStats[hour].views += 1;

            // Country count
            const country = normalizeCountry(row.country);
            if (!countryCount[country]) {
                countryCount[country] = { views: 0, visitors: new Set() };
            }
            countryCount[country].views += 1;
            if (row.ip_hash) {
                countryCount[country].visitors.add(row.ip_hash);
            }

            // Global unique visitors count
            if (row.ip_hash) totalUniqueVisitors.add(row.ip_hash);

            // Today's count
            if (dateStr === todayStr) {
                todayViews += 1;
                if (row.ip_hash) todayUniqueVisitors.add(row.ip_hash);
            }
        });

        // Convert sets/objects to array format for easy frontend usage
        const past7Days = Object.keys(dailyStats).map(date => ({
            date,
            views: dailyStats[date].views,
            visitors: dailyStats[date].visitors.size
        })).sort((a, b) => a.date.localeCompare(b.date));

        const topCountries = Object.keys(countryCount).map(c => ({
            country: c,
            views: countryCount[c].views,
            visitors: countryCount[c].visitors.size
        })).sort((a, b) => b.views - a.views).slice(0, 5);

        // Fetch all time data for countries and hourly stats
        const { data: allTimeViews, error: allTimeErr } = await supabase
            .from('page_views')
            .select('created_at, country, ip_hash');
        
        if (allTimeErr) throw allTimeErr;

        const allTimeCountryCount: { [key: string]: { views: number; visitors: Set<string> } } = {};
        const hourlyStatsAllTime = Array.from({ length: 24 }, (_, i) => ({ hour: i, views: 0 }));

        (allTimeViews || []).forEach(row => {
            const country = normalizeCountry(row.country);
            if (!allTimeCountryCount[country]) {
                allTimeCountryCount[country] = { views: 0, visitors: new Set() };
            }
            allTimeCountryCount[country].views += 1;
            if (row.ip_hash) {
                allTimeCountryCount[country].visitors.add(row.ip_hash);
            }

            // Hourly stats all-time (Bangkok time UTC+7)
            if (row.created_at) {
                const date = new Date(row.created_at);
                const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
                const bangkokTime = new Date(utc + (3600000 * 7));
                const hour = bangkokTime.getHours();
                hourlyStatsAllTime[hour].views += 1;
            }
        });

        const topCountriesAllTime = Object.keys(allTimeCountryCount).map(c => ({
            country: c,
            views: allTimeCountryCount[c].views,
            visitors: allTimeCountryCount[c].visitors.size
        })).sort((a, b) => b.views - a.views).slice(0, 5);

        return NextResponse.json({
            setupRequired: false,
            totalViews: totalViews || 0,
            totalUniqueVisitors: totalUniqueVisitors.size,
            totalViewsPast7Days,
            todayViews,
            todayUniqueVisitors: todayUniqueVisitors.size,
            past7Days,
            hourlyStats,
            hourlyStatsAllTime,
            topCountries,
            topCountriesAllTime
        });

    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
