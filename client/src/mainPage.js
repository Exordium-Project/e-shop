import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header/Header';
import Toys from './components/Header/Toys/Toys';
import Catalog from './components/Header/Catalog/Catalog';
import Brands from './components/Header/Brands/Brands'
import User from './components/Header/User-profile/UserProfile'
import MyBag from './components/Header/MyBag/MyBag'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Grid';

import SearchBar from "./components/search-bar/search-bar";
import './mainPage.scss';
import image from  "./Rectangle_669.png";
import ProductCard from './components/product-card/ProductCard';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';

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

            <Grid container>
                <Grid item sm={7}>
                    sm7
                    <Grid container>
                        <Grid item>
                            
                        </Grid>
                    </Grid>
                </Grid>
                    <div className='sm5'>
                    <Grid item sm={5}>
                        sm5
                    </Grid>
                    </div>
            </Grid>
        </div>
    )
}

export default Main;