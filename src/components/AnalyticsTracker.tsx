"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function AnalyticsTracker() {
    const pathname = usePathname();
    const prevPathname = useRef<string | null>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        // Skip tracking if accessing admin dashboard or API routes
        if (pathname.startsWith("/admin") || pathname.startsWith("/api")) {
            return;
        }

        // Avoid double-logging the exact same page path on fast re-renders
        if (prevPathname.current === pathname) return;
        prevPathname.current = pathname;

        const trackView = async () => {
            try {
                await fetch("/api/track", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        page_path: pathname,
                        referrer: document.referrer || null,
                    }),
                });
            } catch (err) {
                console.error("Failed to track page view:", err);
            }
        };

        // Delay slightly to ensure page load feels fast and let referrer settle
        const timer = setTimeout(trackView, 1000);
        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
}
