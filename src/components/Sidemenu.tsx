import React, { useContext } from 'react';
import styles from '../styles/Sidemenu.module.css';
import { ThemeContext } from '../context/ThemeContext';

const Sidemenu: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }

  const { theme } = themeContext;

  return (
    <div className={`${styles.page} ${theme === 'light' ? styles.light : styles.dark}`}>
      <h1>Side Menu</h1>
    </div>
  );
};

export default Sidemenu;