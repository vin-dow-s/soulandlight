const About = () => {
    return (
        <section className="body-text gap-4  flex flex-col lg:w-[60%] sm:w-[90%] w-[95%] mx-auto justify-center items-center my-16">
            <h2 id="a-propos" className="text-5xl font-heading">
                A propos
            </h2>
            <div className="flex  lg:flex-row mt-16 ">
                <div className="lg:w-1/2 w-full p-4">
                    <img
                        src="/path/to/your/image.jpg"
                        alt="About Us"
                        className="rounded-lg shadow-md w-full"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-lg font-semibold">
                        Bonjour, je suis Pascal,
                    </p>
                    <p>
                        j’ai vécu une expérience de mort imminente à l’âge de 9
                        ans, suite à laquelle mes perceptions, mes ressentis et
                        mes intuitions se sont développés, puis amplifiés au
                        travers de mes expériences de vie, me guidant à être
                        celui que je suis ici et maintenant.
                    </p>
                    <p>
                        Aujourd’hui tarologue, voyant et medium-channel (canal
                        intuitif), je canalise les messages de mes guides et de
                        l'univers et utilise mes cartes (Tarot de Marseille
                        principalement) pour vous les transmettre de façon
                        claire et directe.
                    </p>
                    <p className="font-semibold my-4">
                        Mes guidances sont profondes, révélatrices, et vous
                        apporteront la lumière et les réponses dont vous avez
                        besoin.
                    </p>
                    <p>
                        Je m’adresse à toute personne cherchant des réponses et
                        des conseils, également aux sportifs souhaitant
                        améliorer leurs performances et leurs résultats, aux
                        chefs d’entreprise (artisans, commerçants, professions
                        libérales…) souhaitant développer leur activité ou
                        obtenir une solution à ce qui doit être amélioré.
                    </p>
                    <p className="font-semibold">
                        Je peux vous apporter des solutions !
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
