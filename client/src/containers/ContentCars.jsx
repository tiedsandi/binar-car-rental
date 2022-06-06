import { Box } from "@mui/system"
import { useSelector } from "react-redux"
import Card from "../components/card/Card"
import { showing } from "../redux/show"

const ContentCars = () => {
    const show = useSelector(showing)
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
                        <Card page={'user'} />
                        <Card page={'user'} />
                        <Card page={'user'} />
                        <Card page={'user'} />
                        <Card page={'user'} />
                        <Card page={'user'} />
                    </Box>
                )
            }
        </>
    )
}

export default ContentCars
