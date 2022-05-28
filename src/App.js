import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Ucitaj from './routes/Ucitaj';
import Dodaj from './routes/Dodaj';
import Nav from './routes/Navigacija';
import Edit from './routes/Edit';
import FilterTable from './routes/FilterTable';



function App() {
  return (
   <BrowserRouter>
   <Nav />
      <Routes>
        <Route path='/Ucitaj' element={<Ucitaj/>} />
        <Route path='/Dodaj'element={<Dodaj/>} />
        <Route path='/Ucitaj/Edit/:EditID' element={<Edit />} />
        <Route path='/Pretrazivanje' element={<FilterTable />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;