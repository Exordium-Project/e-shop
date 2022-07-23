import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Toys from './components/Header/Toys/Toys';
import Catalog from './components/Header/Catalog/Catalog';
import Brands from './components/Header/Brands/Brands';
import User from './components/Header/User-profile/UserProfile';
import MyBag from './components/Header/MyBag/MyBag';
import Main from './components/main-layout/mainPage';
import './components/main-layout/mainPage.scss';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import {en} from './i18n/en'
import {bg} from './i18n/bg'
i18n.use(Backend).use(initReactI18next).init({
    resources: {
        en: en,
        bg: bg
      },
      lng: "bg", 
      fallbackLng: "en",
  
      interpolation: {
        escapeValue: false
      }
})

function App() {
    
    return (
        <div className="App">
            <Header/>

            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/toys' element={<Toys/>}/>
                <Route path='/catalog' element={<Catalog/>}/>
                <Route path='/brands' element={<Brands/>}/>
                <Route path='/user' element={<User/>}/>
                <Route path='/mybag' element={<MyBag/>}/>
                <Route path='/sign' element={<SignUp />} />
                <Route path='/login' element={<SignIn />} />
            </Routes>

        </div>
    );
}
export default App;
