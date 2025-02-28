"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm p-4 px-8 h-20">
            <div className="flex justify-between items-center ">
                <Link href="/" className=" text-white font-light">
                    <div className="flex items-center gap-4">
                        <Image
                            src="/metatron.png"
                            alt="Logo"
                            width={48}
                            height={48}
                        />
                        <div className="flex flex-col">
                            <h2 className="text-2xl">
                                SOUL<span className="text-lg ml-1">and</span>
                                LIGHT
                            </h2>
                            <h3 className="text-xs font-medium">
                                Tarologue - Voyant - Medium Channel Spirituel
                            </h3>{" "}
                        </div>
                    </div>
                </Link>

                <div className="hidden md:flex mx-auto">
                    <div className="flex items-baseline justify-center gap-8">
                        <Link
                            href="/"
                            className="text-white hover:text-primary font-medium"
                        >
                            Services
                        </Link>
                        <Link
                            href="/about"
                            className="text-white hover:text-primary font-medium"
                        >
                            A propos
                        </Link>
                        <Link
                            href="/tirages-2025"
                            className="text-white hover:text-primary font-medium"
                        >
                            Tirages 2025
                        </Link>
                        <Link
                            href="/galerie"
                            className="text-white hover:text-primary font-medium"
                        >
                            Galerie
                        </Link>
                    </div>
                </div>
                <div>
                    <Link
                        href="/"
                        className="text-white hover:text-primary font-medium"
                    >
                        Contactez-moi
                    </Link>
                </div>

                <div className="md:hidden ml-auto">
                    <button
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary focus:outline-none"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className={`${
                                isMenuOpen ? "hidden" : "block"
                            } h-6 w-6`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        <svg
                            className={`${
                                isMenuOpen ? "block" : "hidden"
                            } h-6 w-6`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/80 backdrop-blur-sm mt-2 rounded-lg">
                    <Link
                        href="/"
                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary"
                    >
                        Services
                    </Link>
                    <Link
                        href="/about"
                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary"
                    >
                        A propos
                    </Link>
                    <Link
                        href="/tirages-2025"
                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary"
                    >
                        Tirages 2025
                    </Link>
                    <Link
                        href="/galerie"
                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary"
                    >
                        Galerie
                    </Link>
                    <Link
                        href="/contact"
                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary"
                    >
                        Contactez-moi
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
