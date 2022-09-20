import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux'
import {useTranslation} from 'react-i18next';
import CartItem from './CartItem/cart-item';

import styles from './shopping-cart.module.scss';
import Summary from "./Summary/summary";

const ShoppingCart = () => {
    const {t} = useTranslation();

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
        <div className={styles.shoppingCart}>
            <div className={styles.productsContainer}>
                <h1>
                    {t('ShoppingCart.productsHeading')}
                </h1>
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
            </div>
            <div className={styles.summaryContainer}>
                <h1>
                    {t('ShoppingCart.summaryHeading')}
                </h1>
                <Summary productsPrice={productsPrice} deliveryPrice={29.99}/>
            </div>
        </div>
    );
}

export default ShoppingCart;