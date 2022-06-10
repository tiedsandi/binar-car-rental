import './carde.scss'
import KeyIcon from '@mui/icons-material/Key';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Data } from '../../App';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';

const Card = ({ id }) => {
    const { data, setData } = useContext(Data);
    const car = data.find(car => car.id === id);

    const deleteHandeler = async (id) => {
        try {
            await deleteDoc(doc(db, "cars", id));
            setData(data.filter((item) => item.id !== id));
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="card">
            <div className="cardHeader">
                <div className="cardContentImage">
                    <img className='carImg' src={car.img} alt="car" />
                </div>
            </div>
            <div className="cardContent">
                <p>{car.name} / {car.type} </p>
                <b>Rp. {car.price} / hari</b>
                <div className="cardTime">
                    <p className='time'>
                        <KeyIcon className='icon-btn' />
                        {car.startRent} - {car.finishRent}
                    </p>
                    <p className='time'>
                        <AccessTimeIcon className='icon-btn' />
                        Updated at {car.update.seconds}
                    </p>
                </div>
            </div>
            <div className="cardFooter">
                <button className="button delete" onClick={() => deleteHandeler(car.id)}>
                    <DeleteIcon className='icon-btn' />
                    Delete
                </button>
                <Link className="button" to={`edit/${car.id}`}>
                    <EditIcon className='icon-btn' />
                    Edit
                </Link>
            </div>
        </div >
    )
}

export default Card
