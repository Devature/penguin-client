import { RouterProvider } from 'react-router-dom';
import { Box, ThemeProvider } from '@mui/material';
import { theme } from './util/theme';
import { router } from './routes';

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        bgcolor: 'background.default',
                        m: 0,
                        minWidth: '100vw',
                        minHeight: '100vh',
                    }}
                >
                    <RouterProvider router={router} />
                </Box>
            </ThemeProvider>
        </>
    );
}

export default App;
