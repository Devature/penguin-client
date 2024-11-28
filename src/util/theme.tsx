import { createTheme } from '@mui/material';
import '@fontsource/gabriela/400.css';

export const theme = createTheme({
    palette: {
        mode: 'dark',
        text: {
            primary: '#F6F6F6',
            secondary: '#DBE3E5',
        },
        primary: {
            main: '#2B4753',
            contrastText: '#F6F6F6',
        },
        secondary: {
            light: '#D9B45D',
            main: '#D0894B',
            contrastText: '#DBE3E5',
        },
        background: {
            default: '#253542',
            paper: '#1a262fba',
        },
        error: {
            main: '#ff5252',
        },
    },
    components: {
        MuiLink: {
            defaultProps: {
                color: 'primary.light',
            },
        },
        MuiButton: {
            defaultProps: {
                variant: 'contained',
            },
        },
    },
});
