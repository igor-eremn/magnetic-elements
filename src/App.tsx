import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Account from './pages/Account';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Sidemenu from './components/Sidemenu';
import TopSeller from './components/TopSeller';
import NewArrivals from './components/NewArrivals';

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
      <div className='content-container'>
        <div className='sidemenu'>
          <Sidemenu />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className='home'>
                  <Home />
                </div>
                <div className='comp1'>
                  <TopSeller />
                </div>
                <div className='comp2'>
                  <NewArrivals />
                </div>
              </>
            }
          />
          <Route path="/catalog" element={<div className='home'><Catalog /></div>} />
          <Route path="/account" element={<div className='home'><Account /></div>} />
          <Route path="/about" element={<div className='home'><About /></div>} />
          <Route path="*" element={<div className='home'><NotFound /></div>} />
        </Routes>
      </div>
      <NavBar />
      <Header />
    </div>
  );
  
};

export default App;