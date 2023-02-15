import React from 'react';
import './App.css';
// import data from '../epicure.json';
import HomePage from './components/Home Page/HomePage';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import RestaurantPage from './components/RestaurantsPage/ResturantsPage';
import ChefsPage from './components/ChefsPage/ChefsPage';

const App: React.FC= () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurants" element={<RestaurantPage />} />
        <Route path="/chefs" element={<ChefsPage />} />
      </Routes>
    
    
    </BrowserRouter>
   
  )
}

export default App;