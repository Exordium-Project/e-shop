import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { Box, Grid, Typography, Divider, IconButton, Button } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import DeliveryAccordion from './DeliveryAccordion';
import './product-page.scss';

const ProductPage = () => {
    const navigate = useNavigate();
    const id = useParams().productID;
    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState([]);

    const url = 'http://localhost:3004'; // change url when deploying
    const productInfoURL = `${url}/api/products/product-info/${id}`;
    const categoryURL = `${url}/api/types`;
    useEffect(() => {
        getProductInfo();
        getCategory();
    }, []);

    const getProductInfo = () => {
        axios.get(productInfoURL)
        .then ((response) => {
            const productArray = response.data;
            setProduct(productArray);
        })
        .catch(error => console.error(`Error: ${error}`));
    }

    const getCategory = () => {
        axios.get(categoryURL)
        .then ((response) => {
            const categoryArray = response.data;
            setCategory(categoryArray);
            
        })
        .catch(error => console.error(`Error: ${error}`));
    }

    function hasSizes(productCategory) {
        /* console.log('productCategory = ', productCategory ); */
        if (productCategory === 'clothes' || productCategory ===  'shoes') {
            return true;
        }
        else {
            return false;
        }
    }
    
    const productCategory = category[product.type_id-1]?.name;
    /* console.log('product', productCategory);
    console.log('func', hasSizes(productCategory)); */
    const images = [
        product.imageUrl,
        product.imageUrl,
        product.imageUrl,
        product.imageUrl,
        product.imageUrl
    ]
    const sizes = [ 38.5, 39, 39.5, 40, 40.5, 41, 42, 42.5, 43, 44, 45];

    return(
        <div className='product-page'>
            <Box className='back-banner'>
                <IconButton className='back-button'>
                    <KeyboardBackspaceIcon onClick={() => navigate(-1)} />
                </IconButton>
            </Box>

            <Box className='product'>
                <Grid container
                    spacing={5}>
                    <Grid item sm={8}>
                        <Box className='image-slider'>
                            <Box className='main-image-div'>
                                <Box component="img"
                                    className='main-product-image'
                                    alt="Image"
                                    src={images[0]}>
                                </Box>
                            </Box>

                            <Box className='slider'>
                                {images.map((image,i) => (
                                    <Box component="img"
                                        className='product-image-slider-wrap'
                                        key = {i}
                                        alt="Image"
                                        src={image}>
                                    </Box>
                                ))}
                            </Box>

                        </Box>
                    </Grid>

                    <Grid item sm={4}
                        className='product-details'>
                            <Box className='title-and-category-div'>
                                <Typography className='product-title'>
                                    {product.name}
                                </Typography>
                                <Typography className='product-category'>
                                    Men's Shoes
                                </Typography>
                            </Box>
                            <Box className='price-div'>
                                <Typography className='product-price'>
                                    USD {product.price}
                                </Typography>
                            </Box>
                            
                                
                            {hasSizes(productCategory) &&
                                <Box className='sizes-div'>
                                <Box className='sizes-text-div'>
                                    <Typography className='select-size-text'>
                                        Select Size
                                    </Typography>
                                    {/* add size guide later (clickable) */}
                                    {/* <Typography className='size-guide'>
                                        Size Guide
                                    </Typography> */}
                                </Box>
                                <Box className='product-size-select'>
                                    <Grid container 
                                        columnSpacing={1}
                                        rowSpacing={2}>
                                        {sizes.map((size) => {
                                            return <Grid item xs={4}>
                                                <Button className='product-size-button' variant="outlined">{size}</Button>
                                            </Grid>
                                        })}
                                    </Grid>

                                </Box>
                            </Box>  }

                            <Box className='add-to-cart-button-div'>
                                <Button className='add-to-cart-button' variant="contained"> Add To Cart </Button>
                            </Box>

                            <Box className='product-description-div'>
                                <Typography className='product-description'>
                                    {product.smallDescription}
                                </Typography>
                            </Box>

                            <Box className='product-details-div'>
                                <Typography className='product-details-bullet-points'>
                                    
                                    <li> Colour shown: {product.color}</li>
                                    
                                </Typography>
                            </Box>

                            <Divider orientation='horizontal'
                            className='horizontal-divider' />

                            <Box className='accordion-div'>
                                <DeliveryAccordion />
                            </Box>

                            <Divider orientation='horizontal'
                            className='horizontal-divide' />

                    </Grid>

                </Grid>
            </Box>
        </div>  
    );    
}

export default ProductPage