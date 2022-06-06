import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useSelector } from "react-redux"
import Card from "../components/card/Card"
import { getCars } from "../redux/cars"
import { showing } from "../redux/show"

const ContentCars = () => {
    const show = useSelector(showing)
    const cars = useSelector(getCars)
    return (
        <>
            {
                show ? (
                    <>
                    </>
                ) : (
                    <Box mt={4} mx={22} display="flex" sx={{
                        flexWrap: "wrap",
                    }}>
                        {
                            cars.length > 0 ? (
                                cars.map(car => (
                                    <Card key={car.id} car={car} page={'user'} />
                                ))
                            ) : (
                                <Box p={2}>
                                    <Typography paragraph>Tidak ada mobil yang ditampilkan</Typography>
                                </Box>
                            )
                        }
                    </Box>
                )
            }
        </>
    )
}

export default ContentCars
