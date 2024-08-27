import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import style from '../styles/NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
    const themeContext = useContext(ThemeContext);
  
    if (!themeContext) {
      throw new Error('ThemeContext must be used within a ThemeProvider');
    }
  
    const { theme } = themeContext;

  return (
    <header className={`${style.header} ${theme === 'light' ? style.headerLight : style.headerDark}`}>
      <nav className={style.nav}>
        <div className={style.navLinks}>
          <Link to="/" className={`${style.link} ${theme === 'light' ? style.linkW : style.linkD}`}>
            Shop
          </Link>
          <Link to="/about" className={`${style.link} ${theme === 'light' ? style.linkW : style.linkD}`}>
            Brands
          </Link>
          <Link to="/" className={`${style.link} ${theme === 'light' ? style.linkW : style.linkD}`}>
            Guide
          </Link>
          <Link to="/about" className={`${style.link} ${theme === 'light' ? style.linkW : style.linkD}`}>
            About
          </Link>
          <Link to="/" className={`${style.link} ${theme === 'light' ? style.linkW : style.linkD}`}>
            SALE
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
