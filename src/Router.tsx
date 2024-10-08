import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Chats from './pages/Chats';
import Chat from './pages/Chat';
import App from './App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'chats',
        element: <Chats />,
      },
      {
        path: 'chat/:roomId',
        element: <Chat />,
      },
    ],
  },
]);
