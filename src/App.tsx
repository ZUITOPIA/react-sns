/** @jsxImportSource @emotion/react */

import theme from './components/styles/theme';
import { ThemeProvider } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import { GlobalStyles } from './components/styles/GlobalStyles';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Outlet />
    </ThemeProvider>
  );
}
