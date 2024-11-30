import * as React from 'react';
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
import { useSignUpNavigation, useDashboardNavigation } from '../util/hooks/navigationUtilities.ts';
import { GoogleIcon } from '../components/icons/GoogleIcon.tsx';
import { MicrosoftIcon } from '../components/icons/MicrosoftIcon.tsx';
import PenguinIcon from '../assets/penguins/penguin-icon.tsx';
import { penguinApi } from '../util/axios.ts';
import { emailRegex, passwordRegex } from '../util/validationRegex.ts';
import { Alert } from '@mui/material';
import { AxiosError } from 'axios';

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

{/* This is imported into the router, so it's what's rendered when the SignIn.tsx page is navigated to */}
export default function SignIn(props: { disableCustomTheme?: boolean }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [signInError, setSignInError] = React.useState('');
  const [open, setOpen] = React.useState(false);


  // Call useSignUpNavigation inside the component to follow hook rules
  const navigateToSignUp = useSignUpNavigation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

// client side input validation for email and password
  const validateInputs = (): boolean => {
      let isValid = true;

      if (!email || !emailRegex.test(email)) {
          setEmailError(true);
          setEmailErrorMessage('Please enter a valid email address.');
          isValid = false;
      } else {
          setEmailError(false);
          setEmailErrorMessage('');
      }

      if (!password || !passwordRegex.test(password)) {
          setPasswordError(true);
          setPasswordErrorMessage(
              'Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.'
          );
          isValid = false;
      } else {
          setPasswordError(false);
          setPasswordErrorMessage('');
      }

      return isValid;
  };

// server site validation for email and password
    const attemptSignIn = async (): Promise<boolean> => {
        try {
            const response = await penguinApi.post('/api/v1/user/login',
                {
                    'email': email,
                    'password': password
                }
            );
            sessionStorage.setItem('token', response.data.token);
            return true;
        } catch (error) {
            console.error('Error validating user:', error);
            if (error instanceof AxiosError) {
                if (error.response && error.response.status === 401) setSignInError('Invalid email or password.');
                else if (error.response && error.response.status === 500) setSignInError('An internal server error occurred. Please try again.');
                else setSignInError('An unexpected error occurred. Please try again later.');
            } else setSignInError('An unexpected error occurred. Please try again later.');
            return false;
        }
    };

    const onSignInClick = () => {
        if (validateInputs()) {
            attemptSignIn()
                .then((isSuccess: boolean) => {
                    if (isSuccess) {
                        console.log("Success");
                        navigateHome();
                    } else {
                        console.error("Login unsuccessful");
                    }
                });
        }
    };


    const navigateHome = useDashboardNavigation();

{/* This is the JSX returned when the sign in function is called */}
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
                    onSubmit={(e) => e.preventDefault()}
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
                            helperText={emailErrorMessage}
                            id="email"
                            type="email"
                            name="email"
                            placeholder="name@company.com"
                            autoComplete="email"
                            autoFocus
                            required
                            fullWidth
                            variant="outlined"
                            color={emailError ? 'error' : 'primary'}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <TextField
                            error={passwordError}
                            helperText={passwordErrorMessage}
                            name="password"
                            placeholder="••••••••••••••"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            autoFocus
                            required
                            fullWidth
                            variant="outlined"
                            color={passwordError ? 'error' : 'primary'}
                            onChange={(e) => setPassword(e.currentTarget.value)}
                    />
                    </FormControl>
                    <FormControlLabel
                        control={
                            <Checkbox value="remember" color="primary" />
                        }
                        label="Remember me"
                    />
                    {signInError && <Alert severity="error">{signInError}</Alert>}
                    <ForgotPassword open={open} handleClose={handleClose} />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        onClick={onSignInClick}
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