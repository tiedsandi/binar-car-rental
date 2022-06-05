import { Box } from '@mui/material'
import { Button, FormControl, Grid, MenuItem, TextField, Typography } from '@mui/material'
const Search = () => {
    return (
        <Box p={2}
            sx={{
                display: "flex",
                position: "absolute",
                backgroundColor: "white",
                left: '50%',
                transform: 'translate(-50%, -50%)',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
            }}>
            <FormControl fullWidth>
                <Typography paragraph>Tipe Mesin</Typography>
                <TextField
                    select
                    defaultValue='semua'

                >
                    <MenuItem disabled value="">
                        <em>Pilih Jenis Mesin</em>
                    </MenuItem>
                    <MenuItem value={'semua'}>Semua</MenuItem>

                </TextField>
            </FormControl>

            <FormControl fullWidth>
                <Typography paragraph>Tipe Mobil</Typography>
                <TextField
                    select

                    defaultValue='semua'
                >
                    <MenuItem disabled value="">
                        <em>Pilih Tipe Mobil</em>
                    </MenuItem>

                    <MenuItem value={'semua'}>Semua</MenuItem>

                </TextField>

            </FormControl>
            <FormControl fullWidth>
                <Typography paragraph>Tahun Mobil</Typography>
                <TextField
                    select
                    defaultValue='semua'

                >
                    <MenuItem disabled value="">
                        <em>Pilih Harga Mobil</em>
                    </MenuItem>

                    <MenuItem value={'semua'}>Semua</MenuItem>

                </TextField>
            </FormControl>
            <FormControl >
                <Typography paragraph>Jumlah Penumpang (optional)</Typography>
                <TextField
                    select
                    defaultValue='semua'

                >
                    <MenuItem disabled value="">
                        <em>Pilih Tipe Mobil</em>
                    </MenuItem>

                    <MenuItem value={'semua'}>Semua</MenuItem>

                </TextField>
            </FormControl>
            <Button
                variant="contained"
                color="success"
                fullWidth
                sx={{ position: 'absolute', bottom: '0', height: '3.5rem' }}
            >
                <Typography color={'white'} sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}
                >Cari Mobil</Typography>
            </Button>
        </Box>
    )
}

export default Search
