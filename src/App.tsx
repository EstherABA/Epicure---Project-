import React from 'react';
import './App.css';
import HomePage from './components/Home Page/HomePage';
import {BrowserRouter, Route, Routes } from "react-router-dom"
import RestaurantPage from './components/RestaurantsPage/RestaurantsPage';
import ChefsPage from './components/ChefsPage/ChefsPage';
import SingleRestaurant from './components/SingleRestaurant/SingleRestaurant';

const App: React.FC= () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurants" element={<RestaurantPage />} />
        <Route path="/chefs" element={<ChefsPage />} />
        <Route path="/restaurants/:id" element={<SingleRestaurant />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;