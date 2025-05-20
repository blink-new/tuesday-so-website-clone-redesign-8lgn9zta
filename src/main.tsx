import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pricing from './pages/Pricing';
import NotFound from './pages/NotFound';
import Demo from './pages/Demo';
import Comparison from './pages/Comparison';
import Affiliates from './pages/Affiliates';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/affiliates" element={<Affiliates />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);