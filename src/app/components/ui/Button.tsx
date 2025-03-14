"use client"

import { ButtonVariant, getButtonStyles } from "@/lib/utils/buttonStyles"

type ButtonProps = {
    variant: ButtonVariant
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
    const { combinedClasses } = getButtonStyles(variant)

    return (
        <button
            className={combinedClasses}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button
