import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { productAdded } from '../../features/cartSlice';
import axios from 'axios';
import { Box, Grid, Typography, Divider, IconButton, Button } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DeliveryAccordion from './DeliveryAccordion';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './product-page.scss';

const ProductPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const id = parseInt(useParams().productID);
    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState([]);
    const [productImages, setProductImages] = useState([]);
    const [msizes, setSizes] = useState([]);
    const [btnState, setBtnState] = useState([false]);

    const url = 'http://localhost:3004'; // change url when deploying
    const productInfoURL = `${url}/api/products/product-info/${id}`;
    const categoryURL = `${url}/api/types`;
    const imagesURL = `${url}/api/images/image-info/${id}`;
    const sizesURL = `${url}/api/sizes/size-info/${id}`;

    const sizeSelected = (size) => () =>
        setBtnState(size);
    
    const addToCartClicked = () => {
        if (hasSizes(productCategory)){
            dispatch(
                productAdded({
                    id: id,
                    category: productCategory,
                    productName: product.name,
                    quantity: 1,
                })
            )
        } else {
            dispatch(
                productAdded({
                    id: id,
                    
                    productName: product.name,
                    quantity: 1,
                })
            )
        }
    }

    useEffect(() => {
        getProductInfo();
        getCategory();
        getProductImages();
        getSizes();
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

    const getProductImages = () => {
        axios.get(imagesURL)
            .then((response) => {
                const imagesArray = response.data;
                setProductImages(imagesArray);
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    const getSizes = () => {
        axios.get(sizesURL)
            .then((response) => {
                const sizesArray = response.data.sizes;
                setSizes(sizesArray);
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    function hasSizes(productCategory) {
        if (productCategory === 'clothes' || productCategory ===  'shoes') {
            return true;
        }
        else {
            return false;
        }
    }
    
    const productCategory = category[product.typeId-1]?.name;
    
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
                    <Grid item lg={8} md={12}
                        className='product-image-grid'>
                        <Box className='image-slider'>
                            <CarouselProvider
                                className='carousel'
                                naturalSlideWidth={1}
                                naturalSlideHeight={1}
                                totalSlides={productImages.length}
                            >
                                <Box className='slider-and-buttons'>
                                    <Slider>
                                        {productImages.map((image, i) => (
                                            <Slide index={i}>
                                                <Box component="img"
                                                    className='product-image'
                                                    key={i}
                                                    alt="Image"
                                                    src={image.image_url}>
                                                </Box>
                                            </Slide>
                                        ))}
                                    </Slider>

                                    <IconButton as={ButtonBack} className='back-img'>
                                        <ArrowBackIosIcon />
                                    </IconButton>
                                    <IconButton as={ButtonNext} className='next-img'>
                                        <ArrowForwardIosIcon />
                                    </IconButton>
                                </Box>
                                
                            </CarouselProvider>

                        </Box>
                    </Grid>

                    <Grid item lg={4} md={12}
                        className='product-details-grid'>
                            <Box className='title-and-category-div'>
                                <Typography className='product-title'>
                                    {product.name}
                                </Typography>
                                <Typography className='product-category'>
                                    {productCategory}
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
                                        {t('ProductPage.selectSize')}
                                    </Typography>
                                </Box>
                                <Box className='product-size-select'>
                                    <Grid container 
                                        columnSpacing={1}
                                        rowSpacing={2}>
                                        {msizes.map((element,index) => {
                                            let obj = Object.keys(element);
                                            let size = obj[0];
                                            let quantity = element[size];
                                            let state = btnState.toString();
                                            if (quantity > 5) {
                                                return <Grid item xs={4}>
                                                    <Button className='product-size-button' variant="outlined" onClick={sizeSelected(size)}>
                                                        <Typography>
                                                            {size} {String(btnState === size)}
                                                        </Typography>
                                                    </Button>
                                                </Grid>
                                            } else if (quantity >= 1) {
                                                return <Grid item xs={4}>
                                                    <Button className='product-size-button-few-left' variant="outlined">
                                                        <Typography>
                                                            {size}
                                                        </Typography>
                                                        <Typography className='size-quantity'>{quantity} more left</Typography>
                                                    </Button>
                                                </Grid>                        
                                            } else {
                                                return <Grid item xs={4}>
                                                    <Button className='product-size-button-sold-out' variant="outlined" disabled>
                                                        <Typography>
                                                            {size}
                                                        </Typography>
                                                        <Typography className='size-quantity'>sold out</Typography>
                                                    </Button>
                                                </Grid>   
                                            }
                                            
                                        })}
                                    </Grid>

                                </Box>
                            </Box>  }

                            <Box className='add-to-cart-button-div'>
                            <Button className='add-to-cart-button' variant="contained" onClick={addToCartClicked}> {t('ProductPage.addToCart')} </Button>
                            </Box>

                            <Box className='product-description-div'>
                                <Typography className='product-description'>
                                    {product.small_description}
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