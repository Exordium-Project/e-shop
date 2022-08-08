import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Grid';
import { Typography, Divider } from '@mui/material'
import SearchBar from "../search-bar/search-bar";
import ProductCard from '../product-card/ProductCard';
import ProductList from '../product-list/ProductList';
import SpecialComponent from '../special-components/SpecialComponent';
import './mainPage.scss';
import axios from 'axios';

const Main = () => {
    const [products, getProducts] = useState('');
    const [categories, getCategories] = useState('');

    const url = 'http://localhost:3004'; // change url when deploying
    const productURL = url + '/api/products';
    const categoryURL = url + '/api/types';

    let props = [];

    useEffect(() => {
        getAllProducts();
        getAllCategories();
    }, []);

    const getAllProducts = () => {
        axios.get(productURL)
        .then ((response) => {
            /* const products = response.data; */
            getProducts(response.data);
            /* console.log('products', products);
            console.log('products[0].name', products[0].name);
            props.push(products); */
        })
        .catch(error => console.error(`Error: ${error}`));
    }

    const getAllCategories = () => {
        axios.get(categoryURL)
        .then ((response) => {
            const categories = response.data;
            getCategories(categories);
            /* console.log('categories', categories);
            console.log('categories[0].name', categories[0].name);
            props.push(categories);
            console.log('props', props); */
        })
        .catch(error => console.error(`Error: ${error}`));
    }
    
    let specialProducts = [<SpecialComponent {...products[2]} />,
    <SpecialComponent {...products[4]} />,
    <SpecialComponent {...products[5]} /> ];

    let addedTodayProducts = 
    [<ProductCard {...products[0]} />,
    <ProductCard {...products[1]} />,
    <ProductCard {...products[2]} />,
    <ProductCard {...products[3]} />,
    <ProductCard {...products[4]} />,
    <ProductCard {...products[5]} /> ];

    Object.values(products).map(data => console.log(data));

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
                                        <ProductList />
                                    </Grid>
                                {/* {addedTodayProducts.map((item, index) => {
                                    return <Grid item xs={12} sm={6} md={4}
                                        key={index}>{item}
                                    </Grid>
                                })} */}

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
                            <Grid container={true}
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

                            </Grid>
                        </Box>
                    </Grid>

                </Grid>
            </Box>



        </div>
    )
}

export default Main;