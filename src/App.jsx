/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import Chat from './pages/chat';

const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    font-family: Arial, sans-serif;
    overflow: hidden;
    scroll-behavior: smooth;
  }
`;

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Chat />
    </>
  );
}

export default App;
