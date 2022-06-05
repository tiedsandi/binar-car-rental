import { Box } from "@mui/material";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

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
            <Navbar page={'home'} />
            <Hero page={'home'} />
        </Box >
    )
}

export default Header
