import ContactForm from "../components/sections/ContactForm"

const ContactPage = () => {
    return (
        <section className="body-text gap-4  flex flex-col  mx-auto justify-center items-center my-48">
            <h2 className="text-5xl font-heading text-center mb-16">
                Contactez-moi
            </h2>
            <ContactForm />
        </section>
    )
}

export default ContactPage
