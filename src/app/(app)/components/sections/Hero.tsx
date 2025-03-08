import Image from "next/image"
import Link from "next/link"
import { IoIosArrowRoundForward, IoIosEye, IoMdHeart } from "react-icons/io"
import { MdEmojiEmotions } from "react-icons/md"
import Button from "../ui/Button"

const Hero = () => {
    return (
        <section className="hero flex flex-col lg:flex-row items-center justify-center w-full min-h-[100svh] bg-black pt-16 max-sm:px-1 max-lg:mb-32">
            {/* 🔍 SEO H1 */}
            <h1 className="sr-only">
                Tarologue - Voyant - Medium Channel | Guidance Spirituelle &
                Énergétique dans le sud-ouest ou en ligne.
            </h1>

            {/* Left Side: Text Content */}
            <div className="flex flex-col text-center lg:text-left items-center lg:items-start  lg:mr-[-8em] max-lg:my-16">
                {/* Google Reviews Badge */}
                <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center rounded-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 30 30"
                            fill="#d1d5dc"
                        >
                            <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"></path>
                        </svg>
                        <span className="text-sm text-gray-300 ml-1 font-main">
                            ★★★★★ (10+ avis)
                        </span>
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-[clamp(2.5rem,3vw,4rem)] max-md:text-[clamp(1.5rem,5vw,2.5rem)] font-regular text-white drop-shadow-xl leading-tight mb-6">
                    {" "}
                    Vous cherchez des réponses <br />
                    et souhaitez avancer ?
                </h2>

                {/* Subtitle */}
                <h3 className="text-[clamp(14px,1vw,1rem)] text-gray-400 font-main mb-6 leading-relaxed sm:leading-6 max-md:mx-24 max-sm:mx-8">
                    Je reçois et transmets les messages de l'univers qui vous
                    sont <br className="hidden sm:inline" /> destinés pour vous
                    aider sur votre chemin de vie et d'âme.
                </h3>

                {/* Keywords */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs mb-8">
                    <span className="text-gray-400 font-main flex items-center gap-1">
                        <IoIosEye />
                        Clarté
                    </span>
                    <span className="text-gray-400 font-main flex items-center gap-1">
                        <MdEmojiEmotions />
                        Apaisement
                    </span>
                    <span className="text-gray-400 font-main flex items-center gap-1">
                        <IoMdHeart />
                        Libération émotionnelle
                    </span>
                </div>

                {/* CTA */}
                <Link href="/#services">
                    <Button variant="cta">
                        Découvrir mes services
                        <IoIosArrowRoundForward className="w-6 h-6" />
                    </Button>
                </Link>
            </div>

            {/* Right Side: Image (Shrinks Responsively) */}
            <div className="flex justify-center lg:justify-end">
                <Image
                    src="/assets/pascal.png"
                    alt="Pascal photo"
                    width={550}
                    height={550}
                    className="w-[clamp(250px,40vw,300px)] lg:w-[clamp(300px,38vw,550px)] max-w-[550px]"
                />
            </div>
        </section>
    )
}

export default Hero
