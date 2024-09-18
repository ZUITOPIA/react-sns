/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const GlobalStyles = css`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
    font-weight: 400;
    font-style: normal;
  }
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    font-family: 'Pretendard-Regular';
    overflow: hidden;
    scroll-behavior: smooth;
  }
`;
