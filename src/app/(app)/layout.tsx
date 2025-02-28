import { babylonica, juliusSansOne, openSans } from "@/lib/fonts"
import type { Metadata } from "next"
import "../globals.css"
import Footer from "./components/sections/Footer"
import Navigation from "./components/sections/Navigation"

export const metadata: Metadata = {
    title: "Soulandlight",
    description: "Discover spiritual guidance and holistic wellness",
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
