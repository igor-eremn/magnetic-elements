import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Account from './pages/Account';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import NavBar from './components/NavBar';
import './styles/App.css';

const App: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  
  if (!themeContext) {
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }
  
  const { theme } = themeContext;

  return (
    <div className={`page ${theme === 'light' ? 'backL' : 'backD'}`}>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/catalog"  element={<Catalog />} />
        <Route path="/account"  element={<Account />} />
        <Route path="/about"    element={<About />} />
        <Route path="*"         element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;