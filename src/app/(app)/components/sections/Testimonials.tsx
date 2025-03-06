const Testimonials = () => {
    async function testGooglePlaces() {
        const apiKey = process.env.GOOGLE_API_KEY
        const input = "Soulandlight"
        const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(
            input
        )}&inputtype=textquery&fields=place_id&key=${apiKey}`

        try {
            const response = await fetch(url)
            const data = await response.json()
            console.log("Réponse API :", data)
        } catch (error) {
            console.error("Erreur lors de la requête :", error)
        }
    }

    // Exécuter la requête
    testGooglePlaces()

    return <section>Testimonials</section>
}

export default Testimonials
