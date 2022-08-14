import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import { Box, Grid, Typography, Divider } from '@mui/material'
import SearchBar from "../search-bar/search-bar";
import ProductCard from '../product-card/ProductCard';
import ProductList from '../product-list/ProductList';
import SpecialProductList from '../special-product-list/SpecialProductList';
import SpecialComponent from '../special-components/SpecialComponent';
import './mainPage.scss';
import axios from 'axios';

const Main = () => {
    const [products, getProducts] = useState('');

    const url = 'http://localhost:3004'; // change url when deploying
    const productURL = url + '/api/products';
    const categoryURL = url + '/api/types';

    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = () => {
        axios.get(productURL)
        .then ((response) => {
            getProducts(response.data);
        })
        .catch(error => console.error(`Error: ${error}`));
    }
    // I am leaving specialProducts and addedTodayProducts untill we have done task #46 'Create mock data sql/sequelize script'
    let specialProducts = [<SpecialComponent {...products[2]} />,
    <SpecialComponent {...products[4]} />,
    <SpecialComponent {...products[5]} /> ];

    let addedTodayProducts =  //There is no DB datetime column to sort Products by date hence addedTodayProducts
    [<ProductCard {...products[0]} />,
    <ProductCard {...products[1]} />,
    <ProductCard {...products[2]} />,
    <ProductCard {...products[3]} />,
    <ProductCard {...products[4]} />,
    <ProductCard {...products[5]} /> ];
    
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
                    spacing={10}>


                    <Grid item sm={7} className='popular-products'>

                        <Typography variant='h4' className='section-header'>
                            Popular products
                        </Typography>
                        <Box sx={{ flexGrow: 1 }}>
                            <ProductList />
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

                                    {addedTodayProducts.map((item, index) => {
                                        return <Grid item xs={12} sm={6} md={4}
                                            key={index}>{item}
                                        </Grid>
                                    })}

                                </Grid>
                            </Box>
                        </Box>


                    </Grid>

                    <Grid item sm={5} className='specials'>

                        <Typography variant='h4' className='section-header'>
                            Expordium Specials
                        </Typography>
                        <Box sx={{ flexGrow: 1 }}>
                            <SpecialProductList />
                            {/* <Grid container={true}
                                spacing={3}
                                className='specials-grid'>

                                <Grid item sm={12}>
                                    <Box className='specials-placeholder'>
                                        {specialProducts.map((item, index) => {
                                            return <Grid item xs={12} sm={6} md={4}
                                                key={index}>{item}
                                            </Grid>
                                        })}
                                    </Box>
                                </Grid>

                            </Grid> */}
                        </Box>
                    </Grid>

                </Grid>
            </Box>



        </div>
    )
}

export default Main;