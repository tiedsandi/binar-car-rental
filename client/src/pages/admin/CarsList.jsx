import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import AdminNavbar from '../../containers/AdminNavbar'
import MenuSide from '../../containers/MenuSide/MenuSide'
import SideMenu from '../../containers/SideMenu/SideMenu'
import { showing } from '../../redux/show'

import "./cars.scss"
import Carde from "../../components/carde/Carde";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { Data } from "../../App";

const CarsList = () => {
    const show = useSelector(showing)

    const { data, setData } = useContext(Data)

    useEffect(() => {
        const unsub = onSnapshot(
            collection(db, "cars"),
            (snapShot) => {
                let list = [];
                snapShot.docs.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() });
                });
                setData(list);
            },
            (error) => {
                console.log(error);
            }
        );

        return () => {
            unsub();
        };
    }, [setData]);
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
                        <p> <b>Cars {'>'} </b> List Cars</p>
                        <div className="addButton">
                            <h3>List Cars</h3>
                            <Link to="/dashboard/cars/new" className="link">
                                <AddIcon />
                                Add New Car
                            </Link>
                        </div>
                        {
                            // isLoading ? (
                            //     <>
                            //         <div className="shimmer">
                            //             <ShimmerSimpleGallery card caption imageHeight={350} col={4} row={2} />
                            //         </div>
                            //     </>
                            // ) : (
                            data.length === 0 ? (
                                <div className="cardContainer">
                                    <h1>No Data</h1>
                                </div>
                            ) : (
                                <div className="cardContainer">
                                    {
                                        data.map(car => (
                                            <Carde key={car.id} id={car.id} />

                                        ))
                                    }
                                </div>
                            )
                            // )
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default CarsList 