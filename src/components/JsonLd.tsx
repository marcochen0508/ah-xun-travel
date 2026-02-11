export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "Ah Xun Chiang Mai Travel",
        "image": "https://ah-xun-travel.vercel.app/og-image.jpg",
        "description": "專業、舒適、深度慢旅。清邁包車首選，提供十人座VIP車型與中文司機。",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chiang Mai",
            "addressCountry": "TH"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.7883,
            "longitude": 98.9853
        },
        "url": "https://ah-xun-travel.vercel.app",
        "telephone": "+66-1234-5678", // Placeholder, should be updated with real info if available
        "priceRange": "$$"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
