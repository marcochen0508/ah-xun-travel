import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    // Use VERCEL_URL if available, otherwise localhost for dev
    const baseUrl = process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000";

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/private/",
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
