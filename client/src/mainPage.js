import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header/Header';
import Toys from './components/Header/Toys/Toys';
import Catalog from './components/Header/Catalog/Catalog';
import Brands from './components/Header/Brands/Brands'
import User from './components/Header/User-profile/UserProfile'
import MyBag from './components/Header/MyBag/MyBag'
import Grid from '@mui/material/Grid';

import SearchBar from "./components/search-bar/search-bar";
import './mainPage.scss';
import image from  "./Rectangle_669.png";

const Main = () => {
    return (
        <div className='main'>
        
            <div className='search-background-image'>
                
                <div className='search-bar'>
                    <Grid container={true}
                        spacing={0}
                        justifyContent={"center"}>
                        
                        <Grid item={true} sm={9} xs={12}>
                            <SearchBar />
                        </Grid>

                    </Grid>
                        
                
                </div>    
            
            </div>
        
            <div className='popular-products'>
                <h1>Popular products</h1>
            </div>

        </div>
    )
}

export default Main;