import Hero from "./components/sections/Hero"
import Introduction from "./components/sections/Introduction"

// Define the Page type to fix TypeScript errors
type PageHero = {
    heading: string
    subheading?: string
    image?: {
        url: string
        alt?: string
    }
    ctaText?: string
    ctaLink?: string
}

type FeaturedSection = {
    title: string
    content?: string
    image?: {
        url: string
        alt?: string
    }
}

type Page = {
    id: string
    title: string
    slug: string
    isHomePage: boolean
    content: string
    hero?: PageHero
    featuredSections?: FeaturedSection[]
}

export default async function HomePage() {
    return (
        <>
            <Hero />
            <Introduction />
        </>
    )
}
