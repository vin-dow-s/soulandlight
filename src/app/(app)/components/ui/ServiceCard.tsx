import Link from "next/link"
import Button from "./Button"
import CheckIcon from "./CheckIcon"

type ServiceCardProps = {
    title: string
    variant: "cta" | "secondary" | "energetique" | "guidance" | "harmonisation"
    subtitle?: string
}

const variantToList = {
    energetique: {
        points: [
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
            "Tirages et interprétations des cartes du tarot",
            "Réponses à vos questions urgentes pour éclairer votre chemin",
            "Conseils personnalisés pour vous apporter la lumière sur chaque aspect de votre vie",
            "Accompagnement bienveillant sur votre chemin de vie",
            "Messages de l'univers pour votre mission d'âme",
        ],
    },
    harmonisation: {
        points: [
            "Purification et harmonisation (lieux personnels ou profesionnels)",
            "Libération des blocages énergétiques",
            "Boost énergétique (pour lancement de votre activité ou pour attirer la prospérité)",
            "Grande protection spirituelle (purification et mise sous protection du lieu)",
        ],
    },
}

const ServiceCard = ({ title, variant, subtitle }: ServiceCardProps) => {
    let color = ""
    let price = ""

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
            className={`border rounded-xl shadow-md w-full p-8 flex flex-col justify-between`}
            style={{
                borderColor: `var(${color})`,
                boxShadow: `1px 3px 5px 0 var(${color})`,
            }}
        >
            <div className="text-center">
                <div className="mb-10">
                    <h3
                        className={`${
                            variant === "harmonisation"
                                ? "text-xl sm:text-2xl"
                                : "text-2xl sm:text-3xl"
                        } font-heading`}
                    >
                        {title}
                    </h3>
                    {subtitle && (
                        <h4 className="text-sm font-heading text-gray-400 mt-1">
                            {subtitle}
                        </h4>
                    )}
                </div>
                <div className="mt-auto flex justify-center min-h-[3.5rem] mb-10">
                    {" "}
                    <h4 className="text-3xl sm:text-4xl font-heading">
                        {variant == "energetique" ||
                        variant == "harmonisation" ? (
                            <div className="flex items-center justify-center">
                                <div className="text-lg self-baseline">*</div>
                                <div>
                                    De 70
                                    <span className="text-sm">€</span> à 150
                                    <span className="text-sm">€</span>
                                </div>
                            </div>
                        ) : (
                            <div>
                                70<span className="text-sm">€</span>
                            </div>
                        )}
                    </h4>
                </div>
            </div>
            <ul className="gap-4 flex flex-col flex-1 px-0 p-0">
                {variantToList[
                    variant as keyof typeof variantToList
                ].points.map((point) => (
                    <li
                        key={point}
                        className="text-xs sm:text-sm flex items-start gap-2"
                    >
                        <CheckIcon
                            color="white"
                            className="mt-1 sm:mt-1.5 ml-[-1rem] flex-shrink-0"
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
