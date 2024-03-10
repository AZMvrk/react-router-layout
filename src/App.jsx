import './App.css';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Media from './components/Media';

import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';


function App() {
  const [data, setData] = useState("Under Construction...")

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home data={data} />} />  {/* 👈 Renders at /app/ */}
        <Route path='/about' element={<About data={data} />} />
        <Route path='/gallery' element={<Gallery data={data} />} />
        <Route path='/media' element={<Media data={data} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;