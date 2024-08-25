import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Account from './pages/Account';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/catalog"  element={<Catalog />} />
        <Route path="/account"  element={<Account />} />
        <Route path="/about"    element={<About />} />
        <Route path="*"         element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;