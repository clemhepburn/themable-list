import React from 'react';
import { ThemeContext, ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Theme.js';
import { CommonStyles } from './Common.js';

function ThemeToggle() {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <CommonStyles />
        <button>Lightswitch</button>
      </>
    </ThemeProvider>
  );
}
