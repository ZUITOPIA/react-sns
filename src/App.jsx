/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import Chat from './pages/Chat';
import { GlobalStyles } from './components/styles/globalStyles';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Chat />
    </>
  );
}

export default App;
