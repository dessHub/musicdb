import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Artists from '../Artists/Artists';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}
export default App;
