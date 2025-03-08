type ButtonProps = {
    variant: "cta" | "secondary" | "energetique" | "guidance" | "harmonisation"
    onClick?: () => void
    children: React.ReactNode
    type?: "button" | "submit" | "reset"
    disabled?: boolean
}

const Button = ({
    variant,
    onClick,
    type,
    children,
    disabled,
}: ButtonProps) => {
    const baseClasses =
        "px-6 py-3 rounded-lg font-base focus:outline-none cursor-pointer font-main relative"

    let variantClasses = ""
    switch (variant) {
        case "cta":
            variantClasses =
                "gradient-primary text-white flex items-center gap-2"
            break
        case "secondary":
            variantClasses =
                "bg-gray-200 text-[var(--color-secondary)] hover:bg-gray-400 w-full transition-colors"
            break
        case "energetique":
            variantClasses = "gradient-seance-energetique text-white w-full"
            break
        case "guidance":
            variantClasses = "gradient-primary text-white w-full"
            break
        case "harmonisation":
            variantClasses = "gradient-harmonisation text-white w-full"
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
