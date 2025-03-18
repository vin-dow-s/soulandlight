import { babylonica, juliusSansOne, openSans } from "@/lib/fonts"
import type { Metadata } from "next"
import Footer from "./components/sections/Footer"
import Navigation from "./components/sections/Navigation"
import "./globals.css"

export const dynamic = "force-static"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL

export const metadata: Metadata = {
    title: {
        default: `Tarologue - Voyant - Medium Channel • Soulandlight`,
        template: `%s • Soulandlight`,
    },
    description:
        "Besoin de réponses claires ? Tarologue, voyant et medium expérimenté, je vous guide avec bienveillance et dans le cœur. Consultations en ligne ou en présentiel (Bordeaux et alentours).",
    keywords: [
        "tarologue bordeaux",
        "voyant bordeaux",
        "voyance en ligne",
        "medium bordeaux",
        "medium en ligne",
        "consultation tarot",
        "tirage de cartes",
        "tirage tarot en ligne",
        "séance énergétique",
        "guidance spirituelle personnalisée",
        "guidance spirituelle",
        "guide spirituel",
    ],
    openGraph: {
        title: `Tarologue - Voyant - Medium Channel • Soulandlight`,
        description:
            "Besoin de réponses claires ? Tarologue, voyant et medium expérimenté, je vous guide avec bienveillance et dans le cœur. Consultations en ligne ou en présentiel (Bordeaux et alentours).",
        url: SITE_URL,
        type: "website",
        images: [
            {
                url: `${SITE_URL}/assets/hero-preview.webp`,
                width: 1200,
                height: 630,
                alt: `Tarologue, voyant, medium - Soulandlight -Consultations en ligne ou à Bordeaux et alentours.`,
            },
            {
                url: `${SITE_URL}/assets/hero-preview.webp`,
                width: 1200,
                height: 630,
                alt: `Tarologue, voyant, medium - Soulandlight -Consultations en ligne ou à Bordeaux et alentours.`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `Tarologue - Voyant - Medium Channel • Soulandlight`,
        description:
            "Besoin de réponses claires ? Tarologue, voyant et medium expérimenté, je vous guide avec bienveillance et dans le cœur. Consultations en ligne ou en présentiel (Bordeaux et alentours).",
        images: [`${SITE_URL}/assets/hero-preview.webp`],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="fr"
            className={`${juliusSansOne.variable} ${openSans.variable} ${babylonica.variable} antialiased`}
        >
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="theme-color" content="#ff7321" />

                <link rel="canonical" href={SITE_URL} />

                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" href="/icons/favicon.ico" />
                <link rel="preload" href="/assets/hero.webp" as="image" />
            </head>
            <body>
                <Navigation />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
