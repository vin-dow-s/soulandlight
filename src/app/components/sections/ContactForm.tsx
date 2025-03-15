"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { ReCaptchaProvider, useReCaptcha } from "next-recaptcha-v3"
import Link from "next/link"
import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import Button from "../ui/Button"

const contactSchema = z.object({
    name: z
        .string()
        .min(2, { message: "Le prénom doit contenir au moins 2 caractères" }),
    email: z
        .string()
        .email({ message: "Veuillez entrer une adresse email valide" }),
    message: z.string().min(10, {
        message: "Le message doit contenir au moins 10 caractères",
    }),
})

type ContactFormData = z.infer<typeof contactSchema>

const ContactFormWithRecaptcha = () => {
    return (
        <ReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
            useEnterprise={false}
        >
            <ContactFormContent />
        </ReCaptchaProvider>
    )
}

const ContactFormContent = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const [submitError, setSubmitError] = useState<string | null>(null)
    const [recaptchaReady, setRecaptchaReady] = useState(false)

    const { executeRecaptcha } = useReCaptcha()

    useEffect(() => {
        const checkRecaptchaReady = async () => {
            try {
                // Try to execute reCAPTCHA with a small timeout
                const controller = new AbortController()
                const timeoutId = setTimeout(() => controller.abort(), 1000)

                await Promise.race([
                    executeRecaptcha("check_ready"),
                    new Promise((_, reject) => {
                        controller.signal.addEventListener("abort", () => {
                            reject(new Error("Timeout"))
                        })
                    }),
                ])

                clearTimeout(timeoutId)
                setRecaptchaReady(true)
            } catch (error) {
                setTimeout(checkRecaptchaReady, 1000)
            }
        }

        checkRecaptchaReady()

        return () => {
            setRecaptchaReady(false)
        }
    }, [executeRecaptcha])

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
        if (!recaptchaReady) {
            setSubmitError(
                "reCAPTCHA n'est pas encore chargé. Veuillez réessayer dans quelques secondes."
            )
            return
        }

        setIsSubmitting(true)
        setSubmitError(null)

        try {
            // Execute reCAPTCHA and get token
            const token = await executeRecaptcha("form_submit")

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...data,
                    token,
                }),
            })

            const responseData = await response.json()

            if (!response.ok) {
                throw new Error(
                    responseData.error ||
                        "Une erreur est survenue lors de l'envoi du formulaire"
                )
            }

            setSubmitSuccess(true)
            reset()
        } catch (error) {
            setSubmitError(
                error instanceof Error
                    ? error.message
                    : "Une erreur est survenue"
            )
            console.error("Contact form error:", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div>
            {submitSuccess ? (
                <div className="max-w-2xl mx-auto p-6  border border-green-300 rounded-lg">
                    <h3 className="text-xl font-heading text-green-500 mb-2">
                        Message envoyé avec succès!
                    </h3>
                    <p className="mb-8">
                        Merci pour votre message. Je vous répondrai dans les
                        plus brefs délais.
                    </p>
                    <Link href="/">
                        <button
                            onClick={() => setSubmitSuccess(false)}
                            className="px-4 py-2 bg-gray-200 text-(--color-secondary) rounded hover:bg-gray-400 transition-colors cursor-pointer"
                        >
                            Retour à la page d'accueil
                        </button>
                    </Link>
                </div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    {submitError && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                            {submitError}
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium"
                            >
                                Prénom <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="name"
                                type="text"
                                className={`bg-white w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none text-black ${
                                    errors.name
                                        ? "border-red-500 focus:ring-red-200"
                                        : "border-gray-300 focus:ring-primary/20"
                                }`}
                                placeholder="Votre prénom"
                                aria-invalid={errors.name ? "true" : "false"}
                                {...register("name")}
                            />
                            {errors.name && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium"
                            >
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="email"
                                type="email"
                                className={`bg-white w-full px-4 py-3 border rounded-lg focus:ring-2  focus:outline-none text-black ${
                                    errors.email
                                        ? "border-red-500 focus:ring-red-200"
                                        : "border-gray-300 focus:ring-primary/20"
                                }`}
                                placeholder="Votre email"
                                aria-invalid={errors.email ? "true" : "false"}
                                {...register("email")}
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="mb-1">
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium"
                        >
                            Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="message"
                            rows={6}
                            className={`bg-white w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none text-black ${
                                errors.message
                                    ? "border-red-500 focus:ring-red-200"
                                    : "border-gray-300 focus:ring-primary/20"
                            }`}
                            placeholder="Ecrivez votre message ici"
                            aria-invalid={errors.message ? "true" : "false"}
                            {...register("message")}
                        ></textarea>
                        {errors.message && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.message.message}
                            </p>
                        )}
                    </div>

                    <div className="text-left flex justify-center flex-col gap-6">
                        <div className="text-xs text-gray-600">
                            This site is protected by reCAPTCHA and the Google{" "}
                            <Link href="https://policies.google.com/privacy">
                                Privacy Policy
                            </Link>{" "}
                            and{" "}
                            <Link href="https://policies.google.com/terms">
                                Terms of Service
                            </Link>{" "}
                            apply.
                        </div>
                        <div className="flex justify-center">
                            <Button
                                variant="submit"
                                type="submit"
                                disabled={isSubmitting || !recaptchaReady}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center">
                                        <svg
                                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                        Envoi en cours...
                                    </span>
                                ) : !recaptchaReady ? (
                                    "Chargement..."
                                ) : (
                                    "Envoyer le message"
                                )}
                            </Button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    )
}

export default ContactFormWithRecaptcha
