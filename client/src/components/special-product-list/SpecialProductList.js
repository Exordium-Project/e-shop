import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material'
import axios from 'axios';
import {useTranslation} from "react-i18next";
import SpecialComponent from '../special-components/SpecialComponent';
import '../main-layout/mainPage.scss';

const SpecialProductList = () => {
    const {t} = useTranslation()
    const [specialProducts, setSpecialProducts] = useState([]);

    const url = 'http://localhost:3004'; // change url when deploying
    const specialProductURL = `${url}/api/products/special-products`;

    useEffect(() => {
        getAllSpecialProducts();
    }, [])

    const getAllSpecialProducts = () => {
        axios.get(specialProductURL)
            .then((response) => {
                setSpecialProducts(response.data);
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    const specialProductKeys = Object.values(specialProducts);
    const specials = specialProductKeys.map( productData => 
         
        <SpecialComponent {...productData} /> );

    return (
        <div>
            <Grid container={true}
                spacing={3}
                className='specials-grid'>

                <Grid item sm={12}>
                    <Box className='specials-placeholder'>
                        {specials.map((item, index) => {
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