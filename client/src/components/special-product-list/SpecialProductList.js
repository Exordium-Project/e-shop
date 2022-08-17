import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material'
import axios from 'axios';
import {useTranslation} from "react-i18next";
import SpecialComponent from '../special-components/SpecialComponent';
import '../main-layout/mainPage.scss';

const SpecialProductList = () => {
    const {t} = useTranslation()
    const [products, setProducts] = useState([]);
    const url = 'http://localhost:3004'; // change url when deploying
    const productURL = `${url}/api/products`;

    useEffect(() => {
        getAllProducts();
    }, [])

    const getAllProducts = () => {
        axios.get(productURL)
        .then ((response) => {
            const products = response.data;
            setProducts(products);
        })
        .catch(error => console.error(`Error: ${error}`));
    }

    const productKeys = Object.values(products);
    const specialProducts = productKeys.map( productData => 
         
        <SpecialComponent {...productData} /> );

    return (
        <div>
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
        </div>
    );
}

export default SpecialProductList