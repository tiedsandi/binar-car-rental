import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Banner = () => {
    return (
        <Box mt={10} mx={"6rem"} p={"4rem"} sx={{
            backgroundColor: "#0D28A6",
            color: "white",
            textAlign: "center",
            borderRadius: "1rem",

        }} >
            <Typography variant="h4" mb="1rem">
                Sewa Mobil di (Lokasimu) Sekarang
            </Typography>
            <Box sx={{
                maxWidth: "30rem",
                mx: "auto",
                mb: "1rem"
            }}>
                <Typography variant="p" >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
            </Box>

            <Button variant="contained" color="primary" >
                Mulai Sewa Mobil
            </Button>
        </Box>
    )
}

export default Banner
