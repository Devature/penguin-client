import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import ForgotPassword from './ForgotPassword';
import AppTheme from '../assets/template-themes/AppTheme';
import { useSignUpNavigation } from '../util/hooks/navigationUtilities.ts';
import { GoogleIcon } from '../components/icons/GoogleIcon.tsx';
import { MicrosoftIcon } from '../components/icons/MicrosoftIcon.tsx';
import PenguinIcon from '../assets/penguins/penguin-icon.tsx';

{
    /* We're grabbing the function for navigating to the signup page by calling the hook
    Hooks run during component rendering, returning a function that can be used to handle events
    This has to be done at the top level-- Aaron*/
}

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
        maxWidth: '450px',
    },
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
    height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
    minHeight: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        backgroundImage:
            'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
        backgroundRepeat: 'no-repeat',
        ...theme.applyStyles('dark', {
            backgroundImage:
                'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
        }),
    },
}));

{
    /* This is imported into the router, so it's whats rendered when the signin.tsx page is navigated to */
}
export default function SignIn(props: { disableCustomTheme?: boolean }) {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handleBlurEmail = () => {
        if (!validateEmail(email)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    };

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const handleBlurPassword = () => {
        if (!validatePassword(password)) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    };

    const [open, setOpen] = useState(false);

    // Call useSignUpNavigation inside the component to follow hook rules
    const navigateToSignUp = useSignUpNavigation();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        if (emailError || passwordError) {
            event.preventDefault();
            return;
        }
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const validateEmail = (email: string) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const validatePassword = (password: string) => {
        return password.length > 5;
    };

    const validateForm = () => {
        return validateEmail(email) && validatePassword(password);
    };

    {
        /* This is the JSX returned when the sign in function is called */
    }
    return (
        <AppTheme {...props}>
            {/* <CssBaseline enableColorScheme /> */}
            <SignInContainer direction="column" justifyContent="space-between">
                <Card variant="outlined" sx={{ position: 'relative' }}>
                    {/* Ticket Penguin Icon */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                        }}
                    >
                        <PenguinIcon size={50} />
                    </Box>

                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{
                            width: '100%',
                            fontSize: 'clamp(2rem, 10vw, 2.15rem)',
                            textAlign: 'center',
                        }}
                    >
                        Sign In
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            gap: 2,
                        }}
                    >
                        <FormControl>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <TextField
                                error={emailError}
                                helperText={
                                    !emailError
                                        ? ''
                                        : 'Please enter a valid email'
                                }
                                id="email"
                                type="email"
                                name="email"
                                placeholder="name@company.com"
                                value={email}
                                autoComplete="email"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                color={emailError ? 'error' : 'primary'}
                                onChange={handleChangeEmail}
                                onBlur={handleBlurEmail}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <TextField
                                error={passwordError}
                                helperText={
                                    !passwordError
                                        ? ''
                                        : 'Password must be at least 6 characters long'
                                }
                                name="password"
                                placeholder="••••••••••••••"
                                value={password}
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                color={passwordError ? 'error' : 'primary'}
                                onChange={handleChangePassword}
                                onBlur={handleBlurPassword}
                            />
                        </FormControl>
                        <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="Remember me"
                        />
                        <ForgotPassword open={open} handleClose={handleClose} />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={validateForm}
                        >
                            Login
                        </Button>
                        <Link
                            component="button"
                            type="button"
                            onClick={handleClickOpen}
                            variant="body2"
                            sx={{ alignSelf: 'center' }}
                        >
                            Forgot your password?
                        </Link>
                    </Box>
                    <Divider>or</Divider>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                        }}
                    >
                        <Button
                            fullWidth
                            variant="outlined"
                            onClick={() => alert('Sign in with Google')}
                            startIcon={<GoogleIcon />}
                        >
                            Sign in with Google
                        </Button>
                        <Button
                            fullWidth
                            variant="outlined"
                            onClick={() => alert('Sign in with Microsoft')}
                            startIcon={<MicrosoftIcon />}
                        >
                            Sign in with Microsoft
                        </Button>
                        <Typography sx={{ textAlign: 'center' }}>
                            Don&apos;t have an account?{' '}
                            {/* Use an event handler to call the fetched function to navigate to sign up */}
                            <span
                                onClick={navigateToSignUp}
                                style={{ color: 'blue', cursor: 'pointer' }}
                            >
                                Sign up
                            </span>
                        </Typography>
                    </Box>
                </Card>
            </SignInContainer>
        </AppTheme>
    );
}
