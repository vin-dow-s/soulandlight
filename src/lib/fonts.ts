import { Babylonica, Julius_Sans_One, Open_Sans } from "next/font/google"

export const juliusSansOne = Julius_Sans_One({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
    variable: "--font-julius-sans-one",
})

export const babylonica = Babylonica({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
    variable: "--font-babylonica",
})

export const openSans = Open_Sans({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-open-sans",
})
