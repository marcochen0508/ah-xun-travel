import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    // Use NEXT_PUBLIC_SITE_URL or hardcoded production URL
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ah-xun-travel.vercel.app";

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/private/", "/admin/"],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
