import { NextResponse } from "next/server"
import { z } from "zod"

// Define the same validation schema as in the form component
const contactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().optional(),
    subject: z.string().min(3),
    message: z.string().min(10),
})

export async function POST(request: Request) {
    try {
        // Parse the request body
        const body = await request.json()

        // Validate the data
        const validatedData = contactSchema.parse(body)

        // Here you would typically:
        // 1. Send an email notification
        // 2. Store the message in a database
        // 3. Integrate with a CRM or other service

        // For demonstration, we'll just log the data and return success
        console.log("Contact form submission:", validatedData)

        // Example: Send email using an email service (commented out)
        /*
    await sendEmail({
      to: 'your-email@example.com',
      subject: `New contact form submission: ${validatedData.subject}`,
      text: `
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        Phone: ${validatedData.phone || 'Not provided'}
        Subject: ${validatedData.subject}
        
        Message:
        ${validatedData.message}
      `,
    })
    */

        // Return success response
        return NextResponse.json(
            { message: "Message envoyé avec succès" },
            { status: 200 }
        )
    } catch (error) {
        console.error("Contact form error:", error)

        // Handle validation errors
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                {
                    message: "Données de formulaire invalides",
                    errors: error.errors,
                },
                { status: 400 }
            )
        }

        // Handle other errors
        return NextResponse.json(
            {
                message:
                    "Une erreur est survenue lors du traitement de votre demande",
            },
            { status: 500 }
        )
    }
}
