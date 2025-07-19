import React from 'react';
import './App.css';
import { Home } from './pages/Home';


import { Link, Route, Routes } from 'react-router-dom';
import { About } from './pages/About';
import { Works } from './pages/Works';
import { Page404 } from './pages/Page404';

function App() {
  return (
    <div className="App">

    

     {/**ルートとコンポーネントの設定 */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path='/works' element={<Works/>}></Route>
        <Route path="*" element={<Page404/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
