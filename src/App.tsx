/** @jsxImportSource @emotion/react */

import Chat from './pages/Chat.jsx';
import theme from './components/styles/theme.ts';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles } from './components/styles/GlobalStyles.ts';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Chat />
    </ThemeProvider>
  );
}
