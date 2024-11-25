import React from 'react';
import { Box, Button, CssBaseline, Divider, FormLabel, FormControl, Link, TextField, Typography, Stack, Card as MuiCard, Tooltip, InputAdornment, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import AppTheme from '../assets/template-themes/AppTheme';
import { GoogleIcon, MicrosoftIcon } from '../assets/CustomIcons';
import InfoIcon from '@mui/icons-material/Info';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import SvgPenguinWhiteWithTextTall from '../assets/penguins/penguin-white-with-text-tall.tsx';
import { useSignInNavigation } from '../util/hooks/navigationUtilities.ts';

 {/* Styling for parent card */}
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

 {/* styling for sign up container */}
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

 {/* Checking functions to make sure all inputs are valid */}
export default function SignUp(props: { disableCustomTheme?: boolean }) {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [reenterPasswordError, setReenterPasswordError] = React.useState(false);
  const [reenterPasswordErrorMessage, setReenterPasswordErrorMessage] = React.useState('');
  const [firstNameError, setFirstNameError] = React.useState(false);
  const [firstNameErrorMessage, setFirstNameErrorMessage] = React.useState('');
  const [lastNameError, setLastNameError] = React.useState(false);
  const [lastNameErrorMessage, setLastNameErrorMessage] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const handlePasswordButton = () => {
    setShowPassword((prev) => !prev);
  };

  const validateInputs = () => {
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;
    const reenterPassword = document.getElementById('reenterPassword') as HTMLInputElement;
    const firstName = document.getElementById('firstName') as HTMLInputElement;
    const lastName = document.getElementById('lastName') as HTMLInputElement;

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[~`!@#$%^&*()\-_+={}\[\]|;:<>,./?]).{8,}$/;
    if (!passwordRegex.test(password.value)) {
      setPasswordError(true);
      setPasswordErrorMessage('Please enter a valid password.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    if (password.value != reenterPassword.value) {
        setReenterPasswordError(true);
        setReenterPasswordErrorMessage('Please re-enter the password.');
        isValid = false;
      } else {
        setReenterPasswordError(false);
        setReenterPasswordErrorMessage('');
      }

    if (!firstName.value || firstName.value.length < 1) {
      setFirstNameError(true);
      setFirstNameErrorMessage('First name is required.');
      isValid = false;
    } else {
      setFirstNameError(false);
      setFirstNameErrorMessage('');
    }

    if (!lastName.value || lastName.value.length < 1) {
        setLastNameError(true);
        setLastNameErrorMessage('Last name is required.');
        isValid = false;
      } else {
        setLastNameError(false);
        setLastNameErrorMessage('');
      }

    return isValid;
  };

   {/* Function for submitting user info to backend
    SHOULD CALL API */}
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (firstNameError || lastNameError || emailError || passwordError) {
      event.preventDefault();
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const navigateToSignIn = useSignInNavigation();

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <SignUpContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">

          {/* Ticket Penguin Icon */}
          <Box sx = {{display: 'flex', justifyContent: 'flex-start', width:'100%', height: '7.5vh', marginLeft: '-30px'}}>
            <SvgPenguinWhiteWithTextTall/>
          </Box>

          {/* Sign Up title*/}
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Sign up
          </Typography>

          {/* Form div */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <Stack component="div" direction="row" spacing={2}>

               {/* First name input field */}
                <FormControl>
                <FormLabel htmlFor="firstname">First Name</FormLabel>
                <TextField
                    autoComplete="firstName"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    placeholder="John"
                    error={firstNameError}
                    helperText={firstNameErrorMessage}
                />
                </FormControl>

                 {/* Last name input field */}
                <FormControl>
                <FormLabel htmlFor="lastname">Last Name</FormLabel>
                <TextField
                    autoComplete="lastName"
                    name="lastName"
                    required
                    fullWidth
                    id="lastName"
                    placeholder="Doe"
                    error={lastNameError}
                    helperText={lastNameErrorMessage}
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
                placeholder="johndoe@gmail.com"
                name="email"
                autoComplete="email"
                variant="outlined"
                error={emailError}
                helperText={emailErrorMessage}
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
                type={showPassword ? 'text' : 'password' }
                id="password"
                autoComplete="new-password"
                variant="outlined"
                error={passwordError}
                helperText={passwordErrorMessage}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end"
                    style={{ display:'flex', alignItems:'center' }}>
                      <Tooltip 
                      title={
                        <Box>
                            <Typography variant='body2'>
                                Password must contain:
                            </Typography>
                            <ul style={{ paddingLeft:'25px', margin:'2px' }}>
                                <li>At least 8 characters</li>
                                <li>At least one uppercase letter</li>
                                <li>At least one lowercase letter</li>
                                <li>At least one number</li>
                                <li>At least one special character</li>
                            </ul>
                        </Box>
                      }
                      sx={{ display:'flex', alignItems:'center'}}>
                        <Box>
                          <InfoIcon color="action" />
                        </Box>
                      </Tooltip>
                      <IconButton onClick={handlePasswordButton}
                      style={{ background: 'none', border: 'none' }}>
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>

             {/* Reenter password field */}
            <FormControl>
              <FormLabel htmlFor="reenterPassword">Re-Enter Password</FormLabel>
              <TextField
                required
                fullWidth
                name="reenterPassword"
                placeholder="••••••••"
                type={showPassword ? 'text' : 'password'}
                id="reenterPassword"
                autoComplete="new-password"
                variant="outlined"
                error={reenterPasswordError}
                helperText={reenterPasswordErrorMessage}
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="end"
                      style={{ display:'flex', alignItems:'center' }}>
                        <IconButton onClick={handlePasswordButton}
                        style={{ background: 'none', border: 'none' }}>
                          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
              />

             {/* Submit user information */}
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={validateInputs}
            >
              Sign up
            </Button>
          </Box>

          <Divider>
            <Typography sx={{ color: 'text.secondary' }}>or</Typography>
          </Divider>

           {/* Google SSO */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
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
                style={{color:'blue', cursor: 'pointer', textDecoration: 'underline'}}>
                Sign in
              </span>
            </Typography>

          </Box>
        </Card>
      </SignUpContainer>
    </AppTheme>
  );
}