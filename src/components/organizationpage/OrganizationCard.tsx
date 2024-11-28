import { Card as MuiCard, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import AppTheme from '../../assets/template-themes/AppTheme';

interface OrgProps {
  organizationName: string;
  organizationTitle: string;
  organizationURL: string;
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

export default function OrganizationCard({
  organizationName,
  organizationTitle,
  organizationURL,
}: OrgProps) {
    
  const goToOrgSite = () => {
    window.open(organizationURL);
  };

  return (
    <AppTheme>
      <Card
        sx={{
          padding: 3,
          maxWidth: 400,
          width: '100%',
          boxShadow: 3,
          textAlign: 'center',
        }}
      >
        {/* Display organization name */}
        <Typography
          component="h1"
          variant="h4"
          sx={{
            width: '100%',
            fontSize: 'clamp(2rem, 10vw, 2.15rem)',
            textAlign: 'center',
          }}
        >
          {organizationName}
        </Typography>

        {/* Display organization title */}
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
