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
import ErrorPage from './components/Error/ErrorPage';


function App() {

    return (
        <div className="App">
            <Header />

            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/toys' element={<Toys/>}/>
                <Route path='/catalog' element={<Catalog/>}/>
                <Route path='/brands' element={<Brands/>}/>
                <Route path='/user' element={<User/>}/>
                <Route path='/mybag' element={<MyBag/>}/>
                <Route path='/sign' element={<SignUp />} />
                <Route path='/login' element={<SignIn />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>

        </div>
    );
}
export default App;
