import { BookLikes, BookSearch } from '@/pages';
import { createBrowserRouter } from 'react-router';
import App from '../App';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: BookSearch },
      {
        path: '/likes',
        Component: BookLikes,
      },
    ],
  },
]);
