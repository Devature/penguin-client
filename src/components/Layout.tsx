import { Stack, Box } from '@mui/material';
import ResponsiveAppBar from './AppBar';
import { Outlet } from 'react-router-dom';

// Layout component with styling applied
const Layout = () => (
    <Stack
        sx={{
            // Apply the background styling here
            // sx is a prop that's part of MUI that allows inline CSS styles to apply
            // to MUI components using JS syntax
            // tl;dr sx = shorthand for style definition in MUI components
            // prop takes JS object, keys are CSS properties and values are the corresponding values
            bgcolor: 'background.default',
            m: 0,
            minWidth: '100vw',
            minHeight: '100vh',
        }}
    >
        <ResponsiveAppBar />
        <Box sx={{ flexGrow: 1 }}>
            <Outlet /> {/* Render the child routes here */}
        </Box>
    </Stack>
);

export default Layout;