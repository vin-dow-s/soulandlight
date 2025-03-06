import Image from "next/image"
import Link from "next/link"
import Button from "../ui/Button"

type HeroProps = {
    heading: string
    subheading?: string
    image?: {
        url: string
        alt?: string
    }
    ctaText?: string
    ctaLink?: string
}

const Hero = () => {
    return (
        <section className="hero  h-[100dvh] flex items-center justify-center flex-row  bg-black pt-16">
            <div className="flex flex-col gap-8 mr-[-128px] ">
                <h2 className=" text-5xl font-regular text-white drop-shadow-xl leading-16">
                    Vous cherchez des réponses <br /> et souhaitez avancer ?
                </h2>

                <h3 className=" text-gray-400 drop-shadow-xl font-main mb-4 ">
                    Je reçois et transmets les messages de l'univers qui vous
                    sont <br /> destinés pour vous aider sur votre chemin de
                    vie.
                    <br className="mb-2" />
                    Clarté, apaisement, lumière. Libérez-vous.
                </h3>
                <Link href="/#services">
                    <Button variant="cta">Découvrir mes services</Button>
                </Link>
            </div>
            <Image
                src="/pascal.png"
                alt="Pascal photo"
                width={750}
                height={750}
                className="mr-[-128px]"
            />
        </section>
    )
}

export default Hero
