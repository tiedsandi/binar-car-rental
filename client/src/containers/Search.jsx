import { Box } from '@mui/material'
import { Button, MenuItem, TextField, Typography } from '@mui/material'
import { setShow } from '../redux/show';
import { useDispatch } from 'react-redux';
import { fetchCars } from '../redux/cars';
const Search = () => {
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(setShow(false))
        dispatch(fetchCars())
    }
    return (
        <Box p={2}
            sx={{
                display: "flex",
                position: "absolute",
                backgroundColor: "white",
                left: '50%',
                transform: 'translate(-50%, -50%)',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
                borderRadius: '10px',
                width: '80%',
                alignItems: 'center',
                justifyContent: 'space-between',
                // bottom: '-20%',
            }}>
            <Box width={"300px"}>
                <Typography paragraph>Tipe Mesin</Typography>
                <TextField
                    select
                    defaultValue='semua'
                    size="small"
                    fullWidth
                >
                    <MenuItem disabled value="">
                        <em>Pilih Jenis Mesin</em>
                    </MenuItem>
                    <MenuItem value={'semua'}>Semua</MenuItem>
                </TextField>
            </Box>
            <Box ml={2} width={"300px"}>
                <Typography paragraph>Tipe Mobil</Typography>
                <TextField
                    select
                    defaultValue='semua'
                    size="small"
                    fullWidth
                >
                    <MenuItem disabled value="">
                        <em>Pilih Tipe Mobil</em>
                    </MenuItem>

                    <MenuItem value={'semua'}>Semua</MenuItem>

                </TextField>
            </Box>
            <Box ml={2} width={"300px"}>
                <Typography paragraph>Tahun Mobil</Typography>
                <TextField
                    select
                    defaultValue='semua'
                    size="small"
                    fullWidth
                >
                    <MenuItem disabled value="">
                        <em>Pilih Harga Mobil</em>
                    </MenuItem>

                    <MenuItem value={'semua'}>Semua</MenuItem>

                </TextField>
            </Box>
            <Box ml={2} width={"300px"}>
                <Typography paragraph>Jumlah Penumpang (optional)</Typography>
                <TextField
                    select
                    defaultValue='semua'
                    size="small"
                    fullWidth
                >
                    <MenuItem disabled value="">
                        <em>Pilih Tipe Mobil</em>
                    </MenuItem>

                    <MenuItem value={'semua'}>Semua</MenuItem>

                </TextField>
            </Box>
            <Box ml={2} pt={4.5}>
                <Button variant="contained" color="success" sx={{ color: "white" }} fullWidth onClick={handleChange}>
                    Cari Mobil
                </Button>
            </Box>
        </Box>
    )
}

export default Search
