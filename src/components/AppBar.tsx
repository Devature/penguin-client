import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Stack } from '@mui/material';
import { useAuth } from '../util/auth/useAuth';
import { useNavigate } from 'react-router-dom';
import PenguinIcon from '../assets/penguins/penguin-icon.tsx';

const pages = ['Projects', 'Tickets'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );
    const { isAuthenticated, setIsAuthenticated } = useAuth();

    const navigate = useNavigate();

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    /** Navigate to login page */
    const handleLoginNavigate = () => {
        navigate('/signin');
    };

    /** Navigate to registration page */
    const handleRegisterNavigate = () => {
        navigate('/signup');
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Container for desktop logo with text */}
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            mr: 1,
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <PenguinIcon size={69} />
                        <Typography
                            variant="h1"
                            sx={{
                                fontFamily: 'Gabriola',
                                fontSize: '3rem',
                                mt: '0.4rem',
                                ml: '0.5rem',
                            }}
                        >
                            Ticket Penguin
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* Mobile logo & text */}
                        <Box
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                mr: 1,
                                height: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <PenguinIcon size={50} />
                            <Typography
                                variant="h1"
                                sx={{
                                    fontFamily: 'Gabriola',
                                    fontSize: '2.4rem',
                                    mt: '0.4rem',
                                }}
                            >
                                Ticket Penguin
                            </Typography>
                        </Box>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography sx={{ textAlign: 'center' }}>
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Right side login button/user menu */}
                    {isAuthenticated ? (
                        <>
                            {/* Stack with buttons only visible when authenticated */}
                            <Stack
                                spacing={2}
                                direction="row"
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: 'none', md: 'flex' },
                                    ml: 2,
                                    justifyContent: 'flex-end',
                                    mr: 2,
                                }}
                            >
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{
                                            my: 2,
                                            color: 'white',
                                            display: 'block',
                                        }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Stack>

                            {/* Right side user menu */}
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton
                                        onClick={handleOpenUserMenu}
                                        sx={{ p: 0 }}
                                    >
                                        <Avatar
                                            alt="User Icon"
                                            src="/static/images/avatar/2.jpg"
                                        />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography
                                            sx={{ textAlign: 'center' }}
                                        >
                                            Dashboard
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            setIsAuthenticated(false);
                                            handleCloseUserMenu();
                                        }}
                                    >
                                        <Typography
                                            sx={{ textAlign: 'center' }}
                                        >
                                            Logout
                                        </Typography>
                                    </MenuItem>
                                </Menu>
                            </Box>
                        </>
                    ) : (
                        // This makes the login and register buttons appear when the user is not authenticated
                        <Stack
                            spacing={2}
                            direction="row"
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                                ml: 2,
                                justifyContent: 'flex-end',
                            }}
                        >
                            {/* button wired to navigate to the sign in page -- this is hooked into a path in routes.tsx */}
                            <Button onClick={handleLoginNavigate}>Login</Button>

                            <Button onClick={handleRegisterNavigate}>
                                Register
                            </Button>
                        </Stack>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
