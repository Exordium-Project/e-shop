import React, { useEffect, useState } from 'react';
import ProductCard from '../product-card/ProductCard';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import '../main-layout/mainPage.scss';

const ProductList = () => {
    
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
            const products = response.data;
            getProducts(products);
        })
        .catch(error => console.error(`Error: ${error}`));
    }

    const productKeys = Object.values(products);
    const addedTodayProducts = productKeys.map( productData => 
         
        <ProductCard {...productData} /> );
     


    return (
        <div>
            <Grid container={true}
                spacing={2}
                className='popular-products-grid'>
                {addedTodayProducts.map((item, index) => {
                                    return <Grid item xs={12} sm={6} md={4}
                                        key={index}>{item}
                                    </Grid>
                                })} 

            </Grid>

        </div>
    );
}

export default ProductList;