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

            <Grid container={true}
                spacing={2}>
                <div className='products-and-specials-grid'>
                    <div className='popular-products'>
                        <Grid item sm={7}> 
                            <div className='popular-products-h'>
                                <Typography variant='h4'>
                                    Popular products
                                </Typography>
                            </div>

                            <div className='product-grid'>
                                
                                <Grid container={true}
                                    spacing={2}>
                                
                                    <Grid item sm={4} xs={6}>
                                        <ProductCard></ProductCard>
                                    </Grid>

                                    <Grid item sm={4} xs={6}>
                                        <ProductCard></ProductCard>
                                    </Grid>

                                    <Grid item sm={4} xs={6}>
                                        <ProductCard></ProductCard>
                                    </Grid>

                                    <Grid item sm={4} xs={6}>
                                        <ProductCard></ProductCard>
                                    </Grid>

                                    <Grid item sm={4} xs={6}>
                                        <ProductCard></ProductCard>
                                    </Grid>

                                    <Grid item sm={4} xs={6}>
                                        <ProductCard></ProductCard>
                                    </Grid>

                                </Grid>
                            </div> 

                        </Grid>
                        <div className='specials'>
                        <Grid item sm={4}>
                            <div className='popular-products-h'>
                                <Typography variant='h4'>
                                    Expordium Specials
                                </Typography>
                            </div>

                            <div className='specials-grid'>
                                <Grid container={true}
                                    spacing={2}>

                                        <Grid item sm={12}>
                                            <Box>
                                                specials in grid test
                                            </Box>
                                        </Grid>
                                    </Grid>
                            </div>
                        </Grid>
                    </div>   

                    </div>

                    {/* <div className='specials'>
                        <Grid item sm={5}>
                            <div className='popular-products-h'>
                                <Typography variant='h4'>
                                    Expordium Specials
                                </Typography>
                            </div>

                            <div className='specials-grid'>
                                <Grid container={true}
                                    spacing={2}>

                                        <Grid item sm={12}>
                                            <Box>
                                                specials
                                            </Box>
                                        </Grid>
                                    </Grid>
                            </div>
                        </Grid>
                    </div> */}

                </div>

            </Grid>
        </div>
    )
}

export default Main;