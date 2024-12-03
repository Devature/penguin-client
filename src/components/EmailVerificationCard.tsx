{/* Using an interface for the onresendemail function
    A function will have to be declared and passed to the card as a prop in the main page
    This function will contain the logic for what happens on clicking the resend verification button
    The arrow function syntax is -- () means it has no params, and => void means it returns nothing
    As well, the {onResendEmail}: EmailVerificationCardProps is taking the prop passed in and saving it to the
    onResendEmail variable

    The divider is currently spanning the whole card; this can be changed by removing the calc and the negative left margin
     -- Aaron */}

import React from 'react';
import {Card, CardContent, Typography, Button, Divider} from '@mui/material';


interface EmailVerificationCardProps {
    onResendEmail: () => void;
    };

const EmailVerificationCard = ({ onResendEmail }: EmailVerificationCardProps) => {
    return (
        <Card style={{width:'100%',
                        maxWidth: '50vw',
                        backgroundColor: '#ffffff',
                        boxShadow: 2}}>
            <CardContent sx={{padding: '16px'}}>
                <Typography variant="h4" align="center" color="black">
                    Please Verify Your Email
                </Typography>
                <Divider sx={{ borderWidth: 1, marginBottom: 2, width: 'calc(100% + 32px)', marginLeft: -2}} color="grey"/>
                <Typography variant="body1" align="center" color="black">
                    A verification link has been sent to your email. If you have not received the email, please press the resend button below.
                </Typography>
                <Button variant="contained" size="medium" style={{display: 'block', margin: '20px auto'}} onClick={onResendEmail}>
                    Resend Email
                </Button>
                </CardContent>
        </Card>
        );
    };

export default EmailVerificationCard;

