import { Avatar, Box, Button, Link } from "@mui/material";
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
                        <Button component={Link} variant="contained" href="/login" color="success" sx={{ color: "white" }}>Register</Button>
                    </>
                    :
                    <Avatar />
                }

            </Box>
        </Box>
    )
}

export default Navbar
