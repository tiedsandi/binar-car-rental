import { Box } from '@mui/material'
import React from 'react'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'
import ContentCars from '../../containers/ContentCars'
import Footer from '../../containers/Footer'
import Search from '../../containers/Search'

const CariMobil = () => {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: "#F1F3FF",
                    position: "relative",
                    padding: "1.5rem 6rem",
                    height: "min-content",
                }}>
                <Navbar />
                <Hero />
                <Search />
            </Box>
            <ContentCars />
            <Footer />
        </>
    )
}

export default CariMobil
