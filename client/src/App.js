import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import {useLayoutEffect} from 'react';
import Header from './components/Header/Header';
import Clothing from './components/Header/Catalog/Clothing';
import Tech from './components/Header/Catalog/Tech';
import Footer from './components/Header/Footer/Footer';
import User from './components/Header/User-profile/UserProfile';
import Main from './components/main-layout/mainPage';
import './components/main-layout/mainPage.scss';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import { en } from './i18n/en'
import { bg } from './i18n/bg'
import ErrorPage from './components/Error/ErrorPage';
import TeamHistory from './components/Header/Team/TeamHistory';
import ShoppingCart from "./components/Header/ShoppingCart/shopping-cart";
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
        <div className="App" id="page-container">
          <Wrapper>
            <div id="content-wrap">
              
                <Header />

                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/clothing' element={<Clothing />} />
                    <Route path='/tech' element={<Tech />} />
                    <Route path='/team' element={<TeamHistory />} />
                    <Route path='/user' element={<User />} />
                    <Route path='/cart' element={<ShoppingCart />} />
                    <Route path='/sign' element={<SignUp />} />
                    <Route path='/login' element={<SignIn />} />
                    <Route path='*' element={<ErrorPage />} />
                    <Route path='/product/:productID' element={<ProductPage />} />
                </Routes>
            </div>
          <Footer id="footer" />
          </Wrapper>
        </div>
    );
}
export default App;
