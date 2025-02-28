import { headers as getHeaders } from "next/headers.js"
import Image from "next/image"
import Link from "next/link"
import { getPayload } from "payload"
import { fileURLToPath } from "url"

import config from "../(payload)/payload.config"
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"
import "../styles.css"

// Define the Page type to fix TypeScript errors
type PageHero = {
    heading: string
    subheading?: string
    image?: {
        url: string
        alt?: string
    }
    ctaText?: string
    ctaLink?: string
}

type FeaturedSection = {
    title: string
    content?: string
    image?: {
        url: string
        alt?: string
    }
}

type Page = {
    id: string
    title: string
    slug: string
    isHomePage: boolean
    content: string
    hero?: PageHero
    featuredSections?: FeaturedSection[]
}

export default async function HomePage() {
    const headers = await getHeaders()
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    // Fetch the home page content
    const homePage = await payload
        .find({
            collection: "pages" as any,
            where: {
                isHomePage: {
                    equals: true,
                },
            },
        })
        .then((res) => (res.docs[0] as unknown as Page) || null)

    // If no home page is set, show the default welcome page
    if (!homePage) {
        const { user } = await payload.auth({ headers })
        const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

        return (
            <div className="min-h-screen flex flex-col">
                <Navigation />
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center flex-grow">
                    <div className="flex flex-col items-center justify-center">
                        <Image
                            alt="Payload Logo"
                            height={65}
                            src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg"
                            width={65}
                            className="mb-8"
                        />
                        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl mb-4">
                            {!user
                                ? "Welcome to your new project."
                                : `Welcome back, ${user.email}`}
                        </h1>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={payloadConfig.routes.admin}
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Go to admin panel
                            </a>
                            <p className="text-lg text-gray-500 mt-2 sm:mt-0">
                                Create a page with "isHomePage" checked to
                                replace this welcome screen
                            </p>
                        </div>
                    </div>
                    <div className="mt-16 text-sm text-gray-500">
                        <p>Update this page by editing</p>
                        <a
                            href={fileURL}
                            className="text-blue-600 hover:text-blue-500"
                        >
                            <code className="font-mono bg-gray-100 p-1 rounded">
                                src/app/(app)/page.tsx
                            </code>
                        </a>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

    // Render the home page content
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />

            {/* Hero Section */}
            {homePage.hero && (
                <section className="bg-gray-50 py-16 sm:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                                    {homePage.hero.heading}
                                </h1>
                                {homePage.hero.subheading && (
                                    <p className="mt-6 text-xl text-gray-500">
                                        {homePage.hero.subheading}
                                    </p>
                                )}
                                {homePage.hero.ctaText &&
                                    homePage.hero.ctaLink && (
                                        <div className="mt-8">
                                            <Link
                                                href={homePage.hero.ctaLink}
                                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                            >
                                                {homePage.hero.ctaText}
                                            </Link>
                                        </div>
                                    )}
                            </div>
                            {homePage.hero.image && (
                                <div className="flex justify-center">
                                    <Image
                                        src={homePage.hero.image.url}
                                        alt={homePage.hero.heading}
                                        width={600}
                                        height={400}
                                        priority
                                        className="rounded-lg shadow-xl"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* Featured Sections */}
            {homePage.featuredSections &&
                homePage.featuredSections.length > 0 && (
                    <section className="py-16 sm:py-24">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="space-y-24">
                                {homePage.featuredSections.map(
                                    (section, index) => (
                                        <div
                                            key={index}
                                            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                                                index % 2 === 1
                                                    ? "md:grid-flow-dense"
                                                    : ""
                                            }`}
                                        >
                                            <div
                                                className={
                                                    index % 2 === 1
                                                        ? "md:col-start-2"
                                                        : ""
                                                }
                                            >
                                                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                                                    {section.title}
                                                </h2>
                                                {section.content && (
                                                    <div
                                                        className="mt-6 text-lg text-gray-500 prose prose-blue"
                                                        dangerouslySetInnerHTML={{
                                                            __html: section.content,
                                                        }}
                                                    />
                                                )}
                                            </div>
                                            {section.image && (
                                                <div
                                                    className={`flex justify-center ${
                                                        index % 2 === 1
                                                            ? "md:col-start-1"
                                                            : ""
                                                    }`}
                                                >
                                                    <Image
                                                        src={section.image.url}
                                                        alt={section.title}
                                                        width={400}
                                                        height={300}
                                                        className="rounded-lg shadow-lg"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </section>
                )}

            {/* Main Content */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className="prose prose-lg prose-blue mx-auto"
                        dangerouslySetInnerHTML={{ __html: homePage.content }}
                    />
                </div>
            </section>

            <Footer />
        </div>
    )
}
