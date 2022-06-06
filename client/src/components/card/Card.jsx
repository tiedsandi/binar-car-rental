import './card.scss'
import { Button, Typography } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyIcon from '@mui/icons-material/Key';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Card = ({ page }) => {

    return (
        <>
            {
                page === 'user ' ? (
                    <div className="card">
                        <div className="cardHeader">
                            <div className="cardContentImage">
                                <img className='carImg' src={''} alt="car" />
                            </div>
                        </div>
                        <div className="cardContent">
                            <Typography mb={.1}> car.name / car.type </Typography>
                            <Typography mb={1} sx={{
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                            }}> Rp. car.price / hari </Typography>
                            <div className="cardDesc">
                                <Typography variant="caption">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus commodi aut doloremque elit. Accusamus commodi aut doloremque
                                </Typography>
                            </div>
                            <div className="cardTime">
                                <Typography className='time' mb={.5}>
                                    <GroupIcon className='icon-btn' />
                                    4 orang
                                </Typography>
                                <Typography className='time' mb={.5}>
                                    <SettingsIcon className='icon-btn' />
                                    Manual
                                </Typography>
                                <Typography className='time' mb={.5}>
                                    <CalendarMonthIcon className='icon-btn' />
                                    Tahun 2020
                                </Typography>
                            </div>
                        </div>
                        <div className="cardFooter">
                            <Button variant="contained" color="primary" fullWidth >
                                Pilih Mobil
                            </Button>
                        </div>
                    </div >
                ) : (
                    <div className="card">
                        <div className="cardHeader">
                            <div className="cardContentImage">
                                <img className='carImg' src={''} alt="car" />
                            </div>
                        </div>
                        <div className="cardContent">
                            <Typography mb={.1}> car.name / car.type </Typography>
                            <Typography mb={1} sx={{
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                            }}> Rp. car.price / hari </Typography>
                            <div className="cardTime">
                                <Typography className='time' mb={.5}>
                                    <KeyIcon className='icon-btn' />
                                    car.startRent - car.finishRent
                                </Typography>
                                <Typography className='time' mb={.5}>
                                    <AccessTimeIcon className='icon-btn' />
                                    Updated at car.update.seconds
                                </Typography>
                            </div>
                        </div>
                        <div className="cardFooter">
                            <Button className="button delete" >
                                <DeleteIcon className='icon-btn' />
                                Delete
                            </Button>
                            <Button className="button" href={`edit/`}>
                                <EditIcon className='icon-btn' />
                                Edit
                            </Button>
                        </div>
                    </div >
                )
            }
        </>
    )
}

export default Card
