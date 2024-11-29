{/*  TODO: Fetch ticket ID from backend and add TicketID to here */}

import { Card as MuiCard, Button, Typography, Divider, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import AppTheme from '../../assets/template-themes/AppTheme';

/* The issueList is a simple array of strings that will be turned into a bullet list
      This data structure may have to be changed depending on how the data is handled on the backend*/
interface TicketProps {
  ticketName: string;
  issueList: string[];
  issueDetails: string;
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

export default function TicketCard({
  ticketName,
  issueList,
  issueDetails,
}: TicketProps) {

  const goToOrgSite = () => {
    window.open(organizationURL);
  };

  return (
    <AppTheme>
      <Card
        sx={{
          padding: 2,
          maxWidth: '20vw',
          width: '100%',
          height: '75vh',
          boxShadow: 3,
          textAlign: 'center',
          justifyContent: 'center',
          display: 'flex', //allow the card to flex
          flexDirection: 'column', //items stacked vertically
        }}
      >
        {/* Display ticket name
            I can't get longer names like the third test ticket to properly shrink  -- Aaron*/}


        <Typography
          component="h1"
          variant="h4"
          sx={{
            maxWidth: '100%',
            fontSize: 'clamp(1rem, 8vw, 2rem)',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'clip',
          }}
        >
          {ticketName}
        </Typography>

        {/* TEST CODE -- TRANSFORMATION DIDN'T WORK, NOT SURE HOW TO PROPERLY SCALE THE TEXT -- AARON
        <Typography
                  component="h1"
                  variant="h4"
                  sx={{
                    maxWidth: '100%',
                    fontSize: '2rem',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'clip',
                    display: 'block',
                    margin: 0,
                    padding: 0,
                    transform: 'scale(1)', //trying to transform the text to fit
                    transformOrigin: 'center', //define where the scaling occurs from
                    transition: 'transform 0.2s ease-in-out',
                    '@media (max-width: 600px)': {
                        transform: 'scale(0.7)'
                        },
                  }}
                >
                  {ticketName}
                </Typography>
                */}

            {/* This adds a horizontal line on the component to divide the sections -- Aaron */}
            <Divider />
        {/* Display ticket issues as a list -- this is now a div to allow it to grow to the divider*/}
        <div
            style={{
                overflowY: 'auto', //this allows the list to scroll if it overflows -- do we want this?
                }}
        >
              <ul style ={{listStyleType: 'disc', paddingLeft: '10px', textAlign: 'left'}}>
              {/* Map the array to the list */}
                {issueList.map((issue, index) => (
                    <li key={index} style={{marginBottom: '5px'}}>
                        {issue}
                    </li>
                    ))}
              </ul>
        </div>


        {/* Divider for the 3rd section */}
        <Divider />


        {/* the first three attributes here are space separated, as this is how JSX props are passed
            We're encasing this in a div same as above*/}


        <div style={{ flexGrow: 1 }}>
            <Typography
                sx={{
                    marginBottom: 2,
                    wordWrap: 'break-word',
                    whiteSpace: 'pre-wrap',
                    textAlign: 'left',
                    }}
            >
                {issueDetails}
            </Typography>
        </div>
      </Card>
    </AppTheme>
  );
}
