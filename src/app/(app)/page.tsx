import Link from "next/link"
import About from "./components/sections/About"
import Hero from "./components/sections/Hero"
import Services from "./components/sections/Services"
import Button from "./components/ui/Button"

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

const HomePage = () => {
    return (
        <>
            <Hero />
            <Services />
            <About />
            <div className="flex flex-col justify-center items-center gap-4 mt-96 mb-64">
                <h4>Vous avez des questions ou envie d'en savoir plus ?</h4>
                <Link href="/contact">
                    <Button variant="secondary">Contactez-moi</Button>
                </Link>
            </div>
        </>
    )
}

export default HomePage
