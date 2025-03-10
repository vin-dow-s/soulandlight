import ContactForm from "../components/sections/ContactForm"

export const dynamic = "force-static"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL

export const metadata = {
    title: "Contact",
    description: "Envoyez-moi un message !",
    openGraph: {
        title: "Contact",
        description: "Envoyez-moi un message !",
        url: `${SITE_URL}/contact`,
        type: "website",
        images: [
            {
                url: `${SITE_URL}/assets/hero-preview.webp`,
                width: 1200,
                height: 630,
                alt: "Contact",
            },
            {
                url: `${SITE_URL}/assets/hero-preview.webp`,
                width: 1200,
                height: 630,
                alt: "Contact",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact",
        description: "Envoyez-moi un message !",
        images: [`${SITE_URL}/assets/hero-preview.webp`],
    },
    robots: "noindex, follow",
}

const ContactPage = () => {
    return (
        <section className="body-text gap-4  flex flex-col  mx-auto justify-center items-center my-32 sm:my-48">
            <h2 className="text-4xl sm:text-5xl font-heading text-center mb-8 sm:mb-16">
                Me contacter
            </h2>
            <ContactForm />
        </section>
    )
}

export default ContactPage
