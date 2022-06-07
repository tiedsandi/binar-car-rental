import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import AdminNavbar from '../../containers/AdminNavbar'
import MenuSide from '../../containers/MenuSide/MenuSide'
import SideMenu from '../../containers/SideMenu/SideMenu'
import { showing } from '../../redux/show'

const Dashboard = () => {
    const show = useSelector(showing)
    return (
        <Box display={'flex'}>
            <MenuSide page='home' />
            <Box >
                <AdminNavbar />
                <Box display={'flex'}>
                    {show ? <SideMenu page={'dashboard'} /> : null}
                    <Box flex={7} p={2} sx={{
                        backgroundColor: '#F5F5F5',
                    }}>
                        COba coba
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Dashboard
