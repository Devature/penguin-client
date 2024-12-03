{/* This currently has a placeholder popup for the resend verification button
    Somebody will have to wire the API calls to send and resend verification emails -- Aaron*/}


import React from 'react';
import { Box } from '@mui/material';
import EmailVerificationCard from '../components/EmailVerificationCard';

const EmailVerificationPage = () => {
    const handleResendEmail = () => {
            window.alert("Verification Email sent! TODO: Implement call to backend!");
        };


    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="80vh"
            >

                <EmailVerificationCard onResendEmail={handleResendEmail} />

            </Box>

        );
    };

export default EmailVerificationPage;