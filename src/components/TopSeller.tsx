import React, { useContext } from 'react';
import styles from '../styles/Home.module.css';
import { ThemeContext } from '../context/ThemeContext';

const TopSeller: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }

  const { theme } = themeContext;

  return (
    <div className={`${styles.top_seller} ${theme === 'light' ? styles.light : styles.dark}`}>
      <h1>Top Seller Section</h1>
    </div>
  );
};

export default TopSeller;