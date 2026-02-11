import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    // Use VERCEL_URL if available, otherwise localhost for dev
    const baseUrl = process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        // Add other static routes if they exist, e.g., /about, /features
        // Dynamic routes can be fetched and mapped here in the future
    ];
}
