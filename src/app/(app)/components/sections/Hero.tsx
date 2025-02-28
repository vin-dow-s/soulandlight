import Image from "next/image"

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
        <section className="hero text-center h-[100dvh] flex items-center justify-center flex-col gap-4 bg-black pt-16">
            <h1 className=" text-9xl font-regular text-white mt-0 drop-shadow-xl">
                SOUL<span className="text-8xl ml-2">and</span>LIGHT
            </h1>

            <p className="mt-4 text-3xl text-white drop-shadow-xl">
                Tarologue - Voyant - Medium Channel Spirituel
            </p>
            <div className="">
                <Image
                    src="/arrows-down.svg"
                    alt="Flèches vers le bas"
                    width={32}
                    height={32}
                />
            </div>
        </section>
    )
}

export default Hero
