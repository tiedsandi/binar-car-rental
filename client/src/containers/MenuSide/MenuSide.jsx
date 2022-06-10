import './menuside.scss'
import { Link, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

const MenuSide = ({ page }) => {
    return (
        <Stack direction={'column'} width={"4rem"} height={'100vh'} sx={{
            backgroundColor: '#0D28A6',
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '4rem',
            }}>
                <img src={'/images/logoSmall.png'} alt="logo" />
            </Box>
            <Link className={page === 'home' ? 'menu-btn active' : 'menu-btn'} underline={'none'} color={'white'} href={'/dashboard'}>
                <HomeOutlinedIcon />
                <Typography variant={'body1'}>Home</Typography>
            </Link>
            <Link className={page === 'cars' ? 'menu-btn active' : 'menu-btn'} underline={'none'} color={'white'} href={'/dashboard/cars'}>
                <LocalShippingOutlinedIcon />
                <Typography variant={'body1'}>Cars</Typography>
            </Link>
        </Stack >
    )
}

export default MenuSide
