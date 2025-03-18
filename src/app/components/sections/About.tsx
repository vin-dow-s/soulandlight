import Image from "next/image"
import Link from "next/link"

const About = () => {
    return (
        <section
            id="a-propos-section"
            className="body-text flex flex-col lg:w-[75%] sm:w-[90%] w-[95%] mx-auto justify-center items-center sm:mt-96 mt-64 px-4"
        >
            <h2
                id="a-propos"
                className="text-4xl sm:text-5xl font-heading mb-8 sm:mb-16"
            >
                À propos
            </h2>
            <div className="flex flex-col xl:flex-row gap-12">
                <div className="w-full flex flex-col gap-4 text-center">
                    <Image
                        src="/assets/pascal2.webp"
                        alt="Tarot en ligne, guidances, libération émotionnelle - Pascal - Consultations spirituelles et énergétiques"
                        className="rounded-lg max-w-[600px] xl:min-w-[400px] w-full"
                        width={650}
                        height={650}
                    />
                    <p className="text-gray-300 text-xs sm:text-sm max-sm:text-center min-[1280px]:text-center text-left">
                        Il n'y a pas de hasard si vous êtes ici… Votre âme
                        cherche des réponses, une direction, une libération.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-lg font-semibold">
                        Bonjour, je suis Pascal,
                    </p>
                    <p className="text-gray-300">
                        j'ai vécu une expérience de mort imminente à l'âge de 9
                        ans, suite à laquelle mes perceptions, mes ressentis et
                        mes intuitions se sont développés, puis amplifiés au
                        travers de mes expériences de vie, me guidant à être
                        celui que je suis ici et maintenant.
                    </p>
                    <p className="text-gray-300">
                        Aujourd'hui tarologue, énergéticien et accompagnant
                        spirituel,{" "}
                        <span className="text-white">
                            je vous guide sur votre chemin avec clarté et
                            bienveillance en mettant ma connexion au service de
                            votre évolution.
                        </span>
                    </p>
                    {/* <p className="font-semibold my-4">
                        Mes guidances sont profondes, révélatrices, et vous
                        apporteront la lumière et les réponses dont vous avez
                        besoin.
                    </p> */}
                    <p className="text-gray-300">
                        <span className="text-white">
                            Je vous aide à éclairer votre chemin, à libérer ce
                            qui freine votre épanouissement et à retrouver votre
                            alignement profond.
                        </span>{" "}
                        <br className="sm:hidden" />
                        <br className="sm:hidden" /> Mon approche va au-delà des
                        prédictions : elle est une invitation à la
                        transformation, à la reconnexion à votre essence et à
                        votre lumière intérieure.
                    </p>
                    <p className="font-semibold">
                        Prêt(e) à avancer ?{" "}
                        <Link href="/contact">
                            <span className="underline">Contactez-moi</span>
                        </Link>
                        <span className="font-normal">
                            {" "}
                            et entamons ensemble ce voyage.
                        </span>{" "}
                        <span className="font-semibold text-gray-300">
                            {" "}
                            Suivez l'appel de votre âme.{" "}
                        </span>
                    </p>
                    <p className="font-semibold"></p>

                    <p className="font-signature text-4xl">Pascal</p>
                </div>
            </div>
        </section>
    )
}

export default About
