import { Box, Typography } from '@mui/material'
import React from 'react'
import Paper from "@mui/material/Paper";

const WhyUs = () => {
    return (
        <Box mt={10} px={"6rem"} >
            <Box mb={2}>
                <Typography variant="h6" sx={{ fontWeight: "bold", lineHeight: "60px" }}>Why Us</Typography>
                <Typography variant='p'>
                    Mengapa harus pilih Binar Car Rental?
                </Typography>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Paper variant="outlined" square sx={{ marginRight: '100px', padding: "1rem" }} >
                    <img src={"images/icon_complete.png"} alt="icon_complete" />
                    <Typography variant="h6" sx={{ fontWeight: "bold", lineHeight: "60px", fontSize: "1.1rem" }}>Mobil Lengkap</Typography>
                    <Typography variant="p">
                        Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                    </Typography>
                </Paper>

                <Paper variant="outlined" square sx={{ marginRight: '100px', padding: "1rem" }}>
                    <img src={"images/icon_price.png"} alt="icon_complete" />
                    <Typography variant="h6" sx={{ fontWeight: "bold", lineHeight: "60px", fontSize: "1.1rem" }}>Mobil Lengkap</Typography>
                    <Typography variant="p">
                        Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                    </Typography>
                </Paper>

                <Paper variant="outlined" square sx={{ marginRight: '100px', padding: "1rem" }}>
                    <img src={"images/icon_24hrs.png"} alt="icon_complete" />
                    <Typography variant="h6" sx={{ fontWeight: "bold", lineHeight: "60px", fontSize: "1.1rem" }}>Mobil Lengkap</Typography>
                    <Typography variant="p">
                        Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                    </Typography>
                </Paper>

                <Paper variant="outlined" square sx={{ marginRight: '100px', padding: "1rem" }}>
                    <img src={"images/icon_professional.png"} alt="icon_complete" />
                    <Typography variant="h6" sx={{ fontWeight: "bold", lineHeight: "60px", fontSize: "1.1rem" }}>Mobil Lengkap</Typography>
                    <Typography variant="p">
                        Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                    </Typography>
                </Paper>

            </Box>
        </Box >
    )
}

export default WhyUs
