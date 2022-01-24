import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Styles
import "./App.css"

//Views
import Home from './Views/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
