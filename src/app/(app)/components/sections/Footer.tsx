import Link from "next/link"

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-[var(--color-secondary)] text-white mt-32">
            <div className="max-w-3xl mx-auto pt-12 pb-8 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-8 pb-8 border-b border-gray-700">
                    <div className="col-span-3 flex flex-row justify-between">
                        <div>
                            <h6 className="text-sm font-heading text-gray-400 tracking-wider uppercase mb-4">
                                Contact
                            </h6>
                            <ul className="space-y-3 ">
                                <li>
                                    <Link
                                        href="mailto:pascal.soulandlight@gmail.com"
                                        className="text-xs sm:text-sm items-center text-gray-300 hover:text-white transition-colors flex flex-row"
                                    >
                                        <svg
                                            className="h-5 w-5 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                        </svg>
                                        pascal.soulandlight@gmail.com
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="tel:+33617830844"
                                        className="text-xs sm:text-sm items-center text-gray-300 hover:text-white transition-colors flex flex-row"
                                    >
                                        <svg
                                            className="h-5 w-5 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        06 17 83 08 44
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h6 className="text-sm font-heading text-gray-400 tracking-wider uppercase mb-4">
                                Suivez-moi
                            </h6>
                            <ul className="space-y-3 ">
                                <li>
                                    <Link
                                        href="https://www.facebook.com/p/Soulandlight-Tarot-100075887629554/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-row text-gray-300 hover:text-white text-xs sm:text-sm transition-colors"
                                        aria-label="Facebook"
                                    >
                                        <svg
                                            className="h-5 w-5 mr-2"
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
                                        className="flex flex-row text-gray-300 hover:text-white text-xs sm:text-sm transition-colors"
                                        aria-label="YouTube"
                                    >
                                        <svg
                                            className="h-5 w-5 mr-2"
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
                            href="mailto:vincent@vindows.fr"
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
