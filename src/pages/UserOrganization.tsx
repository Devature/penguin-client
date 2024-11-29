import React, { useState } from 'react';
import {
    Box,
    Stack,
    Typography
} from '@mui/material';
import AppTheme from '../assets/template-themes/AppTheme';
import OrganizationCard from '../components/organizationpage/OrganizationCard';
import { useTicketPageNavigation } from '../util/hooks/navigationUtilities';

export default function UserOrganization(props: { disableCustomTheme?: boolean }) {

  return (
    <AppTheme {...props}>
        <Stack sx={{ margin: "20px", padding: "10px"}}>
            <Typography
            component="h1"
            variant="h4"
            sx={{
                width: '100%',
                fontSize: 'clamp(2rem, 10vw, 2.15rem)',
                textAlign: 'center',
            }}
            >
                Organizations
            </Typography>
            <Box sx={{ 
                display: 'grid', 
                gap:2, 
                padding:2,
            }}>
                <OrganizationCard 
                    organizationName={'Test Org'}
                    organizationTitle={'Caveman'}
                    organizationURL={'https://www.google.com'} 
                />
                <OrganizationCard 
                    organizationName={'Devature'} 
                    organizationTitle={'Software Developer'} 
                    organizationURL={'https://www.google.com'} 
                />
                <OrganizationCard 
                    organizationName={'Devature'} 
                    organizationTitle={'Software Developer'} 
                    organizationURL={'https://www.google.com'} 
                />
                <OrganizationCard 
                    organizationName={'Devature'} 
                    organizationTitle={'Software Developer'} 
                    organizationURL={'https://www.google.com'} 
                />
            </Box>
        </Stack>
    </AppTheme>
  );
}