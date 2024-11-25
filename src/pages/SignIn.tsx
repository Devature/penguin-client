import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
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
import { GoogleIcon, SitemarkIcon, MicrosoftIcon } from '../assets/CustomIcons';
import SvgPenguinWhiteWithTextTall from '../assets/penguins/penguin-white-with-text-tall.tsx'
import AppTheme from '../assets/template-themes/AppTheme';
import ColorModeSelect from '../assets/template-themes/ColorModeSelect';
import {useSignUpNavigation} from '../util/hooks/navigationUtilities.ts';
import axios from 'axios';
import { penguinApi } from '../util/axios.ts';
import { emailRegex, passwordRegex } from '../util/validationRegex.ts';


{/* We're grabbing the function for navigating to the signup page by calling the hook
    Hooks run during component rendering, returning a function that can be used to handle events
    This has to be done at the top level-- Aaron*/}
{/* This was working before, now it's broken -- fixed by moving this to the Sign In function for some reason? */}
{/*const navigateToSignUp = useSignUpNavigation(); */}

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

{/* This is imported into the router, so it's whats rendered when the signin.tsx page is navigated to */}
export default function SignIn(props: { disableCustomTheme?: boolean }) {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);


  // Call useSignUpNavigation inside the component to follow hook rules
  const navigateToSignUp = useSignUpNavigation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (emailError || passwordError) {
          return;
      }

      const data = new FormData(event.currentTarget);
  };

  const validateInputs = () => {
        const email = document.getElementById('email') as HTMLInputElement;
        const password = document.getElementById('password') as HTMLInputElement;

        let isValid;

        if (!email.value || !emailRegex.test(email.value)) {
          setEmailError(true);
          setEmailErrorMessage('Please enter a valid email address.');
          isValid = false;
        } else {
          setEmailError(false);
          setEmailErrorMessage('');
        }

        if (!password.value || !passwordRegex.test(password.value) ) {
          setPasswordError(true);
          setPasswordErrorMessage('Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.');
          isValid = false;
        } else {
          setPasswordError(false);
          setPasswordErrorMessage('');
        }

        (async () => {
            try {
                const response = await penguinApi.post('http://localhost:8080/api/v1/user/login',
                    {
                        'email': email.value,
                        'password': password.value
                    }
                );
                console.log('User validated successfully:', response.data);
                isValid = true;
            } catch (error) {
                console.error('Error validating user:', error);
                isValid = false;
            }
        })();

        return isValid;
    };


{/* This is the JSX returned when the sign in function is called */}
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <SignInContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          {/* <SitemarkIcon /> */}
          <Box sx = {{display: 'flex', justifyContent: 'flex-start', width:'100%', height: '7.5vh', marginLeft: '-30px'}}>
            <SvgPenguinWhiteWithTextTall  width = "20vh" />
          </Box>

          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Sign in
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
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <ForgotPassword open={open} handleClose={handleClose} />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={validateInputs}
            >
              Sign in
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
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
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
                style={{color:'blue', cursor: 'pointer'}}>
                Sign up
                </span>

            </Typography>
          </Box>
        </Card>
      </SignInContainer>
    </AppTheme>
  );
}
