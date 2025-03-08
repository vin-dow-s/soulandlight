import { MetadataRoute } from "next"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://soulandlight.fr"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticRoutes = [
        {
            url: `${baseUrl}/`,
            lastModified: new Date("2025-03-08").toISOString(),
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date("2025-03-08").toISOString(),
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date("2025-03-08").toISOString(),
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date("2025-03-08").toISOString(),
        },
    ]

    return staticRoutes
}
