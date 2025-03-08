import ServiceCard from "../ui/ServiceCard"

const Services = () => {
    return (
        <section className="body-text gap-4  flex flex-col lg:w-[90%] md:w-[80%] sm:w-[70%] w-[60%] mx-auto justify-center items-center my-64">
            <h2 id="services" className="text-5xl font-heading mb-16 ">
                Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                <ServiceCard
                    title="Séance Energétique"
                    variant="energetique"
                    subtitle="Travail à distance (personnes & animaux)"
                />
                <ServiceCard
                    title="Guidance"
                    variant="guidance"
                    subtitle="En ligne ou en présentiel"
                />
                <ServiceCard
                    title="Energétisation & Harmonisation des lieux"
                    variant="harmonisation"
                />
            </div>
            <div className="flex flex-col gap-2 justify-center items-center mt-4">
                <p className="text-sm text-gray-400">
                    * Selon votre situation, la meilleure solution pour vous
                    vous sera proposée.
                </p>
                <p className="text-sm text-gray-400">
                    Ces services ne se substituent pas à l'avis d'un
                    professionnel de santé ou à un traitement médical.
                </p>
            </div>
        </section>
    )
}

export default Services
