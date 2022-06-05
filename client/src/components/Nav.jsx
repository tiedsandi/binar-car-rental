import { Link } from "@mui/material";
const Nav = () => {
    return (
        <>
            <Link underline="none" color="black" className="menu-item" href="/"> Our Services </Link>
            <Link underline="none" color="black" className="menu-item" href="/"> Why Us </Link>
            <Link underline="none" color="black" className="menu-item" href="/"> Testimonial </Link>
            <Link underline="none" color="black" className="menu-item" href="/"> FAQ </Link>
        </>
    )
}

export default Nav
