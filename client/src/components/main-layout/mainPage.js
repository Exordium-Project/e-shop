import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Grid';
import { Typography, Divider } from '@mui/material'

import SearchBar from "../search-bar/search-bar";
import './mainPage.scss';
import ProductCard from '../product-card/ProductCard';

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
            <Box sx={{ flexGrow: 1 }}
            className='products-and-specials-grid'>
            <Grid container 
                spacing={10}
                /* className='products-and-specials-grid' */>
                
                <Grid item sm={7} className='popular-products'> 
                    
                    <Typography variant='h4' className='section-header'>
                        Popular products
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}>
                    <Grid container={true}
                        spacing={2}
                        className='popular-products-grid'>
                    
                        <Grid item xs={12} sm={6} md={4}>
                            <ProductCard></ProductCard>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <ProductCard></ProductCard>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <ProductCard></ProductCard>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <ProductCard></ProductCard>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <ProductCard></ProductCard>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <ProductCard></ProductCard>
                        </Grid>

                    </Grid>
                    </Box>
                    
                    <Box sx={{ flexGrow: 1 }}
                        className='see-all'>
                        See all {/* TODO Show more products */}
                    </Box>

                    <Box sx={{ flexGrow: 1 }}>
                    <Divider orientation='horizontal'
                        className='horizontal-divider'></Divider>
                    </Box>

                    <Box sx={{ flexGrow: 1 }} className='added-today'>
                        <Typography variant='h4' className='section-header'>
                            Added Today
                        </Typography>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container={true}
                                spacing={2}
                                className='added-today-products-grid'>
                            
                                <Grid item xs={12} sm={6} md={4}>
                                    <ProductCard></ProductCard>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <ProductCard></ProductCard>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <ProductCard></ProductCard>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <ProductCard></ProductCard>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <ProductCard></ProductCard>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <ProductCard></ProductCard>
                                </Grid>

                            </Grid>
                        </Box>
                    </Box>
                    

                </Grid>
        
                <Grid item sm={5} className='specials'>
                    
                    <Typography variant='h4' className='section-header'>
                        Expordium Specials 
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}>
                    <Grid container={true}
                        spacing={3}
                        className='specials-grid'>

                            <Grid item sm={12}>
                                <Box className='specials-placeholder'>
                                     
                                </Box>
                            </Grid>
                            <Grid item sm={12}>
                                <Box className='specials-placeholder'>
                                     
                                </Box>
                            </Grid>

                    </Grid>
                    </Box>
                </Grid>
						 
            </Grid>
            </Box>
        
        
        
        </div>
    )
}

export default Main;