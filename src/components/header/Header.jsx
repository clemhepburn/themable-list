import React from 'react';
import { useTheme } from '../../state/useTheme';
import './Header.css';


export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="header">
      <p>Living Museum of Are.na Channels</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? '🌃' : '💡'} </button>

    </header>
  );
}
