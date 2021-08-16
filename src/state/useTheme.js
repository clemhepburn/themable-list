import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const styles = {
    light: `
      body {
        --background: #fffaf0;
        --text: #000000;
        background-color: var(--background);
        color: var(--text);
      }
    `,
    dark: `
      body { 
        --background: #000000;
        --text: #F3F3F3;
        
        background-color: var(--background);
        color: var(--text);
      }
    `
  };

  return <>
    <ThemeContext.Provider
      value={{ theme, setTheme }}
    >
      <style>
        {styles[theme]}
      </style>
      {children}
    </ThemeContext.Provider>
  </>;
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return { theme, setTheme };
};