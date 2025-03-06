import ServiceCard from "../ui/ServiceCard"

const Services = () => {
    return (
        <section className="body-text gap-4  flex flex-col lg:w-[90%] md:w-[80%] sm:w-[70%] w-[60%] mx-auto justify-center items-center my-64">
            <h2 id="services" className="text-5xl font-heading">
                Services
            </h2>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                <ServiceCard
                    title="Séance Energétique"
                    variant="energetique"
                    subtitle="Travail à distance (personnes & animaux)"
                    price="De 70€ à 150€"
                />
                <ServiceCard
                    title="Guidance"
                    variant="guidance"
                    subtitle="En ligne ou en présentiel"
                    price="70€"
                />
                <ServiceCard
                    title="Energétisation & Harmonisation des lieux"
                    variant="harmonisation"
                    price="De 70€ à 150€"
                />
            </div>
        </section>
    )
}

export default Services
