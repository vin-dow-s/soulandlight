"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const testimonials = [
    {
        name: "Sonia Larrue",
        rating: 5,
        date: "il y a 5 mois",
        text: "Merci beaucoup Pascal pour ton écoute, ta bienveillance, merci infiniment pour tout (1er rdv au salon de barsac dimanche 🙏)",
        avatar: "/assets/sonia.png",
        mobile: true,
    },
    {
        name: "Ludivine PRIEGO",
        rating: 5,
        date: "il y a 11 mois",
        text: "Pascal est un véritable guide pour éclairer notre chemin. Par sa bienveillance et sa gentillesse il sera vous aider à mieux comprendre ce que vous vivez et ce qu'il vous attend. Encore merci Pascal pour tout. Avec tout mon amour, Ludivine.",
        avatar: "/assets/ludivine.png",
        mobile: true,
    },
    {
        name: "Anais Renoncourt",
        rating: 5,
        date: "il y a 11 mois",
        text: "Je vais mettre des mots qui vienne vraiment du coeur. C'est une personne qui au son de sa voix trouve les mots juste et apaise votre cœur. Il sait redonner le sourire et éclairer votre chemin. La vibration de sa connexion est magique. Il est intervenu dans l'association que j'ai créé pour aider les personnes et il le fait avec le cœur et les personnes ressorte avec le sourire et de la lumière. Pascal éclair votre chemin aller le voir sans crainte. Merci Pascal 🙏🌠",
        avatar: "/assets/anais.png",
    },
    {
        name: "C-CileCover",
        rating: 5,
        date: "il y a 9 mois",
        text: "Quelle belle rencontre !! Je n'en reviens toujours pas...une bienveillance, une écoute au top ! Des réponses précises à des question précises. Mais surtout Pascal a pu me faire 'entendre', j'ai modifié enfin ce que je n'arrivais pas à modifier malgré des séances avec d'autres personnes ! Et depuis je ressens un vrai changement en moi et pour cela je ne peux que le remercier infiniment. Cécile Chevalier",
        avatar: "/assets/cecile.png",
    },
    {
        name: "Caroline PLANES",
        rating: 5,
        date: "il y a 9 mois",
        text: `Pascal : un phare dans la tempête. Nov. 2023, triste constat : presque un an de suivi thérapeutique pour sortir d´une consommation d´alcool excessive et si peu de progrès. Plus je me concentre sur (l´arrêt de) l´alcool et plus il "s´incruste" dans ma vie. Sur les recommandations d´une amie, je contacte Pascal qui me reçoit très rapidement. Je suis aussitôt touchée par sa grande bienveillance, son écoute et sa patience à toute épreuve. Pascal, c´est aussi le "messager" des mots justes, libérateurs et guérisseurs qui se logent directement dans votre cœur et dans votre âme. Depuis cette première séance, plus une goutte d'alcool et la joie profonde d´avoir retrouvé le chemin de ma liberté. Il est évident que ma volonté et ma détermination ont joué un rôle important dans mon processus de guérison. Néanmoins, l´étincelle de lumière et d´espérance que Pascal a su allumer en moi a été, sans aucun doute, le déclencheur de ma guérison. Si vous aussi vous traversez une tempête, je ne peux que vous recommander de lui faire confiance. Merci Pascal pour ta Lumière, pour ton Énergie positive contagieuse et pour tout l'Amour que tu sais transmettre. Caroline`,
        avatar: "/assets/caroline.png",
    },
    {
        name: "elise Brille",
        rating: 5,
        date: "il y a 5 mois",
        text: "Depuis la séance avec Pascal, je me sens reconnectée à moi-même, avec plus d'énergie et surtout j'ai pris conscience de ma valeur. Merci beaucoup, n'hésitez pas.",
        avatar: "/assets/elise.png",
        mobile: true,
    },
    {
        name: "Angelique Osinski",
        rating: 5,
        date: "il y a 10 mois",
        text: `Un grand Merci Pascal 🙏 Une séance dans la douceur du cœur où l'on se sent vraiment bien. Des messages révélateurs qui nous guident au plus profond de nous même. Pour ma part, ils sont devenus de véritables mantras qui me portent. Une toux émotionnelle qui s'en va "inexplicablement" dès le lendemain ! Merci pour tes mots qui touchent directement notre Âme.`,
        avatar: "/assets/angelique.png",
    },
    {
        name: "nadege desailloud",
        rating: 5,
        date: "il y a 10 mois",
        text: `Un grand merci à Pascal pour son accueil chaleureux, son écoute, et ces conseils précieux, et juste. IL m'a été d'un grand secours, Pascal est une personne qui travaille avec le coeur 💓 je recommande vivement 🙏🙏🙏`,
        avatar: "/assets/nadege.png",
        mobile: true,
    },
]

const Testimonials = () => {
    const [isMobile, setIsMobile] = useState(false)

    // Detect if we're on mobile
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        // Initial check
        checkIfMobile()

        // Add event listener for window resize
        window.addEventListener("resize", checkIfMobile)

        // Cleanup
        return () => window.removeEventListener("resize", checkIfMobile)
    }, [])

    // Filter testimonials based on device
    const filteredTestimonials = isMobile
        ? testimonials.filter((testimonial) => testimonial.mobile)
        : testimonials

    return (
        <section
            id="avis-section"
            className="body-text flex flex-col w-full mx-auto justify-center items-center sm:my-64 my-32 px-4"
        >
            <h2
                id="avis"
                className="text-4xl sm:text-5xl font-heading mb-8 sm:mb-16 text-center"
            >
                Avis
            </h2>
            <div className="mx-auto max-w-7xl">
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-4 sm:space-y-8">
                    {filteredTestimonials.map((testimonial, index) => (
                        <div key={index} className="break-inside-avoid">
                            <TestimonialCard
                                testimonial={testimonial}
                                isFeatured={!isMobile && index === 3}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const TestimonialCard = ({
    testimonial,
    isFeatured,
}: {
    testimonial: (typeof testimonials)[0]
    isFeatured?: boolean
}) => {
    const maxLength = 395
    const isTextLong = testimonial.text.length > maxLength

    return (
        <div className="bg-gray-800 p-6 rounded-2xl inline-block w-full break-inside-avoid bg-gradient-to-b from-gray-800 to-gray-900">
            <div>
                <p className="text-gray-300 mb-6 text-base">
                    "
                    {!isTextLong || isFeatured
                        ? testimonial.text
                        : `${testimonial.text.substring(0, maxLength)}...`}
                    "
                </p>
            </div>
            <div className="mt-auto">
                <div className="flex items-center gap-3 justify-between">
                    <div className="flex items-center gap-3">
                        <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <div>
                            <h3 className="text-sm font-semibold">
                                {testimonial.name}
                            </h3>
                            {testimonial.date && (
                                <p className="text-xs text-gray-400">
                                    {testimonial.date}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center mt-4">
                        {"★"
                            .repeat(Math.round(testimonial.rating))
                            .split("")
                            .map((star, i) => (
                                <span
                                    key={i}
                                    className="text-yellow-400 text-lg"
                                >
                                    ★
                                </span>
                            ))}
                        <p className="text-xs text-gray-400 ml-2">5/5</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
