import ServiceCard from "../ui/ServiceCard"

const Services = () => {
    return (
        <section
            id="services-section"
            className="body-text flex flex-col w-full max-w-[1300px] mx-auto justify-center items-center sm:mt-64 mt-32 px-4"
        >
            {" "}
            <h2
                id="services"
                className="text-4xl sm:text-5xl font-heading mb-8 sm:mb-16 "
            >
                Services
            </h2>
            <div className="grid gap-8 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {" "}
                <ServiceCard
                    title="Séance Energétique"
                    variant="energetique"
                    subtitle="Travail à distance avec suivi"
                />
                <ServiceCard
                    title="Guidance"
                    variant="guidance"
                    subtitle="Telephone ou visio"
                />
                <ServiceCard
                    title="Energétisation & Harmonisation des lieux"
                    variant="harmonisation"
                />
            </div>
            <div className="flex flex-col gap-2 justify-center items-center mt-6 text-center max-w-2xl">
                <p className="text-xs text-gray-400">
                    * Selon votre situation, je vous proposerai ce qui vous
                    convient le mieux.
                </p>
                <p className="text-xs text-gray-400">
                    Ces services ne se substituent pas à l'avis d'un
                    professionnel de santé ou à un traitement médical.
                </p>
            </div>
        </section>
    )
}

export default Services
