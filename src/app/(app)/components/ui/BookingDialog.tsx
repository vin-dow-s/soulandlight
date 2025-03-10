"use client"

import { useEffect, useRef, useState } from "react"

interface BookingDialogProps {
    isOpen: boolean
    onClose: () => void
}

const BookingDialog = ({ isOpen, onClose }: BookingDialogProps) => {
    const [iframeLoaded, setIframeLoaded] = useState(false)
    const dialogRef = useRef<HTMLDivElement>(null)
    
    // Cal.com booking link for guidance service
    const calLink = "https://cal.com/pascal-soulandlight/guidance?user=pascal-soulandlight"

    // Handle click outside to close
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside)
            // Prevent scrolling when dialog is open
            document.body.style.overflow = "hidden"
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            document.body.style.overflow = "auto"
        }
    }, [isOpen, onClose])

    // Handle escape key to close
    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener("keydown", handleEscKey)
        }

        return () => {
            document.removeEventListener("keydown", handleEscKey)
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm rounded-lg">
            <div 
                ref={dialogRef}
                className="relative bg-[#121212] rounded-xl shadow-lg w-[95%] max-w-4xl max-h-[90svh] flex flex-col"
                style={{
                    border: "1px solid var(--color-primary)",
                }}
            >
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b border-gray-700 mb-4">
                    <h3 className="text-lg font-main text-white">Réserver votre consultation</h3>
                    <button 
                        onClick={onClose}
                        className="text-gray-400 hover:text-white focus:outline-none cursor-pointer"
                        aria-label="Fermer"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-6 w-6" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M6 18L18 6M6 6l12 12" 
                            />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-auto p-0 relative rounded-xl">
                    {!iframeLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                        </div>
                    )}
                    <iframe 
                        src={calLink}
                        className={`w-full h-[90svh] rounded-lg ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => setIframeLoaded(true)}
                        title="Calendrier de réservation pour guidance"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    )
}

export default BookingDialog 