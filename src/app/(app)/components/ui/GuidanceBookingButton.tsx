"use client"

import { useState } from "react"
import BookingDialog from "./BookingDialog"
import Button from "./Button"

const GuidanceBookingButton = () => {
    const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false)

    const handleOpenBookingDialog = () => {
        setIsBookingDialogOpen(true)
    }

    const handleCloseBookingDialog = () => {
        setIsBookingDialogOpen(false)
    }

    return (
        <>
            <Button variant="guidance" onClick={handleOpenBookingDialog}>
                Réserver
            </Button>
            <BookingDialog 
                isOpen={isBookingDialogOpen}
                onClose={handleCloseBookingDialog}
            />
        </>
    )
}

export default GuidanceBookingButton 