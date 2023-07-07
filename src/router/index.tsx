
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../views/Dashboard';
import Inbox from '../views/Inbox';
import DetailInbox from '../views/DetailInbox';
import Sent from '../views/Sent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/inbox',
    element: <Inbox />,
  },
  {
    path: '/inbox',
    element: <Inbox />,
  },
  {
    path: '/inbox/:id',
    element: <DetailInbox />,
  },
  {
    path: '/sent',
    element: <Sent />,
  },
]);

export default router;