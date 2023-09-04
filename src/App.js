// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Teoria from './pages/Teoria';
import Footer from './components/Footer';
import Header from './components/Header';
import { mainUrl, routes } from './routing/routes';
import Praktyka from './pages/Praktyka';
import Wsparcie from './pages/Wsparcie';
import './App.css'; // Dodano import arkusza styli

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={mainUrl} element={<Home />} />
          <Route path={routes.teoria} element={<Teoria />} />
          <Route path={routes.praktyka} element={<Praktyka />} />
          <Route path={routes.wsparcie} element={<Wsparcie />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
