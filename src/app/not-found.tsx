import ButtonLink from "./components/ui/ButtonLink"

export default async function RoutePage() {
    return (
        <section className="body-text gap-4  flex flex-col lg:w-[60%] sm:w-[90%] w-[95%] mx-auto justify-center items-center my-32 sm:my-48">
            <h2 className="text-4xl sm:text-5xl font-heading  mb-16 sm:mb-32 ">
                404 - Page non trouvée
            </h2>
            <ButtonLink href="/" variant="secondary">
                Retour à la page d'accueil
            </ButtonLink>
        </section>
    )
}
