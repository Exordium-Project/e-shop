import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { productAdded, clothingProductAdded } from '../../features/cartSlice';
import axios from 'axios';
import { Box, Grid, Typography, Divider, IconButton, Button, Snackbar, Alert } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
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
    const [btnSelectSize, setBtnSelectSize] = useState([false]);
    const [alertNoSize, setAlertNoSize] = useState(false);
    const [alertAdded, setAlertAdded] = useState(false);

    const url = 'http://localhost:3004'; // change url when deploying
    const productInfoURL = `${url}/api/products/product-info/${id}`;

    const sizeSelected = (size) => () =>
        setBtnSelectSize(size);

    const closeAlertAdded = () => {
        setAlertAdded(false);
    }

    const closeAlertNoSize = () => {
        setAlertNoSize(false);
    }

    const addToCartClicked = () => {
        if (hasSizes(productCategory)){
            while(!btnSelectSize[0]){
                setAlertNoSize(true);
                return;
            }
            dispatch(
                clothingProductAdded({
                    id: id,
                    name: product.name,
                    imageUrl: product.image_url,
                    category: productCategory,
                    quantity: 1,
                    price: product.price,
                    size: btnSelectSize
                })
            )
            setAlertAdded(true);
        } else {
            dispatch(
                productAdded({
                    id: id,
                    name: product.name,
                    imageUrl: product.image_url,
                    category: productCategory,
                    quantity: 1,
                    price: product.price
                })
            )
            setAlertAdded(true);
        }
    }

    useEffect(() => {
        getProductInfo();
    }, []);

    const getProductInfo = () => {
        axios.get(productInfoURL)
            .then((response) => {
                const productArray = response.data;
                setProduct(productArray);
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    function hasSizes(productCategory) {
        if (productCategory === 'clothing') {
            return true;
        }
        else {
            return false;
        }
    }

    const productCategory = product.category?.name;
    function ShowArrows() {
        if (product?.images?.length > 1) {
            return (
                <div>
                    <IconButton as={ButtonBack} className='back-img'>
                        <ArrowCircleLeftOutlinedIcon sx={{border: 'none'}}  />
                    </IconButton>
                    <IconButton as={ButtonNext} className='next-img'>
                        <ArrowCircleRightOutlinedIcon sx={{border: 'none'}}/>
                    </IconButton>
                </div>
            );
        }
    }

    return (
        product && <div className='product-page'>
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
                                totalSlides={product.images?.length}
                            >
                                <Box className='slider-and-buttons'>
                                    <Slider>
                                        {product.images?.map((image, i) => (
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
                                    <ShowArrows></ShowArrows>
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
                                            let state = btnSelectSize.toString();
                                            if (quantity > 5) {
                                                return <Grid item xs={4}>
                                                    <Button className='product-size-button' variant="outlined" onClick={sizeSelected(size)} >
                                                        <Typography>
                                                            {size} 
                                                        </Typography>
                                                    </Button>
                                                </Grid>
                                            } else if (element.quantity >= 1) {
                                                return <Grid item xs={4}>
                                                    <Button className='product-size-button-few-left' variant="outlined" onClick={sizeSelected(size)}>
                                                        <Typography>
                                                            {element.size}
                                                        </Typography>
                                                        <Typography className='size-quantity'>{element.quantity} more left</Typography>
                                                    </Button>
                                                </Grid>
                                            } else {
                                                return <Grid item xs={4}>
                                                    <Button className='product-size-button-sold-out' variant="outlined" disabled>
                                                        <Typography>
                                                            {element.size}
                                                        </Typography>
                                                        <Typography className='size-quantity'>sold out</Typography>
                                                    </Button>
                                                </Grid>
                                            }

                                        })}
                                    </Grid>

                                </Box>
                            </Box>}

                            <Box className='add-to-cart-button-div'>
                            <Button className='add-to-cart-button' variant="contained" onClick={addToCartClicked}> {t('ProductPage.addToCart')} </Button>
                            </Box>
                            {alertAdded &&
                                <Snackbar open={alertAdded}
                                    autoHideDuration={3000}
                                    onClose={closeAlertAdded}
                                >
                                    <Alert variant="filled" severity="success">{product.name} has been added to your cart</Alert>
                                </Snackbar>
                            }
                            {alertNoSize &&
                                <Snackbar open={alertNoSize}
                                    autoHideDuration={3000}
                                    onClose={closeAlertNoSize}
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                >
                                    <Alert variant="filled" severity="error">Choose size first</Alert>
                                </Snackbar>
                            }

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