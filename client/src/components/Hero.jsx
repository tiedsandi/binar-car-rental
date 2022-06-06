
import { Button, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { showing } from "../redux/show";

const Hero = ({ page }) => {
    const show = useSelector(showing)
    return (
        <>
            {
                show ? (
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
                            {page === 'home' ?
                                <Button variant="contained" sx={{ width: "22%", color: "white" }} color="success" >Mulai Sewa Mobil</Button>
                                :
                                <></>
                            }

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
                ) : (
                    <Grid
                        sx={{
                            minHeight: "6rem",
                        }} />
                )
            }
        </>
    )
}

export default Hero
