import About from "./components/sections/About"
import Hero from "./components/sections/Hero"
import Services from "./components/sections/Services"
import Testimonials from "./components/sections/Testimonials"
import ButtonLink from "./components/ui/ButtonLink"

const HomePage = () => {
    return (
        <>
            <Hero />
            <Services />
            <Testimonials />
            <About />
            <div className="flex flex-col justify-center items-center gap-6 my-96">
                <p className="text-sm sm:text-base font-main text-center font-medium">
                    Vous avez des questions ou souhaitez réserver une
                    consultation ?
                </p>
                <ButtonLink href="/contact" variant="secondary">
                    Contactez-moi
                </ButtonLink>
            </div>
        </>
    )
}

export default HomePage
