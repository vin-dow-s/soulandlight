import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

const contactFormSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    message: z.string().min(1),
    token: z.string().min(1),
})

export async function POST(req: Request) {
    try {
        const body = await req.json()

        // Validate the request body
        const validatedData = contactFormSchema.parse(body)
        const { name, email, message, token } = validatedData

        // Verify reCAPTCHA token
        const recaptchaResponse = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
        )

        const recaptchaData = await recaptchaResponse.json()

        if (!recaptchaData.success) {
            return NextResponse.json(
                {
                    error: "La vérification reCAPTCHA a échoué. Veuillez réessayer.",
                },
                { status: 400 }
            )
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: "no-reply@soulandlight.fr",
            to:
                process.env.NOTIFICATION_EMAIL ||
                "pascal.soulandlight@gmail.com",
            subject: `Nouveau message de ${name}`,
            text: `
Nom: ${name}
Email: ${email}
Message:
${message}
            `,
            replyTo: email,
        })

        if (error) {
            console.error("Resend API error:", error)
            return NextResponse.json(
                {
                    error: "Échec de l'envoi de l'email. Veuillez réessayer plus tard.",
                },
                { status: 500 }
            )
        }

        return NextResponse.json(
            { message: "Message envoyé avec succès", id: data?.id },
            { status: 200 }
        )
    } catch (error) {
        console.error("Contact form error:", error)

        // Check if it's a Zod validation error
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                {
                    error: "Données de formulaire invalides. Veuillez vérifier vos informations.",
                },
                { status: 400 }
            )
        }

        return NextResponse.json(
            {
                error: "Échec du traitement de la demande. Veuillez réessayer plus tard.",
            },
            { status: 500 }
        )
    }
}
