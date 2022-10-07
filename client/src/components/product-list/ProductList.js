import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useTranslation} from "react-i18next";
import ProductCard from '../product-card/ProductCard';
import Grid from '@mui/material/Grid';
import '../main-layout/mainPage.scss';

const ProductList = () => {
    const {t} = useTranslation()
    const [products, setProducts] = useState([]);

    const url = 'http://localhost:3004'; // change url when deploying
    const productURL = `${url}/api/products`;

    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = () => {
        axios.get(productURL)
        .then ((response) => {
            const products = response.data;
            setProducts(products);
        })
        .catch(error => console.error(`Error: ${error}`));
    }

    const productKeys = Object.values(products);
    const addedTodayProducts = productKeys.map(productData =>
        <ProductCard {...productData} />);

    return (
        <div>
            <Grid container={true}
                spacing={2}
                className='popular-products-grid'>
                {addedTodayProducts.map((item, index) => {
                                    return <Grid item xs={12} sm={6} md={4}
                                        key={"products"+index}>{item}
                                    </Grid>
                                })} 

            </Grid>

        </div>
    );
}

export default ProductList;