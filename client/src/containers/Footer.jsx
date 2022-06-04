import React from 'react'
// import Logo from '../components/Logo'
// import NavLink from '../components/NavLink'
import { Avatar, Grid, Link, Stack, Typography } from '@mui/material'
import Logo from '../components/Logo'

const Footer = () => {
    return (
        <Grid container spacing={4} mt={10} px={"6rem"}>
            <Grid item xs={3}>
                <Typography paragraph
                    sx={{ width: { sm: '100%', lg: '80%' } }}
                >
                    Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
                </Typography>
                <Typography paragraph>
                    binarcarrental@gmail.com
                </Typography>
                <Typography paragraph>
                    081-233-334-808
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Stack direction="column" spacing={1}>
                    <Link underline="none" color="black" className="menu-item" to="/"> Our Services </Link>
                    <Link underline="none" color="black" className="menu-item" to="/"> Why Us </Link>
                    <Link underline="none" color="black" className="menu-item" to="/"> Testimonial </Link>
                    <Link underline="none" color="black" className="menu-item" to="/"> FAQ </Link>
                </Stack>
            </Grid>
            <Grid item xs={3}>
                <Typography paragraph>
                    Connect with us
                </Typography>
                <Stack direction="row" spacing={1}>
                    <Avatar alt="Facebook" src="/images/icon_facebook.png" />
                    <Avatar alt="Instagram" src="/images/icon_instagram.png" />
                    <Avatar alt="Twitter" src="/images/icon_twitter.png" />
                    <Avatar alt="Gmail" src="/images/icon_mail.png" />
                    <Avatar alt="Twitch" src="/images/icon_twitch.png" />
                </Stack>
            </Grid>
            <Grid item xs={3}>
                <Typography paragraph>
                    Copyright Binar 2022
                </Typography>
                <Logo />
            </Grid>
        </Grid >
    )
}

export default Footer
