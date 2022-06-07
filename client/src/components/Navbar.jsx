import { Box, Button, Link } from "@mui/material";
import MenuProfile from "./MenuProfile";
import Nav from "./Nav";

const Navbar = ({ page }) => {
    return (
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
                {page === 'home' ?
                    <>
                        <Nav />
                        <Button component={Link} variant="contained" href="/register" color="success" sx={{ color: "white" }}>Register</Button>
                    </>
                    :
                    <MenuProfile />
                }

            </Box>
        </Box>
    )
}

export default Navbar
