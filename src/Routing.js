import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path=''element={}/>
        <Route path=''element={}/>
        <Route path=''element={}/> */}
    </Routes>
  );
}

export default Routing;
