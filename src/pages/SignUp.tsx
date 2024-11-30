import React, { useEffect, useState } from 'react';
import {
    Box,
    Button,
    Divider,
    FormLabel,
    FormControl,
    TextField,
    Typography,
    Stack,
    Card as MuiCard,
    Tooltip,
    InputAdornment,
    IconButton, Alert,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import AppTheme from '../assets/template-themes/AppTheme';
import InfoIcon from '@mui/icons-material/Info';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useLoginNavigation } from '../util/hooks/navigationUtilities.ts';
import { MicrosoftIcon } from '../components/icons/MicrosoftIcon.tsx';
import { GoogleIcon } from '../components/icons/GoogleIcon.tsx';
import PenguinIcon from '../assets/penguins/penguin-icon.tsx';
import { penguinApi } from '../util/axios.ts';
import { emailRegex, passwordRegex } from '../util/validationRegex.ts';
import { AxiosError } from 'axios';

{
    /* Styling for parent card */
}
const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    [theme.breakpoints.up('sm')]: {
        width: '450px',
    },
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));

{
    /* styling for sign up container */
}
const SignUpContainer = styled(Stack)(({ theme }) => ({
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
    /* Checking functions to make sure all inputs are valid */
}
export default function SignUp(props: { disableCustomTheme?: boolean }) {
    const [firstName, setFirstName] = useState('');

    //name change errors are basically to check for whitespace
    const [firstNameError, setFirstNameError] = useState(false);

    {/* react state changes (like setFirstName) are asynchronous, causing handleBlurFirstName to happen on the old state
        handlers for these -- particularly on blur -- are in the dom return*/}
    const handleChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newNameValue = e.target.value;
        setFirstName(newNameValue);

        //we decided to use trim.length over a custom import
        //the ternary is a placeholder for a later error message
        setFirstNameError(!newNameValue.trim().length ? true:false);
    };


    const [lastName, setLastName] = useState('');

    const [lastNameError, setLastNameError] = useState(false);
    const handleChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newNameValue = e.target.value;
        setLastName(newNameValue);

        //checking for whitespace
        //the ternary is a placeholder for a later error message
        setLastNameError(!newNameValue.trim().length ? true:false);
    };


    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        handleBlurEmail();
    };
    const handleBlurEmail = () => {
        setEmailError(!validateEmail(email));
    };

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        handleBlurPassword()
    };
    const handleBlurPassword = () => {
        setPasswordError ( !validatePassword(password) && (!reenterPassword.length || !reenterPasswordError) );
    };

    const [reenterPassword, setReenterPassword] = useState('');
    const [reenterPasswordError, setReenterPasswordError] = useState(false);

    useEffect(() => {
        setReenterPasswordError(password !== reenterPassword);
    }, [password, reenterPassword]);

    const handleChangeReenterPassword = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setReenterPassword(e.target.value);
    };

    const [registrationError, setRegistrationError] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const validateEmail = (email: string) => {
        return emailRegex.test(email);
    };

    const validatePassword = (password: string) => {
        return ( passwordRegex.test(password) );
    };

    const validateForm = () => {
        if (!email || !validateEmail(email)) return false;
        if (!password || !validatePassword(password)) return false;
        if (password !== reenterPassword) return false;
        if (!firstName || !lastName) return false;
        return true;
    };

// server site validation for email and password
    const attemptSignUp = async (): Promise<boolean> => {
        try {
            const response = await penguinApi.post('/api/v1/user/registration',
                {
                    'name': (firstName + " " + lastName),
                    'email': email,
                    'password': password
                }
            );
            console.log('User registered successfully:', response.data);
            return true;
        } catch (error) {
            console.error('Error registering user:', error);
            if (error instanceof AxiosError) {
                if (error.response && error.response.status === 409) setRegistrationError('A user already exists with this email address.');
                else if (error.response && error.response.status === 500) setRegistrationError('An internal server error occurred. Please try again.');
                else setRegistrationError('An unexpected error occurred. Please try again later.');
            } else setRegistrationError('An unexpected error occurred. Please try again later.');
            return false;
        }
    };

    const onRegisterClick = () => {
        if (validateForm()) {
            attemptSignUp()
                .then((isSuccess: boolean) => {
                    if (isSuccess) {
                        console.log("Success");
                        navigateToSignIn();
                    }
                });
        }
    };

    const navigateToSignIn = useLoginNavigation();

    return (
        <AppTheme {...props}>
            {/* <CssBaseline enableColorScheme /> */}
            <SignUpContainer direction="column" justifyContent="space-between">
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

                    {/* Sign Up title*/}
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{
                            width: '100%',
                            fontSize: 'clamp(2rem, 10vw, 2.15rem)',
                            textAlign: 'center',
                        }}
                    >
                        Sign Up
                    </Typography>

                    {/* Form div */}
                    <Box
                        component="form"
                        onSubmit={(e) => e.preventDefault()}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                        }}
                    >
                        <Stack
                            component="div"
                            direction="row"
                            spacing={2}
                            sx={{ justifyContent: 'space-between' }}
                        >
                            {/* First name input field */}
                            <FormControl>
                                <FormLabel htmlFor="firstname">
                                    First Name
                                </FormLabel>
                                <TextField
                                    autoComplete="firstName"
                                    autoFocus
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    placeholder="John"
                                    value={firstName}
                                    onChange={handleChangeFirstName}
                                    error={firstNameError}
                                    helperText={
                                        !firstNameError
                                            ? '\u00A0'
                                            : 'Please enter your first name'
                                    }
                                />
                            </FormControl>

                            {/* Last name input field */}
                            <FormControl>
                                <FormLabel htmlFor="lastname">
                                    Last Name
                                </FormLabel>
                                <TextField
                                    autoComplete="lastName"
                                    name="lastName"
                                    required
                                    fullWidth
                                    id="lastName"
                                    placeholder="Doe"
                                    value={lastName}
                                    onChange={handleChangeLastName}
                                    error={lastNameError}
                                    helperText={
                                        !lastNameError
                                            ? '\u00A0'
                                            : 'Please enter your last name'
                                    }
                                />
                            </FormControl>
                        </Stack>

                        {/* Email input field */}
                        <FormControl>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                placeholder="name@company.com"
                                value={email}
                                name="email"
                                autoComplete="email"
                                variant="outlined"
                                error={emailError}
                                onChange={handleChangeEmail}
                                onBlur={handleBlurEmail}
                                helperText={
                                    !emailError
                                        ? ''
                                        : 'Please enter a valid email'
                                }
                            />
                        </FormControl>

                        {/* Password input field */}
                        <FormControl>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                placeholder="••••••••"
                                value={password}
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                autoComplete="new-password"
                                variant="outlined"
                                error={passwordError}
                                onChange={handleChangePassword}
                                onBlur={handleBlurPassword}
                                helperText={
                                    !passwordError
                                        ? ''
                                        : 'Please enter a valid password'
                                }
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment
                                            position="end"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Tooltip
                                                title={
                                                    <Box>
                                                        <Typography variant="body2">
                                                            Password must
                                                            contain:
                                                        </Typography>
                                                        <ul
                                                            style={{
                                                                paddingLeft:
                                                                    '25px',
                                                                margin: '2px',
                                                            }}
                                                        >
                                                            <li>
                                                                At least 8
                                                                characters
                                                            </li>
                                                            <li>
                                                                At least one
                                                                uppercase letter
                                                            </li>
                                                            <li>
                                                                At least one
                                                                lowercase letter
                                                            </li>
                                                            <li>
                                                                At least one
                                                                number
                                                            </li>
                                                            <li>
                                                                At least one
                                                                special
                                                                character
                                                            </li>
                                                        </ul>
                                                    </Box>
                                                }
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Box>
                                                    <InfoIcon color="action" />
                                                </Box>
                                            </Tooltip>
                                            <IconButton
                                                onClick={
                                                    togglePasswordVisibility
                                                }
                                                style={{
                                                    background: 'none',
                                                    border: 'none',
                                                }}
                                            >
                                                {showPassword ? (
                                                    <VisibilityOffIcon />
                                                ) : (
                                                    <VisibilityIcon />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </FormControl>

                        {/* Reenter password field */}
                        <FormControl>
                            <FormLabel htmlFor="reenterPassword">
                                Re-Enter Password
                            </FormLabel>
                            <TextField
                                required
                                fullWidth
                                name="reenterPassword"
                                placeholder="••••••••"
                                value={reenterPassword}
                                type={showPassword ? 'text' : 'password'}
                                id="reenterPassword"
                                autoComplete="new-password"
                                variant="outlined"
                                error={reenterPasswordError}
                                onChange={handleChangeReenterPassword}
                                helperText={reenterPassword && reenterPasswordError
                                    ? 'Passwords must match'
                                    : ''
                                }
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment
                                            position="end"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <IconButton
                                                onClick={
                                                    togglePasswordVisibility
                                                }
                                                style={{
                                                    background: 'none',
                                                    border: 'none',
                                                }}
                                            >
                                                {showPassword ? (
                                                    <VisibilityOffIcon />
                                                ) : (
                                                    <VisibilityIcon />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            {/* Submit user information */}
                        </FormControl>
                        {registrationError && <Alert severity='error'>{registrationError}</Alert>}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={onRegisterClick}
                        >
                            Register
                        </Button>
                    </Box>

                    <Divider>
                        <Typography sx={{ color: 'text.secondary' }}>
                            or
                        </Typography>
                    </Divider>

                    {/* Google SSO */}
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
                            onClick={() => alert('Sign up with Google')}
                            startIcon={<GoogleIcon />}
                        >
                            Sign up with Google
                        </Button>

                        {/* Microsoft SSO */}
                        <Button
                            fullWidth
                            variant="outlined"
                            onClick={() => alert('Sign in with Microsoft')}
                            startIcon={<MicrosoftIcon />}
                        >
                            Sign up with Microsoft
                        </Button>

                        {/* Navigate to sign up page */}
                        <Typography sx={{ textAlign: 'center' }}>
                            Already have an account?{' '}
                            <span
                                onClick={navigateToSignIn}
                                style={{
                                    color: 'blue',
                                    cursor: 'pointer',
                                    textDecoration: 'underline',
                                }}
                            >
                                Sign in
                            </span>
                        </Typography>
                    </Box>
                </Card>
            </SignUpContainer>
        </AppTheme>
    );
}
