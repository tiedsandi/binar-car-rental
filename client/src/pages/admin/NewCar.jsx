import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import AdminNavbar from '../../containers/AdminNavbar'
import MenuSide from '../../containers/MenuSide/MenuSide'
import SideMenu from '../../containers/SideMenu/SideMenu'
import { showing } from '../../redux/show'

import "./new.scss"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";


const NewCar = () => {
    const show = useSelector(showing)

    const [image, setImage] = useState("");
    const [data, setData] = useState({});
    const [perc, setPerc] = useState(null);
    const [massage, setMassage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const uploadImage = () => {
            const name = new Date().getTime() + image.name;
            console.log(name);
            const storageRef = ref(storage, image.name);
            const uploadTask = uploadBytesResumable(storageRef, image);

            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    setPerc(progress)
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                        default:
                            break;
                    }
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setData((prev) => ({ ...prev, img: downloadURL }));
                    });
                }
            );
        };
        image && uploadImage();
    }, [image])

    // console.log(data);

    const handleInput = (e) => {
        const id = e.target.id;
        const value = e.target.value;

        setData({ ...data, [id]: value });
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "cars"), {
                ...data,
                update: serverTimestamp(),
            });
            setMassage("Berhasil Menambahkan Data");
            console.log(massage);
            navigate(-1);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Box display={'flex'}>
            <MenuSide page='cars' />
            <Box >
                <AdminNavbar />
                <Box display={'flex'}>
                    {show ? <SideMenu page={'dashboard'} /> : null}
                    <Box flex={7} p={2} sx={{
                        backgroundColor: '#F5F5F5',
                    }}>
                        <Link className="back-button" to="/dashboard/cars" >
                            < ArrowBackIcon />
                            Kembali
                        </Link>
                        <h1 className='title'>Tambah Mobil</h1>
                        <form className="form" onSubmit={handleAdd}>
                            <div className="form-group">
                                <label>Nama Mobil</label>
                                <input type="text" className="form-control" id="name" placeholder="Nama Mobil" name="name" onChange={handleInput} />
                            </div>

                            <div className="form-group">
                                <label>Tipe</label>
                                <select className="select-input" id="type" onChange={handleInput}>
                                    <option value="">--Please choose an option--</option>
                                    <option value="Kecil">Kecil</option>
                                    <option value="Sedang">Sedang</option>
                                    <option value="Besar">Besar</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input type="number" className="form-control" id="price" placeholder="Harga sewa per hari" name="price" onChange={handleInput} />
                            </div>
                            <div className="form-group">
                                <label>Deskripsi</label>
                                <textarea className="form-control" placeholder="Deskripsi" id="description" name="description" onChange={handleInput} />
                            </div>
                            <div className="form-group">
                                <label>Penumpang</label>
                                <input type="number" className="form-control" placeholder="Kapasitas Penumpang" id="passengers" name="passengers" onChange={handleInput} />
                            </div>

                            <div className="form-group">
                                <label>Mesin</label>
                                <select name="engine" id="engine" className="select-input" onChange={handleInput}>
                                    <option value="">--Please choose an option--</option>
                                    <option value="Manual">Manual</option>
                                    <option value="Otomatis">Otomatis</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Tahun</label>
                                <input type="number" className="form-control" placeholder="Tahun" id="year" name="year" onChange={handleInput} />
                            </div>
                            <div className="form-group">
                                <label>Start Rent</label>
                                <input type="date" className="form-control" placeholder="Start Rent" id="startRent" name="startRent" onChange={handleInput} />
                            </div>
                            <div className="form-group">
                                <label>Finish Rent</label>
                                <input type="date" className="form-control" placeholder="Finish Rent" name="finishRent" id="finishRent" onChange={handleInput} />
                            </div>
                            <div className="form-group">
                                <label>Update</label>
                                <input type="inpute" disabled className="form-control" placeholder="Update" name="update" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input type="file" className="form-control" placeholder="Image" name="image" id="file" onChange={(e) => setImage(e.target.files[0])} style={{ display: "none" }} />

                                <img
                                    width="150px"

                                    src={
                                        image
                                            ? URL.createObjectURL(image)
                                            : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="buttons">
                                <button type="submit" disabled={perc !== null && perc < 100} >Tambah</button>
                            </div>
                        </form>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default NewCar
