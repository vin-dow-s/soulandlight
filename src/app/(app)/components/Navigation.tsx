"use client"

import Link from "next/link"
import { useState } from "react"

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link href="/" className="text-2xl font-bold text-blue-600">
                        Soul & Light
                    </Link>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link
                                href="/"
                                className="text-gray-600 hover:text-blue-600 font-medium"
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className="text-gray-600 hover:text-blue-600 font-medium"
                            >
                                About
                            </Link>
                            <Link
                                href="/services"
                                className="text-gray-600 hover:text-blue-600 font-medium"
                            >
                                Services
                            </Link>
                            <Link
                                href="/blog"
                                className="text-gray-600 hover:text-blue-600 font-medium"
                            >
                                Blog
                            </Link>
                            <Link
                                href="/contact"
                                className="text-gray-600 hover:text-blue-600 font-medium"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none"
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
            </div>

            {/* Mobile menu */}
            <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
                    <Link
                        href="/"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600"
                    >
                        About
                    </Link>
                    <Link
                        href="/services"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600"
                    >
                        Services
                    </Link>
                    <Link
                        href="/blog"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600"
                    >
                        Blog
                    </Link>
                    <Link
                        href="/contact"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
