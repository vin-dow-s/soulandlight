import Image from "next/image"

type IntroductionProps = {
    heading: string
    subheading?: string
    image?: {
        url: string
        alt?: string
    }
    ctaText?: string
    ctaLink?: string
}

const Introduction = () => {
    return (
        <section className="body-text gap-4  flex flex-col lg:w-[60%] sm:w-[90%] w-[95%] mx-auto justify-center items-center my-16">
            <Image src="/metatron.png" alt="Logo" width={96} height={96} />
            <div className="mt-16">
                <p className="text-xl font-semibold ">
                    Bienvenue sur Soulandlight,
                </p>
                <p>
                    un espace dédié à l'éveil spirituel et à la découverte de
                    soi.
                </p>
                <p className="mt-8">
                    En tant que tarologue, voyant et médium-channel, j’offre des
                    guidances authentiques pour vous aider à mieux comprendre
                    votre chemin de vie et à vous reconnecter à votre âme.
                </p>
                <p className="mt-8">
                    Grâce au tarot et à mes capacités intuitives, je vous
                    accompagne dans la recherche de clarté et de réponses sur
                    les aspects essentiels de votre existence : amour, carrière,
                    relations, mission de vie, guérison émotionnelle, et bien
                    plus. Chaque consultation est une opportunité d’éclairer les
                    zones d’ombre, de libérer les blocages et d’avancer avec
                    confiance vers un futur aligné à votre être profond.
                </p>
                <p className="mt-8">
                    Que vous cherchiez des réponses à des questions précises ou
                    que vous souhaitiez un accompagnement spirituel global, je
                    suis là pour vous offrir un moment sincère, dans l’écoute et
                    dans la lumière.
                </p>
                <p className="mt-8">
                    Prenez rendez-vous et laissez votre âme retrouver son
                    chemin.
                </p>
                <p className="mt-8">Avec Amour et Lumière,</p>
            </div>
            <div className="signature text-4xl text-white  w-full">Pascal</div>
        </section>
    )
}

export default Introduction
