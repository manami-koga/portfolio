import React from 'react';
import './App.css';
import { Home } from './pages/Home';


import { Link, Route, Routes } from 'react-router-dom';
import { Page404 } from './pages/Page404';
import { Qualifications } from './pages/Qualification';
import { Works } from './pages/Works';
import { About } from './pages/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/qualifications" element={<Qualifications />} />
        <Route path="/works" element={<Works />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
