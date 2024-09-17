/** @jsxImportSource @emotion/react */

import Chat from './pages/Chat';
import theme from './components/styles/theme';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles } from './components/styles/GlobalStyles';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Chat />
    </ThemeProvider>
  );
}
