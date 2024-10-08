import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import { Global } from '@emotion/react';
import { GlobalStyles } from './components/styles/GlobalStyles';
import { ThemeProvider } from '@emotion/react';
import theme from './components/styles/theme';
import { RecoilRoot } from 'recoil';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </RecoilRoot>
  </StrictMode>
);
