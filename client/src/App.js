import React, { Fragment } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import {useLayoutEffect} from 'react';
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
import {en} from './i18n/en';
import {bg} from './i18n/bg';
import ErrorPage from './components/Error/ErrorPage';
import TeamHistory from './components/Header/Team/TeamHistory';
import ProductPage from './components/product-page/ProductPage';
i18n.use(Backend).use(initReactI18next).init({
    resources: {
        en: en,
        bg: bg
      },
      lng: "en", 
      fallbackLng: "en",
  
      interpolation: {
        escapeValue: false
      }
})

const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  } 


function App() {
    
    return (
        <div className="App">
            <Wrapper>
                <Header/>

                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/toys' element={<Toys />} />
                    <Route path='/catalog' element={<Catalog />} />
                    <Route path='/brands' element={<Brands />} />
                    <Route path='/team' element={<TeamHistory />} />
                    <Route path='/user' element={<User />} />
                    <Route path='/mybag' element={<MyBag />} />
                    <Route path='/sign' element={<SignUp />} />
                    <Route path='/login' element={<SignIn />} />
                    <Route path='*' element={<ErrorPage />} />
                    <Route path='/product/:productID' element={<ProductPage />} />
                    
                    
                </Routes>
            </Wrapper>
        </div>
    );
}
export default App;
