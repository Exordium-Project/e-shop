import React, {useEffect, useState} from 'react';
import { Box, Grid, Typography, Divider, TextField } from '@mui/material'
import { useSelector } from 'react-redux'
import {useTranslation} from 'react-i18next';
import CartItem from './CartItem/cart-item';
import { useDispatch } from 'react-redux';
import { clothingProductAdded, clothingProductRemoved, productRemoved, productAdded } from '../../../features/cartSlice';
import styles from './shopping-cart.module.scss';
import Summary from "./Summary/summary";
import useMediaQuery from "../../../utils/useMediaQuery";

const ShoppingCart = () => {
    const isDesktop = useMediaQuery('(min-width: 600px)');
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cartProducts);
    const productsArray = cart.productCartList;

    const updateProductsPrice = () => {
        setProductsPrice(products.reduce((previousValue, currentProduct) => {
            return previousValue + (currentProduct.price * currentProduct.quantity);
        }, 0))
    }

    const [products, setProducts] = useState(productsArray);

    const [productsPrice, setProductsPrice] = useState(0);

    useEffect(updateProductsPrice, [products]);

    const onIncreaseProductQuantity = (product) => {
        const productId = product.id;
        
        dispatch(
            clothingProductAdded({
                id: productId,
                size: product.size
            })
        )
        const updatedProducts = products.map((currentProduct) => {
            if (currentProduct.id === productId) {
                return {...currentProduct, quantity: currentProduct.quantity + 1};
            }

            return currentProduct;
        });

        setProducts(updatedProducts);
    }

    const onDecreaseProductQuantity = (product) => {
        const productId = product.id;
        dispatch (
            clothingProductRemoved({
                id: productId,
                size: product.size
            })
        )
        if(product.quantity < 2){
            setProducts(products.filter((filteredProduct) => {
                return filteredProduct.id !== productId;
            }));
            return;
        }


        let updatedProducts = products.map((currentProduct) => {
            if (currentProduct.id === productId) {
                return {...currentProduct, quantity: currentProduct.quantity - 1};
            }

            return currentProduct;
        });



        setProducts(updatedProducts);
    }

    return (
        <div className={styles.pageWrapper}>
            <Box className={styles.shoppingCartBox}>
                <Grid container
                    spacing={2}
                    className={styles.pageGridContainer}>
                    <Grid item md={8} sm={12}
                        className={styles.productsGridItem}>
                        <Box className={styles.productsContainer}>
                            <Typography variant='h4'>
                                {t('ShoppingCart.productsHeading')}
                            </Typography>
                            {products.map((product, index) => {
                                return (
                                    <CartItem
                                        {...product} key={index}
                                        onIncrease={() => {
                                            onIncreaseProductQuantity(product)
                                        }}
                                        onDecrease={() => {
                                            onDecreaseProductQuantity(product);
                                        }}
                                    />
                                );
                            })}
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={12}
                        className={styles.summaryGridItem}>
                            <Box className={styles.summaryContainer}>
                                <Typography variant='h4'>
                                    {t('ShoppingCart.summaryHeading')}
                                </Typography>
                                <Summary className={styles.summaryComponent} productsPrice={productsPrice} deliveryPrice={29.99}/>
                            </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default ShoppingCart;