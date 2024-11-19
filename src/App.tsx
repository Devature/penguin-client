import { RouterProvider } from 'react-router-dom';
import { Box, Stack, ThemeProvider } from '@mui/material';
import { theme } from './util/theme';
import { router } from './routes';
import ResponsiveAppBar from './components/AppBar';
import { AuthProvider } from './util/auth/AuthProvider';

function App() {
    return (
        <>
            <AuthProvider>
                <ThemeProvider theme={theme}>
                    <Stack
                        sx={{
                            bgcolor: 'background.default',
                            m: 0,
                            minWidth: '100vw',
                            minHeight: '100vh',
                        }}
                    >
                        <ResponsiveAppBar />
                        <Box>
                            <RouterProvider router={router}/>
                        </Box>
                    </Stack>
                </ThemeProvider>
            </AuthProvider>
        </>
    );
}

export default App;
