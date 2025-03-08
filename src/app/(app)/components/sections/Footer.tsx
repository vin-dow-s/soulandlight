import Link from "next/link"

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-[var(--color-secondary)] text-white mt-32">
            <div className="max-w-3xl mx-auto pt-12 pb-8 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-8 pb-8 border-b border-gray-700">
                    <div className="col-span-3 flex flex-row justify-between">
                        <div>
                            <h3 className="text-sm font-heading text-gray-400 tracking-wider uppercase mb-4">
                                Contact
                            </h3>
                            <ul className="space-y-3 ">
                                <li>
                                    <Link
                                        href="mailto:pascal.soulandlight@gmail.com"
                                        className="text-sm items-center text-gray-300 hover:text-white transition-colors flex flex-row"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-2 text-white"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                            <polyline points="22,6 12,13 2,6"></polyline>
                                        </svg>
                                        pascal.soulandlight@gmail.com
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="tel:+33600000000"
                                        className="text-sm items-center text-gray-300 hover:text-white transition-colors flex flex-row"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-2 text-white"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                        </svg>
                                        06 17 83 08 44
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-heading text-gray-400 tracking-wider uppercase mb-4">
                                Suivez-moi
                            </h3>
                            <ul className="space-y-3 ">
                                <li>
                                    <Link
                                        href="https://www.facebook.com/p/Soulandlight-Tarot-100075887629554/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-row text-gray-300 hover:text-white text-sm transition-colors"
                                        aria-label="Facebook"
                                    >
                                        <svg
                                            className="h-6 w-6 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Soulandlight Tarot
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://www.youtube.com/watch?v=H9fWC78Dhjs"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-row text-gray-300 hover:text-white text-sm transition-colors"
                                        aria-label="YouTube"
                                    >
                                        <svg
                                            className="h-6 w-6 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Mon interview
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-400">
                        &copy; {currentYear} Soulandlight. Site et thème par{" "}
                        <Link
                            href="@mailto:vincent@vindows.fr"
                            className="hover:text-white transition-colors"
                        >
                            Vincent S.
                        </Link>
                    </p>
                    <div className="mt-4 md:mt-0 flex space-x-6">
                        <Link
                            href="/mentions-legales"
                            className="text-xs text-gray-400 hover:text-white transition-colors"
                        >
                            Mentions légales
                        </Link>
                        <Link
                            href="/politique-confidentialite"
                            className="text-xs text-gray-400 hover:text-white transition-colors"
                        >
                            Politique de confidentialité
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
