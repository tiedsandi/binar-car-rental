import './sidemenu.scss'
import { Typography, Link } from '@mui/material'
import { Box } from '@mui/system'

const SideMenu = ({ page }) => {
    return (
        <Box sx={{
            height: '93.7vh',
            width: '100%',
            flex: 1,
            backgroundColor: 'white',

        }}>
            <Typography variant='h5' p={'1rem'} color={'#8A8A8A'}>Dashboard</Typography>
            <Link className={page === 'dashboard' ? 'side-menu actived' : 'side-menu'} underline={'none'} color={'white'}>
                <Typography variant='body1' color={'#000'}>Dashboard</Typography>
            </Link>
        </Box>
    )
}

export default SideMenu
