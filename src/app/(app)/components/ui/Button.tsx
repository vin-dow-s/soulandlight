type ButtonProps = {
    variant: "cta" | "secondary"
    onClick?: () => void
    children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ variant, onClick, children }) => {
    const baseClasses = "px-6 py-3 rounded-lg font-medium focus:outline-none"
    const variantClasses =
        variant === "cta"
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"

    return (
        <button
            className={`${baseClasses} ${variantClasses}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button
