import { createGlobalStyle } from 'styled-components';

export const CommonStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    line-height: 1.5;
  }

  body {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
`;

