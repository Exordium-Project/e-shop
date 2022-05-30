import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header';
import Toys from './components/Header/Toys/Toys';
import Catalog from './components/Header/Catalog/Catalog';
import Brands from './components/Header/Brands/Brands'
import User from './components/Header/User-profile/UserProfile'
import MyBag from './components/Header/MyBag/MyBag'

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path='/toys' element={<Toys />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/brands' element={<Brands />} />
            <Route path='/user' element={<User />} />
            <Route path='/mybag' element={<MyBag />} />
         </Routes>

    </div>
  );
}

export default App;
