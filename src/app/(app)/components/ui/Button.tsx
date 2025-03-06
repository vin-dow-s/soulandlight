type ButtonProps = {
    variant: "cta" | "secondary" | "energetique" | "guidance" | "harmonisation"
    onClick?: () => void
    children: React.ReactNode
    type?: "button" | "submit" | "reset"
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
    variant,
    onClick,
    type,
    children,
    disabled,
}) => {
    const baseClasses =
        "px-6 py-3 rounded-lg font-base focus:outline-none cursor-pointer font-main transition-colors"

    let variantClasses = ""
    switch (variant) {
        case "cta":
            variantClasses =
                "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90"
            break
        case "secondary":
            variantClasses =
                "bg-gray-200 text-(--color-secondary) hover:bg-gray-300 w-full"
            break
        case "energetique":
            variantClasses =
                "bg-[var(--color-seance-energetique)] text-white hover:bg-[var(--color-seance-energetique)]/75 w-full"
            break
        case "guidance":
            variantClasses =
                "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 w-full"
            break
        case "harmonisation":
            variantClasses =
                "bg-[var(--color-harmonisation)] text-white hover:bg-[var(--color-harmonisation)]/75 w-full"
            break
        default:
            variantClasses =
                "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/75"
            break
    }

    return (
        <button
            className={`${baseClasses} ${variantClasses}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button
