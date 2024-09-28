import { createBrowserRouter } from 'react-router-dom';
import ApiTest from './pages/ApiTest';
import Index from './pages/Index';
import WorkIndex from './pages/WorkIndex';

export const router = createBrowserRouter([
    { path: '/', element: <Index /> },
    { path: '/test', element: <ApiTest /> },
    { path: '/works', element: <WorkIndex /> },
]);
