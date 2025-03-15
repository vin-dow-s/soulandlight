import Image from "next/image"
import ContactForm from "../components/sections/ContactForm"

export const dynamic = "force-static"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL

export const metadata = {
    title: "Contact",
    description: "Comment puis-je vous aider ?",
    openGraph: {
        title: "Contact",
        description: "Comment puis-je vous aider ?",
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
        description: "Comment puis-je vous aider ?",
        images: [`${SITE_URL}/assets/hero-preview.webp`],
    },
    robots: "noindex, follow",
}

const ContactPage = () => {
    return (
        <section className="body-text gap-4  flex flex-col  mx-auto justify-center items-center my-32 sm:my-48  w-fit  px-4 relative">
            <div className="flex flex-row items-center gap-4 ">
                <h2 className="text-4xl sm:text-5xl font-heading text-center mb-8 sm:mb-16">
                    Contact
                </h2>
                <Image
                    src="/assets/pascal.webp"
                    alt="Photo Pascal"
                    width={150}
                    height={150}
                    className="rounded-full absolute right-10 top-0 w-30 max-sm:w-20 max-sm:right-4"
                />
            </div>
            <div className="container mx-auto px-4 max-w-2xl ">
                <p className=" mb-8 sm:mb-16 sm:text-base text-sm">
                    Vous pouvez me contacter par mail directement à{" "}
                    <a href="mailto:pascal.soulandlight@gmail.com">
                        pascal.soulandlight@gmail.com
                    </a>{" "}
                    ou via le formulaire ci-dessous, je vous répondrai dès que
                    possible.
                </p>
                <ContactForm />
            </div>
        </section>
    )
}

export default ContactPage
