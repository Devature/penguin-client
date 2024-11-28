// routes.tsx
import { createBrowserRouter } from 'react-router-dom';
import Index from './pages/Index';
import ApiTest from './pages/ApiTest';
import WorkIndex from './pages/WorkIndex';
import SignIn from './pages/SignIn'; //this imports the SignIn function from the SignIn.tsx file -- Aaron
import Layout from './components/Layout';  // Import the Layout component
import SignUp from './pages/SignUp';

//this gets used by app.tsx
export const router = createBrowserRouter([
    {
        //this uses this layout for all paths
        //we can modify this later if need be to provide diff layouts per path
        //any route that starts with / (ie. all of them) gets this layout logic
        path: '/',
        //element defines the layout to be used on specific paths
        element: <Layout />, // Use the Layout component here
        //these are the child paths and where to send them
        children: [
            { path: '/', element: <Index /> },
            { path: '/test', element: <ApiTest /> },
            { path: '/works', element: <WorkIndex /> },
            { path: '/signin', element: <SignIn /> },
            { path: '/register', element: <SignUp /> },
        ],
    },
]);