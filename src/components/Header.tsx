import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import style from '../styles/Header.module.css';
import { Link } from 'react-router-dom';
import { Moon, Sun, ShoppingCart } from "lucide-react";

const Header: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <header className={`${style.header} ${theme === 'light' ? style.headerLight : style.headerDark}`}>
      <nav className={style.nav}>
        <Link to="/" className={style.logo}>
          Magnetic Elements
        </Link>
        <div className={style.navLinks}>
          <Link to="/" className={`${style.link} ${theme === 'light' ? style.linkW : style.linkD}`}>
            Home
          </Link>
          <Link to="/catalog" className={`${style.link} ${theme === 'light' ? style.linkW : style.linkD}`}>
            Catalog
          </Link>
          <Link to="/account" className={`${style.link} ${theme === 'light' ? style.linkW : style.linkD}`}>
            Account
          </Link>
          <Link to="/about" className={`${style.link} ${theme === 'light' ? style.linkW : style.linkD}`}>
            About
          </Link>
          <button onClick={toggleTheme} className={`${style.button} ${theme === 'light' ? style.btnLight : style.btnDark}`}>
            {theme === 'light' ? <Moon/> : <Sun/>}
          </button>
          <button className={`${style.button} ${style.Cart} ${theme === 'light' ? style.btnLight : style.btnDark}`}>
            <ShoppingCart/> 5
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
