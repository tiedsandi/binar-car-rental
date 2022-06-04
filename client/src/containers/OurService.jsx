import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const OurService = () => {
    return (
        <Grid container spacing={3} mt={10} >
            <Grid item xs={12} sm={6}
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    paddingRight: '6rem',
                    alignItems: 'center',
                }}
            >
                <img src='./images/img_service.png' alt='imgService' />
            </Grid>
            <Grid item xs={12} sm={6} >
                <Typography variant='h4' width={"600px"} fontWeight={"bold"} lineHeight={1.2} className="title-2" mb={2}>
                    Best Car Rental for any kind of trip in (Lokasimu)!
                </Typography>
                <Typography variant="p" mb={3}
                    sx={{
                        display: "flex",
                        width: "550px",
                        lineHeight: "1.4rem",
                        wordSpacing: "0.46rem",
                    }}
                >
                    Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
                </Typography>
                <Box mb={2} display={"flex"} textAlign={"center"}>
                    <img src="./images/ceklis.png" alt="ceklis" />
                    <Typography variant="p" ml={2}>
                        Sewa Mobil Dengan Supir di Bali 12 Jam
                    </Typography>
                </Box>
                <Box mb={2} display={"flex"} textAlign={"center"}>
                    <img src="./images/ceklis.png" alt="ceklis" />
                    <Typography variant="p" ml={2}>
                        Sewa Mobil Lepas Kunci di Bali 24 Jam
                    </Typography>
                </Box>
                <Box mb={2} display={"flex"} textAlign={"center"}>
                    <img src="./images/ceklis.png" alt="ceklis" />
                    <Typography variant="p" ml={2}>
                        Sewa Mobil Jangka Panjang Bulanan
                    </Typography>
                </Box>
                <Box mb={2} display={"flex"} textAlign={"center"}>
                    <img src="./images/ceklis.png" alt="ceklis" />
                    <Typography variant="p" ml={2}>
                        Gratis Antar - Jemput Mobil di Bandara
                    </Typography>
                </Box>
                <Box mb={2} display={"flex"} textAlign={"center"}>
                    <img src="./images/ceklis.png" alt="ceklis" />
                    <Typography variant="p" ml={2}>
                        Layanan Airport Transfer / Drop In Out
                    </Typography>
                </Box>
            </Grid>
        </Grid >

    )
}

export default OurService
