// App.tsx
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from './util/theme';
import { router } from './routes';
import { AuthProvider } from './util/auth/AuthProvider';

function App() {
    return (
        <AuthProvider>
            <ThemeProvider theme={theme}>
            {/*uses the router from routes.tsx
              this gets styled using the Layout.tsx sheet */}

                <RouterProvider router={router} />
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;