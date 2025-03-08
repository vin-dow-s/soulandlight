import Link from "next/link"
import About from "./components/sections/About"
import Hero from "./components/sections/Hero"
import Services from "./components/sections/Services"
import Testimonials from "./components/sections/Testimonials"
import Button from "./components/ui/Button"

const HomePage = () => {
    return (
        <>
            <Hero />
            <Services />
            <Testimonials />
            <About />
            <div className="flex flex-col justify-center items-center gap-6 mt-96 mb-64">
                <h4 className="text-sm sm:text-base font-main">
                    Vous avez des questions ou envie d'en savoir plus ?
                </h4>
                <Link href="/contact">
                    <Button variant="secondary">Contactez-moi</Button>
                </Link>
            </div>
        </>
    )
}

export default HomePage
