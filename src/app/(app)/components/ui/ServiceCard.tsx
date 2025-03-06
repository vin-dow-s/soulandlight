import Link from "next/link"
import Button from "./Button"
import CheckIcon from "./CheckIcon"

type ServiceCardProps = {
    title: string
    variant: "cta" | "secondary" | "energetique" | "guidance" | "harmonisation"
    subtitle?: string
    price: string
}

const variantToList = {
    energetique: {
        points: [
            "Connexion aux énergies Christique & Mariale",
            "Libération de vos blocages énergétiques et harmonisation de vos chakras",
            "Libération karmique et transgénérationnelle",
            "Rééquilibrage et augmentation de votre taux vibratoire",
            "Activation de votre potentiel bien-être intérieur",
            "Aide à vaincre les différentes addictions et dépendances (Tabac, Alcool...)",
            "Accompagnement spirituel et émotionnel sur votre chemin de croissance et d'alignement divin",
        ],
    },
    guidance: {
        points: [
            "Connexion à mes guides et à l'univers",
            "Tirages et interprétations des cartes du tarot",
            "Réponses à vos questions urgentes pour éclairer votre chemin",
            "Conseils personnalisés pour vous apporter la lumière sur chaque aspect de votre vie",
            "Accompagnement bienveillant sur votre chemin de vie",
            "Messages de l'univers pour votre mission d'âme",
        ],
    },
    harmonisation: {
        points: [
            "Purification et harmonisation (lieux professionnels ou personnels)",
            "Libération des blocages énergétiques",
            "Boost énergétique (pour lancement de votre activité ou pour attirer la prospérité)",
            "Grande protection spirituelle (purification et mise sous protection du lieu)",
        ],
    },
}

const ServiceCard = ({ title, variant, subtitle, price }: ServiceCardProps) => {
    let color = ""
    switch (variant) {
        case "energetique":
            color = "--color-seance-energetique"
            break
        case "guidance":
            color = "--color-primary"
            break
        case "harmonisation":
            color = "--color-harmonisation"
            break
        default:
            color = "--color-primary"
    }

    return (
        <div
            className={`service-card border rounded-xl shadow-md w-100 p-8`}
            style={{
                borderColor: `var(${color})`,
                boxShadow: `1px 3px 5px 0 var(${color})`,
            }}
        >
            <div className="text-center">
                <div className="h-28">
                    <h3
                        className={`${
                            variant == "harmonisation" ? "text-2xl" : "text-3xl"
                        } font-heading`}
                    >
                        {title}
                    </h3>
                    {subtitle && (
                        <h4 className="text-sm font-heading text-gray-400">
                            {subtitle}
                        </h4>
                    )}
                </div>
                <div className="h-24">
                    <h4 className="text-4xl font-heading">
                        {price.split("€").map((part, index, arr) => (
                            <span key={index}>
                                {part}
                                {index < arr.length - 1 && (
                                    <span className="text-sm">€</span>
                                )}
                            </span>
                        ))}
                    </h4>
                </div>
            </div>
            <ul className="gap-4 flex flex-col h-80 px-0 p-0">
                {variantToList[
                    variant as keyof typeof variantToList
                ].points.map((point) => (
                    <li key={point} className="text-sm flex items-start gap-2">
                        <CheckIcon
                            color={`var(${color})`}
                            className="mt-0.5 flex-shrink-0"
                        />
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
            <div className="flex justify-center items-center mt-16">
                <Link href="/contact" className="w-full">
                    <Button variant={variant}>Contactez-moi</Button>
                </Link>
            </div>
        </div>
    )
}

export default ServiceCard
