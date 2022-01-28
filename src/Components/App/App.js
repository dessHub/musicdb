import React, { Fragment } from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';

function App() {
  return (
    <Fragment>
      <Navbar />

      <div className="container-fluid">Content</div>
    </Fragment>
  );
}
export default App;
