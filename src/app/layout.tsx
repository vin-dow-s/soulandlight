import { babylonica, juliusSansOne, openSans } from "@/lib/fonts"
import type { Metadata } from "next"
import Footer from "./(app)/components/sections/Footer"
import Navigation from "./(app)/components/sections/Navigation"
import "./globals.css"

export const dynamic = "force-static"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL

export const metadata: Metadata = {
    title: {
        default: `Soulandlight • Tarologue - Voyant - Medium Channel`,
        template: `%s • Soulandlight`,
    },
    description:
        "Je reçois et transmets les messages de l'univers qui vous sont destinés pour vous aider sur votre chemin de vie. Clarté, apaisement, lumière. Libérez-vous.",
    keywords: ["spiritualité", "tarot", "medium", "voyant", "tirage"],
    openGraph: {
        title: `Soulandlight`,
        description:
            "Je reçois et transmets les messages de l'univers qui vous sont destinés pour vous aider sur votre chemin de vie. Clarté, apaisement, lumière. Libérez-vous.",
        url: SITE_URL,
        type: "website",
        images: [
            {
                url: `${SITE_URL}/icons/favicon.ico`,
                width: 1200,
                height: 630,
                alt: `Soulandlight`,
            },
            {
                url: `${SITE_URL}/icons/favicon.ico`,
                width: 1200,
                height: 630,
                alt: `Soulandlight`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `Soulandlight`,
        description:
            "Je reçois et transmets les messages de l'univers qui vous sont destinés pour vous aider sur votre chemin de vie. Clarté, apaisement, lumière. Libérez-vous.",
        images: [`${SITE_URL}/icons/favicon.ico`],
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

                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" href="/icons/favicon.ico" />
            </head>
            <body>
                <Navigation />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
