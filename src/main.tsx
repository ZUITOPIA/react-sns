import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import { Global } from '@emotion/react';
import { GlobalStyles } from './components/styles/GlobalStyles';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Global styles={GlobalStyles} />
    <RouterProvider router={router} />
  </StrictMode>
);
