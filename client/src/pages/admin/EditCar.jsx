import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import AdminNavbar from '../../containers/AdminNavbar'
import MenuSide from '../../containers/MenuSide/MenuSide'
import SideMenu from '../../containers/SideMenu/SideMenu'
import { showing } from '../../redux/show'

import "./edit.scss"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getDoc, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const EditCar = () => {
    const show = useSelector(showing)

    const [image, setImage] = useState("");
    const [perc, setPerc] = useState(null);
    const [massage, setMassage] = useState("");
    const navigate = useNavigate();
    const [data, setData] = useState({});

    let { id } = useParams();
    console.log(id);

    useEffect(() => {
        const fetchData = async () => {
            const doc = await getDoc(db, "cars", id);
            if (doc.exists()) {
                setData(doc.data());
            } else {
                console.log("No such document!");
            }
        };


        const uploadImage = () => {
            const name = new Date().getTime() + image.name;
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
        fetchData();
    }, [image])

    const handleInput = (e) => {
        // const id = e.target.id;
        const value = e.target.value;

        setData({ ...data, [id]: value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await updateDoc(doc(db, "cars", id), {
                ...data,
                update: serverTimestamp(),
            });
            setMassage("Berhasil di update");
            console.log(massage);
            navigate(-1);

        } catch (error) {
            console.log(error);
        }
    }

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
                        <Link className="back-button" to="/dashboard/cars" >
                            < ArrowBackIcon />
                            Kembali
                        </Link>
                        <h1 className='title'>Update Mobil</h1>
                        <form className="form" onSubmit={handleUpdate}>
                            <div className="form-group">
                                <label>Nama Mobil</label>
                                <input type="text" className="form-control" id="name" placeholder="Nama Mobil" name="name" onChange={handleInput} defaultValue={data.name} />
                            </div>

                            <div className="form-group">
                                <label>Tipe</label>
                                <select className="select-input" id="type" onChange={handleInput} defaultValue={data.type}>
                                    <option value="">--Please choose an option--</option>
                                    <option value="Kecil">Kecil</option>
                                    <option value="Sedang">Sedang</option>
                                    <option value="Besar">Besar</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input type="number" className="form-control" id="price" placeholder="Harga sewa per hari" name="price" onChange={handleInput} defaultValue={data.price} />
                            </div>
                            <div className="form-group">
                                <label>Deskripsi</label>
                                <textarea className="form-control" placeholder="Deskripsi" id="description" name="description" onChange={handleInput} defaultValue={data.description} />
                            </div>
                            <div className="form-group">
                                <label>Penumpang</label>
                                <input type="number" className="form-control" placeholder="Kapasitas Penumpang" id="passengers" name="passengers" onChange={handleInput} defaultValue={data.passengers} />
                            </div>

                            <div className="form-group">
                                <label>Mesin</label>
                                <select name="engine" id="engine" className="select-input" onChange={handleInput} defaultValue={data.engine}>
                                    <option value="">--Please choose an option--</option>
                                    <option value="Manual">Manual</option>
                                    <option value="Otomatis">Otomatis</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Tahun</label>
                                <input type="number" className="form-control" placeholder="Tahun" id="year" name="year" onChange={handleInput} defaultValue={data.year} />
                            </div>
                            <div className="form-group">
                                <label>Start Rent</label>
                                <input type="date" className="form-control" placeholder="Start Rent" id="startRent" name="startRent" onChange={handleInput} defaultValue={data.startRent} />
                            </div>
                            <div className="form-group">
                                <label>Finish Rent</label>
                                <input type="date" className="form-control" placeholder="Finish Rent" name="finishRent" id="finishRent" onChange={handleInput} defaultValue={data.finishRent} />
                            </div>
                            <div className="form-group">
                                <label>Update</label>
                                <input type="inpute" disabled className="form-control" placeholder="Update" name="update" defaultValue={data.update} />
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
                                            : data.img
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

export default EditCar
