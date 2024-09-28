import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Index() {
    return (
        <>
            <Typography variant="h1" component="div">
                Welcome to Penguin Tickets...
            </Typography>

            <Button component={Link} to={'/test'}>
                Test API
            </Button>

            <Button component={Link} to={'/works'}>
                Works Rest repository POC
            </Button>
        </>
    );
}
