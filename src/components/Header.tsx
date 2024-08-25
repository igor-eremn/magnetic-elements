// src/components/Header.tsx
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import style from '../styles/Header.module.css';

const Header: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <header className={`${style.header} ${theme === 'light' ? style.headerLight : style.headerDark}`}>
      <nav className={style.nav}>
        <h1>My Website</h1>
        <button onClick={toggleTheme} className={style.button}>
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
