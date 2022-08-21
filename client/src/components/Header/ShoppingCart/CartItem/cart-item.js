import React from 'react';
import { useTranslation } from "react-i18next";

import styles from './cart-item.module.scss';

const CartItem = (props) => {
    const { t } = useTranslation();

    return (
        <div className={styles.cartItem}>
            <div className={styles.imageContainer}>
                <img src={props.imageUrl}></img>
            </div>
            <div className={styles.infoContainer}>
                <b>{props.name}</b>
                <p>{props.type}</p>
                <p>{t('ShoppingCart.CartItem.sizeLabel')}{props.size}</p>
                <p>{t('ShoppingCart.CartItem.quantityLabel')}{props.quantity}</p>
            </div>
            <div className={styles.priceContainer}>
                BGN {props.price}
            </div>
        </div>
    );
}

export default CartItem;