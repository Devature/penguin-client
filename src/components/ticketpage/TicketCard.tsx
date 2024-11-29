import { Card as MuiCard, Button, Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import AppTheme from '../../assets/template-themes/AppTheme';

interface TicketProps {
  ticketName: string;
  {/* This is an array of strings holding the issues to be turned into a list
      This data structure may have to be changed depending on how the data is handled on the backend*/}
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
          height: '50vh'
          boxShadow: 3,
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Display ticket name */}
        <Typography
          component="h1"
          variant="h4"
          sx={{
            width: '100%',
            fontSize: 'clamp(2rem, 10vw, 2.15rem)',
            textAlign: 'center',
          }}
        >
          {ticketName}
        </Typography>

            {/* This adds a horizontal line on the component to divide the sections -- Aaron */}
            <Divider />

        {/* Display ticket issues as a list */}
        <Typography
          component="h1"
          variant="h4"
          sx={{
            width: '100%',
            fontSize: 'clamp(1rem, 4vw, 1rem)',
            textAlign: 'center',
          }}
        >
          {organizationTitle}
        </Typography>

        {/* Button to navigate to the organization's site */}
        <Button
          fullWidth
          variant="contained"
          onClick={goToOrgSite}
          sx={{ justifyContent: 'center', alignItems: 'center' }}
        >
          Go To{' '}
          <span
            style={{
              fontWeight: 'bold',
              fontSize: '15px',
              marginLeft: '6px',
            }}
          >
            {organizationName}
          </span>
        </Button>
      </Card>
    </AppTheme>
  );
}
