import { babylonica, juliusSansOne, openSans } from "@/lib/fonts"
import type { Metadata } from "next"
import "../globals.css"
import Footer from "./components/sections/Footer"
import Navigation from "./components/sections/Navigation"

export const metadata: Metadata = {
    title: "Soulandlight - Tarologue - Voyant - Medium Channel",
    description:
        "Je reçois et transmets les messages de l'univers qui vous sont destinés pour vous aider sur votre chemin de vie. Clarté, apaisement, lumière. Libérez-vous.",
    keywords: ["spiritualité", "tarot", "medium", "voyant", "tirage"],
    authors: [{ name: "Soulandlight" }],
    metadataBase: new URL("https://soulandlight.fr"),
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
            <body>
                <Navigation />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
