import ContactForm from "../components/sections/ContactForm"
import Testimonials from "../components/sections/Testimonials"

const ContactPage = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <ContactForm />
            <Testimonials />
        </div>
    )
}

export default ContactPage
