import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Grid';
import { Typography, Divider } from '@mui/material'

import SearchBar from "../search-bar/search-bar";
import {useTranslation} from "react-i18next";
import ProductCard from '../product-card/ProductCard';
import SpecialComponent from '../special-components/SpecialComponent';
import './mainPage.scss';


const Main = () => {
    let {t} = useTranslation()
    let specialProducts = [<SpecialComponent></SpecialComponent>,
    <SpecialComponent></SpecialComponent>,
    <SpecialComponent></SpecialComponent>,];

    let addedTodayProducts = [<ProductCard></ProductCard>,
    <ProductCard></ProductCard>,
    <ProductCard></ProductCard>,
    <ProductCard></ProductCard>,
    <ProductCard></ProductCard>,
    <ProductCard></ProductCard>,];

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
                >
                    <Grid item sm={7} className='popular-products'>
                        <Typography variant='h4' className='section-header'>
                           {t('Main.sections.popular')}
                        </Typography>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container={true}
                                spacing={2}
                                className='popular-products-grid'>

                                {addedTodayProducts.map((item, index) => {
                                    return <Grid item xs={12} sm={6} md={4}
                                        key={"products"+index}>{item}
                                    </Grid>
                                })}

                            </Grid>
                        </Box>

                        <Box sx={{ flexGrow: 1 }}
                            className='see-all'>
                            {t('Main.sections.all')} {/* TODO Show more products */}
                        </Box>

                        <Box sx={{ flexGrow: 1 }}>
                            <Divider orientation='horizontal'
                                className='horizontal-divider'></Divider>
                        </Box>

                        <Box sx={{ flexGrow: 1 }} className='added-today'>
                            <Typography variant='h4' className='section-header'>
                            {t('Main.sections.addedToday')}
                            </Typography>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container={true}
                                    spacing={2}
                                    className='added-today-products-grid'>

                                    {addedTodayProducts.map((item, index) => {
                                        return <Grid item xs={12} sm={6} md={4}
                                            key={"added-today-"+index}>{item}
                                        </Grid>
                                    })}

                                </Grid>
                            </Box>
                        </Box>


                    </Grid>

                    <Grid item sm={5} className='specials'>

                        <Typography variant='h4' className='section-header'>
                        {t('Main.sections.specials')}
                        </Typography>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container={true}
                                spacing={3}
                                className='specials-grid'>

                                <Grid item sm={12}>
                                    <Box className='specials-placeholder'>
                                        {specialProducts.map((item, index) => {
                                            return <Grid item xs={12} sm={6} md={4}
                                                key={"specials-"+index}>{item}
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