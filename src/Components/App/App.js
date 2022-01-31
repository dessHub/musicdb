import React, { Fragment, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Artists from '../Artists/Artists';

function App() {
  const [searchValue, setSearchValue] = useState('baby');
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar setSearchValue={setSearchValue} />

        <Routes>
          <Route path="/" element={<Home searchValue={searchValue} />} />
          <Route path="/artists/:id" element={<Artists />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}
export default App;
