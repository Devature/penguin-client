import { createBrowserRouter } from 'react-router-dom';
import ApiTest from './pages/ApiTest';
import Index from './pages/Index';
import WorkIndex from './pages/WorkIndex';
import SignIn from './pages/sign-in/SignIn';

export const router = createBrowserRouter([
    { path: '/', element: <Index /> },
    { path: '/test', element: <ApiTest /> },
    { path: '/works', element: <WorkIndex /> },
    // { path: '/login', element: <SignIn /> }
]);
