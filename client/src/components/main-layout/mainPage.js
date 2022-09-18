import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import { Box, Grid, Typography, Divider } from '@mui/material'
import axios from 'axios';
import {useTranslation} from "react-i18next";
import SearchBar from "../search-bar/search-bar";
import ProductCard from '../product-card/ProductCard';
import ProductList from '../product-list/ProductList';
import SpecialProductList from '../special-product-list/SpecialProductList';
import SpecialComponent from '../special-components/SpecialComponent';
import './mainPage.scss';

const Main = () => {
    const {t} = useTranslation()
    const [products, setProducts] = useState([]);
    const [addedToday, setAddedToday] = useState([]);

    const url = 'http://localhost:3004'; // change url when deploying
    const productURL = `${url}/api/products`;
    const addedTodayURL = `${url}/api/products/today`;

    useEffect(() => {
        getAllProducts();
        getAddedToday();
    }, []);

    const getAllProducts = () => {
        axios.get(productURL)
        .then ((response) => {
            setProducts(response.data);
        })
        .catch(error => console.error(`Error: ${error}`));
    }

    const getAddedToday = () => {
        axios.get(addedTodayURL)
            .then((response) => {
                const addedTodayArray = response.data;
                setAddedToday(addedTodayArray);
            })
            .catch(error => console.error(`Error: ${error}`));
    }
    const addedTodayKeys = Object.values(addedToday);
    const todayProducts = addedTodayKeys.map ( productData =>
        <ProductCard {...productData} /> );

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

                        <Typography fontSize="30px" fontFamily="Montserrat" className='section-header'>
                            {t('Main.sections.popular')}
                        </Typography>
                        <Box sx={{ flexGrow: 1 }}>
                            <ProductList />
                        </Box>

                        <Box sx={{ flexGrow: 1 }}
                            className='see-all'>
                                {t('Main.sections.all')} {/* TODO Show more products */}
                        </Box>

                        <Box sx={{ flexGrow: 1 }}>
                            <Divider orientation='horizontal'
                                className='horizontal-divider'></Divider>
                        </Box>

                        {addedToday.length ?
                        <Box sx={{ flexGrow: 1 }} className='added-today'>
                            <Typography fontSize="30px" fontFamily="Montserrat" className='section-header'>
                                {t('Main.sections.addedToday')}
                            </Typography>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container={true}
                                    spacing={2}
                                    className='added-today-products-grid'>

                                        {todayProducts.map((item, index) => {
                                        return <Grid item xs={12} sm={6} md={4}
                                            key={"added-today-"+index}>{item}
                                        </Grid>
                                    })}

                                </Grid>
                            </Box>
                        </Box>
                        : 
                            <Typography fontSize="30px" fontFamily="Montserrat" className='section-header'>
                                No new products today
                            </Typography>}

                    </Grid>
                                
                    <Grid item sm={5} className='specials'>

                        <Typography variant='h4' className='section-header'>
                            {t('Main.sections.specials')}
                        </Typography>
                        <Box sx={{ flexGrow: 1 }}>
                            <SpecialProductList />
                        </Box>
                    </Grid>

                </Grid>
            </Box>



        </div>
    )
}

export default Main;