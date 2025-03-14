import Link from "next/link"

export const dynamic = "force-static"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL

export const metadata = {
    title: "Politique de confidentialité",
    description: "Politique de confidentialité",
    openGraph: {
        title: "Politique de confidentialité",
        description: "Politique de confidentialité",
        url: `${SITE_URL}/politique-confidentialite`,
        type: "website",
        images: [
            {
                url: `${SITE_URL}/assets/hero-preview.webp`,
                width: 1200,
                height: 630,
                alt: "Politique de confidentialité",
            },
            {
                url: `${SITE_URL}/assets/hero-preview.webp`,
                width: 1200,
                height: 630,
                alt: "Politique de confidentialité",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Politique de confidentialité",
        description: "Politique de confidentialité",
        images: [`${SITE_URL}/assets/hero-preview.webp`],
    },
    robots: "noindex, follow",
}

const PolitiqueConfidentialite = () => {
    return (
        <section className="body-text gap-4  flex flex-col lg:w-[60%] sm:w-[90%] w-[95%] mx-auto justify-center items-center my-32 sm:my-48">
            <div className="flex flex-col justify-center items-center w-full">
                <h2 className="text-4xl sm:text-5xl font-heading  mb-16 sm:mb-32">
                    Politique de confidentialité
                </h2>
                <p className="w-full">
                    Cette politique de confidentialité détermine la manière dont
                    les informations collectées par https://soulandlight.fr sont
                    traitées, en fournissant également les raisons pour
                    lesquelles certaines données personnelles vous concernant
                    doivent être collectées. Par conséquent, vous devez lire
                    cette politique de confidentialité avant d'utiliser le site
                    web de https://soulandlight.fr.
                </p>
                <p className="w-full">
                    Soulandlight s'engage à garantir la confidentialité et la
                    sécurité de vos données personnelles.
                </p>
                <h3 className="text-2xl font-heading mt-16 mb-8 w-full">
                    1 - Les informations personnelles collectées
                </h3>{" "}
                <p className="w-full">
                    Lorsque vous visitez https://soulandlight.fr, certaines
                    informations sont automatiquement recueillies sur votre
                    appareil, notamment des informations sur votre navigateur
                    web, votre adresse IP, votre fuseau horaire et certains des
                    cookies installés sur votre appareil. En outre, lorsque vous
                    naviguez sur le site, sont recueillies des informations sur
                    les pages web ou les produits individuels que vous
                    consultez, sur les sites web ou les termes de recherche qui
                    vous ont renvoyé au site et sur la manière dont vous
                    interagissez avec le site. Ces informations collectées
                    automatiquement sont désignées par le terme "informations
                    sur les appareils". En outre, les données personnelles que
                    vous nous fournissez peuvent être collectées (y compris,
                    mais sans s'y limiter, le prénom, l'adresse mail, les
                    informations de paiement, etc.) lors du remplissage des
                    formulaires du site ou de la réservation d'une consultation.
                </p>{" "}
                <h3 className="text-2xl font-heading mt-16 mb-8 w-full">
                    2 - Pourquoi Soulandlight traite vos données ?
                </h3>{" "}
                <p className="w-full">
                    La priorité absolue est la sécurité des données des
                    visiteurs et, à ce titre, Soulandlight ne peut traiter que
                    des données minimales sur les utilisateurs, uniquement dans
                    la mesure où cela est absolument nécessaire pour maintenir
                    le site web. Les informations collectées automatiquement
                    sont utilisées uniquement pour identifier les cas potentiels
                    d'abus et établir des informations statistiques concernant
                    l'utilisation du site web. Ces informations statistiques ne
                    sont pas autrement agrégées de manière à identifier un
                    utilisateur particulier du système.
                </p>{" "}
                <p className="w-full">
                    Vous pouvez visiter le site web sans dire qui vous êtes ni
                    révéler d'informations, par lesquelles quelqu'un pourrait
                    vous identifier comme un individu spécifique et
                    identifiable. Toutefois, si vous souhaitez utiliser
                    certaines fonctionnalités du site web, ou si vous souhaitez
                    recevoir les tirages en ligne ou fournir d'autres détails en
                    remplissant un formulaire, vous pouvez fournir des données
                    personnelles, telles que votre e-mail, votre prénom, votre
                    numéro de téléphone. Vous pouvez choisir de ne pas fournir
                    vos données personnelles, mais il se peut alors que vous ne
                    puissiez pas profiter de certaines fonctionnalités du site
                    web. Par exemple, vous ne pourrez pas recevoir les tirages
                    en ligne ou contacter Soulandlight directement à partir du
                    site web. Les utilisateurs qui ne savent pas quelles
                    informations sont obligatoires sont invités à me contacter
                    via{" "}
                    <Link href="mailto:pascal.soulandlight@gmail.com">
                        pascal.soulandlight@gmail.com
                    </Link>
                    .
                </p>{" "}
                <h3 className="text-2xl font-heading mt-16 mb-8 w-full">
                    3 - Vos droits
                </h3>{" "}
                <p className="w-full">
                    Si vous êtes un résident européen, vous disposez des droits
                    suivants liés à vos données personnelles :
                </p>{" "}
                <ul className="list-disc list-inside w-full p-4">
                    {" "}
                    <li>Le droit d'être informé.</li> <li>Le droit d'accès.</li>{" "}
                    <li>Le droit de rectification.</li>{" "}
                    <li>Le droit à l'effacement.</li>{" "}
                    <li>Le droit de restreindre le traitement.</li>{" "}
                    <li>Le droit à la portabilité des données.</li>{" "}
                    <li>Le droit d'opposition.</li>{" "}
                    <li>
                        Les droits relatifs à la prise de décision automatisée
                        et au profilage.
                    </li>{" "}
                </ul>{" "}
                <p className="w-full">
                    Si vous souhaitez exercer ce droit, veuillez contacter
                    Soulandlight via les coordonnées ci-dessous.
                </p>{" "}
                <p className="w-full">
                    En outre, si vous êtes un résident européen, vos
                    informations seront traitées afin d'exécuter les contrats
                    que Soulandlight pourrait avoir avec vous (par exemple, si
                    vous passez une réservation par le biais du site), ou
                    autrement pour poursuivre nos intérêts commerciaux légitimes
                    énumérés ci-dessus. En outre, veuillez noter que vos
                    informations pourraient être transférées en dehors de
                    l'Europe, y compris au Canada et aux États-Unis.
                </p>{" "}
                <h3 className="text-2xl font-heading mt-16 mb-8 w-full">
                    4 - Liens vers d'autres sites web
                </h3>{" "}
                <p className="w-full">
                    https://soulandlight.fr peut contenir des liens vers
                    d'autres sites web qui ne sont pas détenus ou contrôlés par
                    Soulandlight. Soulandlight n'est pas responsable de ces
                    autres sites web ou des pratiques de confidentialité des
                    tiers. Vous êtes encouragés à être attentif lorsque vous
                    quittez https://soulandlight.fr et à lire les déclarations
                    de confidentialité de chaque site web susceptible de
                    collecter des informations personnelles.
                </p>{" "}
                <h3 className="text-2xl font-heading mt-16 mb-8 w-full">
                    5 - Sécurité de l'information
                </h3>{" "}
                <p className="w-full">
                    Les informations que vous fournissez sont sécurisées sur des
                    serveurs informatiques dans un environnement contrôlé et
                    sécurisé, protégé contre tout accès, utilisation ou
                    divulgation non autorisés. Soulandlight conserve des
                    garanties administratives, techniques et physiques
                    raisonnables pour se protéger contre tout accès,
                    utilisation, modification et divulgation non autorisés des
                    données personnelles sous son contrôle et sa garde.
                    Toutefois, aucune transmission de données sur Internet ou
                    sur un réseau sans fil ne peut être garantie.
                </p>{" "}
                <h3 className="text-2xl font-heading mt-16 mb-8 w-full">
                    6 - Divulgation légale
                </h3>{" "}
                <p className="w-full">
                    Soulandlight divulguera toute information collectée,
                    utilisée ou reçue si la loi l'exige ou l'autorise, par
                    exemple pour se conformer à une citation à comparaître ou à
                    une procédure judiciaire similaire, et lorsqu'il serait de
                    bonne foi que la divulgation soit nécessaire pour protéger
                    les droits de Soulandlight et les votres, votre sécurité ou
                    celle d'autrui, enquêter sur une fraude ou répondre à une
                    demande du gouvernement.
                </p>{" "}
                <h3 className="text-2xl font-heading mt-16 mb-8 w-full">
                    7 - Informations de contact
                </h3>{" "}
                <p className="w-full">
                    Si vous souhaitez contacter Soulandlight pour comprendre
                    davantage la présente politique ou pour toute question
                    relative aux droits individuels et à vos informations
                    personnelles, vous pouvez envoyer un courriel à{" "}
                    <Link href="mailto:pascal.soulandlight@gmail.com">
                        pascal.soulandlight@gmail.com
                    </Link>
                    .
                </p>
            </div>
        </section>
    )
}

export default PolitiqueConfidentialite
