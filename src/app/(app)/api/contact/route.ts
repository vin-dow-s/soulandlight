import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

const contactFormSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    message: z.string().min(1),
})

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const token = body.token

        const validatedData = contactFormSchema.parse(body)

        const recaptchaResponse = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
        )

        const recaptchaData = await recaptchaResponse.json()

        if (!recaptchaData.success) {
            return NextResponse.json(
                { error: "reCAPTCHA verification failed" },
                { status: 400 }
            )
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: "no-reply@soulandlight.fr",
            to: "pascal.soulandlight@gmail.com",
            subject: `Nouveau message de ${validatedData.name}`,
            text: `
Nom: ${validatedData.name}
Email: ${validatedData.email}
Message:
${validatedData.message}
            `,
            replyTo: validatedData.email,
        })

        if (error) {
            console.error("Resend API error:", error)
            return NextResponse.json(
                { error: "Failed to send email" },
                { status: 500 }
            )
        }

        return NextResponse.json(
            { message: "Message sent successfully", id: data?.id },
            { status: 200 }
        )
    } catch (error) {
        console.error("Contact form error:", error)
        return NextResponse.json(
            { error: "Failed to process request" },
            { status: 500 }
        )
    }
}
