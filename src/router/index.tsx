
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../views/Dashboard';
import Letter from '../views/Letter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/letter',
    element: <Letter />,
  }
]);

export default router;