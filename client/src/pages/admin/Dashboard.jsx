import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import AdminNavbar from '../../containers/AdminNavbar'
import MenuSide from '../../containers/MenuSide/MenuSide'
import SideMenu from '../../containers/SideMenu/SideMenu'
import { showing } from '../../redux/show'

import {
    XAxis,
    CartesianGrid,
    Tooltip,
    YAxis,
    BarChart, Bar, Legend,
} from "recharts";
import React, { useContext } from 'react'
import { Data } from "../../App"
import TableOrder from '../../components/tableorder/TableOrder'

const Dashboard = () => {
    const show = useSelector(showing)

    const { data } = useContext(Data)
    console.log(data)
    const transformCarsType = (arr) => {
        let temp = []
        for (const i of arr) {
            temp.push(i.type)
        }
        temp = temp.reduce((acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc), {})
        return Object.keys(temp).map((key) => ({ type: key, count: temp[key] }))
    }
    const count = (transformCarsType(data))
    console.log(count)
    const dataCar = [
        { name: "Besar", Total: count[1] ? count[1].count : 0 },
        { name: "Sedang", Total: count[0] ? count[0].count : 0 },
        { name: "Kecil", Total: count[2] ? count[2].count : 0 },
    ];

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
                        <div className="dashboard-main">
                            <p> <b>Dashboard {'>'} </b> Dashboard</p>
                            <h3>Dashboard</h3>
                            <BarChart width={1000} height={400} data={dataCar}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis dataKey="Total" />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="Total" fill="#8884d8" />
                            </BarChart>
                            <TableOrder />
                        </div>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Dashboard
