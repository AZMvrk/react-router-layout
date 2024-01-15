import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ShaveMaster from './components/ShaveMaster';

import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [data, setData] = useState("i am data")

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home data={data}/>} />  {/* 👈 Renders at /app/ */}
        <Route path='/about' element={<About data={data}/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/shavemaster' element={<ShaveMaster />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;