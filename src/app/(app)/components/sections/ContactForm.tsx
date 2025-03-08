"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { ReCaptchaProvider, useReCaptcha } from "next-recaptcha-v3"
import Link from "next/link"
import { useState } from "react"
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

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const [submitError, setSubmitError] = useState<string | null>(null)
    const [captchaLoaded, setCaptchaLoaded] = useState(false)

    const { executeRecaptcha } = useReCaptcha()

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
        setIsSubmitting(true)
        setSubmitError(null)

        try {
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

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(
                    errorData.error ||
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
        <>
            {captchaLoaded && (
                <ReCaptchaProvider
                    reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                />
            )}
            <div className="container mx-auto px-4">
                {submitSuccess ? (
                    <div className="max-w-2xl mx-auto p-6 bg-green-50 border border-green-200 rounded-lg">
                        <h3 className="text-xl font-heading text-green-700 mb-2">
                            Message envoyé avec succès!
                        </h3>
                        <p className="mb-4">
                            Merci pour votre message. Je vous répondrai dans les
                            plus brefs délais.
                        </p>
                        <button
                            onClick={() => setSubmitSuccess(false)}
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                        >
                            Envoyer un autre message
                        </button>
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="max-w-2xl mx-auto"
                        noValidate
                    >
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
                                    Prénom{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none ${
                                        errors.name
                                            ? "border-red-500 focus:ring-red-200"
                                            : "border-gray-300 focus:ring-primary/20"
                                    }`}
                                    placeholder="Votre prénom"
                                    aria-invalid={
                                        errors.name ? "true" : "false"
                                    }
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
                                    Email{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none ${
                                        errors.email
                                            ? "border-red-500 focus:ring-red-200"
                                            : "border-gray-300 focus:ring-primary/20"
                                    }`}
                                    placeholder="Votre email"
                                    aria-invalid={
                                        errors.email ? "true" : "false"
                                    }
                                    {...register("email")}
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium"
                            >
                                Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                rows={6}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none ${
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

                        <div className="text-center flex justify-center">
                            <Button
                                variant="cta"
                                type="submit"
                                disabled={isSubmitting}
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
                                ) : (
                                    "Envoyer le message"
                                )}
                            </Button>
                            <div className="text-xs text-gray-400">
                                This site is protected by reCAPTCHA and the
                                Google{" "}
                                <Link href="https://policies.google.com/privacy">
                                    Privacy Policy
                                </Link>{" "}
                                and{" "}
                                <Link href="https://policies.google.com/terms">
                                    Terms of Service
                                </Link>{" "}
                                apply.
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </>
    )
}

export default ContactForm
