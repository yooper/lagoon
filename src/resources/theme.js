import {createTheme} from "@mui/material";

export default function getTheme() {

    return createTheme({
        palette: {
            type: 'light',
            primary: {
                main: '#2C81AB',
            },
            secondary: {
                main: '#619657',
            },
        },
        paper: {
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: 12,
            backgroundColor: '#2C81AB',
        },
        form: {
            width: '100%',
            marginTop: 12,
        },
        submit: {
            margin: 12,
        },
        selectAdornment: {
            marginRight: 12,
        }
    })
}