import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "../globals.css"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

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
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <main>{children}</main>
            </body>
        </html>
    )
}
