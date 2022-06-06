import { createTheme } from "@mui/material";

export const Theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1400,
        },
    },
    palette: {
        primary: {
            main: '#0D28A6',
        },
        secondary: {
            main: '#F1F3FF',
        },
        success: {
            main: '#5CB85F',
        },
    }
});