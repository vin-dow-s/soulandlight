import ContactForm from "../components/sections/ContactForm"

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
