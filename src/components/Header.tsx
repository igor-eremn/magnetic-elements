import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import style from '../styles/Header.module.css';
import { Link } from 'react-router-dom';
import { Moon, Sun, ShoppingCart, CircleUser } from "lucide-react";

const Header: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <header className={`${style.header} ${theme === 'light' ? style.headerLight : style.headerDark}`}>
      <nav className={style.nav}>
        <Link to="/" className={`${style.logo} ${theme === 'light' ? style.logoL : style.logoD}`}>
          MAGNETIC ELEMENTS
        </Link>
        <div className={style.navLinks}>
          <Link to="/account" className={`${style.link} ${theme === 'light' ? style.linkW : style.linkD}`}>
            <CircleUser/>
          </Link>
          <button className={`${style.button} ${style.Cart} ${theme === 'light' ? style.btnLight : style.btnDark}`}>
            <ShoppingCart/> 0
          </button>
          <button onClick={toggleTheme} className={`${style.button} ${theme === 'light' ? style.btnLight : style.btnDark}`}>
            {theme === 'light' ? <Moon/> : <Sun/>}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
