
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../views/Dashboard';
import Inbox from '../views/Inbox';
import DetailInbox from '../views/DetailInbox';
import Sent from '../views/Sent';
import NotFound from '../views/NotFound';

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
  // handle 404
  {
    path: '*',
    element: <NotFound/>,
  }
]);

export default router;