import Link from "next/link"

export const dynamic = "force-static"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL

export const metadata = {
    title: "Mentions légales",
    description: "Mentions légales",
    openGraph: {
        title: "Mentions légales",
        description: "Mentions légales",
        url: `${SITE_URL}/mentions-legales`,
        type: "website",
        images: [
            {
                url: `${SITE_URL}/assets/hero-preview.webp`,
                width: 1200,
                height: 630,
                alt: "Mentions légales",
            },
            {
                url: `${SITE_URL}/assets/hero-preview.webp`,
                width: 1200,
                height: 630,
                alt: "Mentions légales",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Mentions légales",
        description: "Mentions légales",
        images: [`${SITE_URL}/assets/hero-preview.webp`],
    },
    robots: "noindex, follow",
}

const MentionsLegales = () => {
    return (
        <section className="body-text gap-4  flex flex-col lg:w-[60%] sm:w-[90%] w-[95%] mx-auto justify-center items-center my-32 sm:my-48">
            <div className="flex flex-col justify-center items-center w-full">
                <h2 className="text-4xl sm:text-5xl font-heading  mb-16 sm:mb-32 ">
                    Mentions Légales
                </h2>
                <p className="w-full">
                    Tout le contenu du site https://soulandlight.fr (textes,
                    logos, images et photos) sont la propriété exclusive de
                    Soulandlight comme défini par l'art. 111-1 et suivants du
                    Code de la propriété intellectuelle et par l'art. 27 de la
                    Déclaration universelle des droits de l'homme, et sont
                    protégés par un copyright.
                </p>
                <p className="w-full">
                    Toute personne souhaitant utiliser tout ou partie de ces
                    textes ou de ces images s'exposera à des poursuites
                    judiciaires si elle n'en fait pas préalablement la demande
                    expresse à l'adresse suivante :{" "}
                    <Link href="mailto:pascal.soulandlight@gmail.com">
                        pascal.soulandlight@gmail.com
                    </Link>
                </p>
                <h3 className="text-2xl font-heading mt-16 mb-8 w-full">
                    1 - Édition du site
                </h3>
                <div className="w-full flex flex-col gap-4">
                    <p className="w-full">
                        En vertu de{" "}
                        <Link
                            href="https://www.legifrance.gouv.fr/LinkffichTexte.do?cidTexte=JORFTEXT000000801164#LEGIARTI000042038977"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            l'article 6 de la loi n° 2004-575 du 21 juin 2004
                        </Link>
                        pour la confiance dans l'économie numérique, il est
                        précisé aux utilisateurs du site internet
                        https://soulandlight.fr l'identité des différents
                        intervenants dans le cadre de sa réalisation et de son
                        suivi :
                    </p>
                    <p className="w-full">
                        Propriétaire du site :
                        <br />
                        Pascal GALEY - Soulandlight
                        <br />
                        E-mail :{" "}
                        <Link href="mailto:pascal.soulandlight@gmail.com">
                            pascal.soulandlight@gmail.com
                        </Link>
                        <br />
                        Adresse : 47000 AGEN
                    </p>
                    <p className="w-full">
                        Directeur de la publication :
                        <br />
                        Pascal GALEY - Soulandlight <br />
                        E-mail :{" "}
                        <Link href="mailto:pascal.soulandlight@gmail.com">
                            pascal.soulandlight@gmail.com
                        </Link>
                    </p>
                    <p className="w-full">
                        Hébergeur : <br />
                        OVH - SAS au capital de 50 000 000 €<br />
                        RCS Lille Métropole 424 761 419 00045
                        <br />
                        Code APE 2620Z
                        <br />
                        N° TVA : FR 22 424 761 419
                        <br />2 rue Kellermann - BP 80157 - 59053 Roubaix Cedex
                        1
                    </p>
                    <p className="w-full">
                        Conception du site et du thème : <br />
                        Vincent S - Développeur Web
                        <br />
                        E-mail :{" "}
                        <Link href="mailto:vincent@vindows.fr">
                            vincent@vindows.fr
                        </Link>
                    </p>
                </div>

                <hr />
                <h3 className="text-2xl font-heading mt-16 mb-8 w-full">
                    2 - Propriété intellectuelle et contrefaçons
                </h3>
                <p className="w-full">
                    Pascal GALEY est propriétaire des droits de propriété
                    intellectuelle et détient les droits d’usage sur tous les
                    éléments accessibles sur le site internet, notamment les
                    textes, images, graphismes, logos, vidéos, architecture,
                    icônes et sons.
                </p>
                <p className="w-full">
                    Toute reproduction, représentation, modification,
                    publication, adaptation de tout ou partie des éléments du
                    site, quel que soit le moyen ou le procédé utilisé, est
                    interdite, sauf autorisation écrite préalable de Pascal
                    GALEY.
                </p>
                <p className="w-full">
                    Toute exploitation non autorisée du site ou de l’un
                    quelconque des éléments qu’il contient sera considérée comme
                    constitutive d’une contrefaçon et poursuivie conformément
                    aux dispositions des articles{" "}
                    <Link
                        href="https://www.legifrance.gouv.fr/LinkffichCodeArticle.do?idArticle=LEGIARTI000032655082&amp;cidTexte=LEGITEXT000006069414&amp;dateTexte=20160605"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        L.335-2 et suivants du Code de Propriété Intellectuelle
                    </Link>
                    .
                </p>
                <hr />
                <h3 className="text-2xl font-heading mt-16 mb-8 w-full">
                    3 - Limitations de responsabilité
                </h3>
                <p className="w-full">
                    Pascal GALEY ne pourra être tenu pour responsable des
                    dommages directs et indirects causés au matériel de
                    l’utilisateur, lors de l’accès au site{" "}
                    https://soulandlight.fr.
                </p>
                <p className="w-full">
                    Pascal GALEY décline toute responsabilité quant à
                    l’utilisation qui pourrait être faite des informations et
                    contenus présents sur https://soulandlight.fr.
                </p>
                <p className="w-full">
                    Pascal GALEY s’engage à sécuriser au mieux le site
                    https://soulandlight.fr, cependant sa responsabilité ne
                    pourra être mise en cause si des données indésirables sont
                    importées et installées sur son site à son insu.
                </p>
                <p className="w-full">
                    Des espaces interactifs (espace contact ou commentaires)
                    sont à la disposition des utilisateurs. Pascal GALEY se
                    réserve le droit de supprimer, sans mise en demeure
                    préalable, tout contenu déposé dans cet espace qui
                    contreviendrait à la législation applicable en France, en
                    particulier aux dispositions relatives à la protection des
                    données.
                </p>
                <p className="w-full">
                    Le cas échéant, Pascal GALEY se réserve également la
                    possibilité de mettre en cause la responsabilité civile
                    et/ou pénale de l’utilisateur, notamment en cas de message à
                    caractère raciste, injurieux, diffamant, ou pornographique,
                    quel que soit le support utilisé (texte, photographie …).
                </p>
                <hr />
                <h3 className="text-2xl font-heading mt-16 mb-8 w-full">
                    4 - CNIL et gestion des données personnelles
                </h3>
                <p className="w-full">
                    En France, les données personnelles sont notamment protégées
                    par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du
                    6 août 2004, l'article L. 226-13 du Code pénal et la
                    Directive Européenne du 24 octobre 1995.
                </p>
                <p className="w-full">
                    A l'occasion de l'utilisation du site{" "}
                    https://soulandlight.fr, peuvent êtres recueillies : l'URL
                    des liens par l'intermédiaire desquels l'utilisateur a
                    accédé au site https://soulandlight.fr, le fournisseur
                    d'accès de l'utilisateur, l'adresse de protocole Internet
                    (IP) de l'utilisateur.
                    <br />
                    <br />
                    En tout état de cause Soulandlight ne collecte des
                    informations personnelles relatives à l'utilisateur que pour
                    le besoin de certains services proposés par le site{" "}
                    https://soulandlight.fr. L'utilisateur fournit ces
                    informations en toute connaissance de cause, notamment
                    lorsqu'il procède par lui-même à leur saisie. Il est alors
                    précisé à l'utilisateur du site https://soulandlight.fr
                    l’obligation ou non de fournir ces informations.
                </p>
                <p className="w-full">
                    Conformément aux dispositions de{" "}
                    <Link
                        href="https://www.legifrance.gouv.fr/LinkffichTexte.do?cidTexte=JORFTEXT000000886460"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        la loi 78-17 du 6 janvier 1978 modifiée
                    </Link>
                    , l’utilisateur du site https://soulandlight.fr dispose d’un
                    droit d’accès, de modification et de suppression des
                    informations collectées. Pour exercer ce droit, envoyez un
                    message à{" "}
                    <Link href="mailto:pascal.soulandlight@gmail.com">
                        pascal.soulandlight@gmail.com
                    </Link>
                </p>
                <p className="w-full">
                    Aucune information personnelle de l'utilisateur du site{" "}
                    https://soulandlight.fr n'est publiée à l'insu de
                    l'utilisateur, échangée, transférée, cédée ou vendue sur un
                    support quelconque à des tiers.
                </p>
                <p className="w-full">
                    Les bases de données sont protégées par les dispositions de
                    la loi du 1er juillet 1998 transposant la directive 96/9 du
                    11 mars 1996 relative à la protection juridique des bases de
                    données.
                </p>
                <p className="w-full">
                    Pour plus d'informations sur la façon dont nous traitons vos
                    données (type de données, finalité, destinataire...), lisez
                    la politique de confidentialité.
                </p>
                <h3 className="text-2xl font-heading mt-16 mb-8 w-full">
                    5 - Liens hypertextes et cookies
                </h3>
                <p className="w-full">
                    Le site https://soulandlight.fr contient des liens
                    hypertextes vers d’autres sites et dégage toute
                    responsabilité à propos de ces liens externes ou des liens
                    créés par d’autres sites vers https://soulandlight.fr.
                </p>
                <p className="w-full">
                    La navigation sur le site https://soulandlight.fr est
                    susceptible de provoquer l’installation de cookie(s) sur
                    l’ordinateur de l’utilisateur.
                </p>
                <p className="w-full">
                    Un "cookie" est un fichier de petite taille qui enregistre
                    des informations relatives à la navigation d’un utilisateur
                    sur un site. Les données ainsi obtenues permettent d'obtenir
                    des mesures de fréquentation, par exemple.
                </p>
                <p className="w-full">
                    Vous avez la possibilité d’accepter ou de refuser les
                    cookies en modifiant les paramètres de votre navigateur.
                    Aucun cookie ne sera déposé sans votre consentement.
                </p>
                <p className="w-full">
                    Pour plus d'informations sur la façon dont nous faisons
                    usage des cookies, lisez lisez la politique de
                    confidentialité.
                </p>
                <hr />
                <h3 className="text-2xl font-heading mt-16 mb-8 w-full">
                    6 - Droit applicable et attribution de juridiction
                </h3>
                <p className="w-full">
                    Tout litige en relation avec l’utilisation du site{" "}
                    https://soulandlight.fr est soumis au droit français. En
                    dehors des cas où la loi ne le permet pas, il est fait
                    attribution exclusive de juridiction aux tribunaux
                    compétents.
                </p>
                <hr />
                <h3 className="text-2xl font-heading mt-16 mb-8 w-full">
                    7 - Conditions générales d’utilisation du site et des
                    services proposés
                </h3>
                <p className="w-full">
                    L’utilisation du site https://soulandlight.fr implique
                    l’acceptation pleine et entière des conditions générales
                    d’utilisation ci-après décrites. Ces conditions
                    d’utilisation sont susceptibles d’être modifiées ou
                    complétées à tout moment, les utilisateurs du site{" "}
                    https://soulandlight.fr sont donc invités à les consulter de
                    manière régulière.
                </p>
                <p className="w-full">
                    Ce site est normalement accessible à tout moment aux
                    utilisateurs. Une interruption pour raison de maintenance
                    technique peut être toutefois décidée par Pascal GALEY, qui
                    s’efforcera alors de communiquer préalablement aux
                    utilisateurs les dates et heures de l’intervention.
                </p>
                <p className="w-full">
                    Le site https://soulandlight.fr est mis à jour régulièrement
                    par Pascal GALEY. De la même façon, les mentions légales
                    peuvent être modifiées à tout moment : elles s’imposent
                    néanmoins à l’utilisateur qui est invité à s’y référer le
                    plus souvent possible afin d’en prendre connaissance.
                </p>
            </div>
        </section>
    )
}

export default MentionsLegales
