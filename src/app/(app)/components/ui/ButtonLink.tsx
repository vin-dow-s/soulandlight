import { ButtonVariant, getButtonStyles } from "@/lib/utils/buttonStyles"
import Link from "next/link"

type ButtonLinkProps = {
    variant: ButtonVariant
    href: string
    children: React.ReactNode
}

const ButtonLink = ({ variant, href, children }: ButtonLinkProps) => {
    const { combinedClasses } = getButtonStyles(variant)

    return (
        <Link href={href} className={`${combinedClasses} flex justify-center text-center`}>
            {children}
        </Link>
    )
}

export default ButtonLink 