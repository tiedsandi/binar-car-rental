import { Box, Button, Link, Grid, Typography } from "@mui/material";

const Header = () => {
    return (
        <Box className="header"
            sx={{
                backgroundColor: "#F1F3FF",
                position: "relative",
                padding: "1.5rem 6rem",
                height: "min-content",
            }}
        >
            <Box className="navbar"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Link className="header-logo" href="/">
                    <img src={"images/logo.png"} alt="logo" />
                </Link>
                <Box className="menu" >
                    <Link underline="none" color="black" className="menu-item" href="/"> Our Services </Link>
                    <Link underline="none" color="black" className="menu-item" href="/"> Why Us </Link>
                    <Link underline="none" color="black" className="menu-item" href="/"> Testimonial </Link>
                    <Link underline="none" color="black" className="menu-item" href="/"> FAQ </Link>
                    <Button component={Link} variant="contained" href="/login" >Register</Button>
                </Box>
            </Box>
            <Grid className="hero" container spacing={2}
                sx={{
                    minHeight: "500px",
                }}
            >
                <Grid item xs={6}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <Typography variant="h3" sx={{ fontWeight: "bold", lineHeight: "60px" }}>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</Typography>
                    <Typography sx={{ fontSize: "18px", width: "600px", color: "#0f0f0f", margin: "1rem 0" }} >Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</Typography>
                    <Button variant="contained" sx={{ width: "22%" }}>Mulai Sewa Mobil</Button>
                </Grid>
                <Grid item xs={6}
                    sx={{
                        position: "absolute",
                        right: 70,
                        bottom: 0,
                    }}
                >
                    <img src={"images/hero.png"} alt="hero" className="img-hero" />
                </Grid>
            </Grid>
        </Box >
    )
}

export default Header
