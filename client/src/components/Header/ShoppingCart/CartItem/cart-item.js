import React from 'react';
import {useTranslation} from "react-i18next";

import styles from './cart-item.module.scss';
import {IconButton} from "@mui/material";

const CartItem = (props) => {
    const {t} = useTranslation();

    return (
        <div className={styles.cartItem}>
            <div className={styles.imageContainer}>
                <img src={props.imageUrl}></img>
            </div>
            <div className={styles.infoContainer}>
                <b>{props.name}</b>
                <p>{props.type}</p>
                 {props.size &&
                    <p>{t('ShoppingCart.CartItem.sizeLabel')}{props.size}</p>
                    }
                {t('ShoppingCart.CartItem.quantityLabel')}
                <IconButton onClick={props.onDecrease} className={styles.decreaseQuantityButton}>-</IconButton>
                {props.quantity}
                <IconButton onClick={props.onIncrease} className={styles.increaseQuantityButton}>+</IconButton>
            </div>
            <div className={styles.priceContainer}>
                ${props.price}
            </div>
        </div>
    );
}

export default CartItem;