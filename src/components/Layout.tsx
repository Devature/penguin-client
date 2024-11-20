// components/Layout.tsx
import { Stack, Box } from '@mui/material';
import ResponsiveAppBar from './AppBar';
import { Outlet } from 'react-router-dom';

// Layout component with styling applied
const Layout = () => (
    <Stack
        sx={{
            bgcolor: 'background.default', // Apply the background styling here
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