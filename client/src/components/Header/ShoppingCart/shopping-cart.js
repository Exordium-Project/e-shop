import React from 'react';
import { useTranslation } from 'react-i18next';

const ShoppingCart = (props) => {
    const {t} = useTranslation();

    return (
        <h1>
            {t('ShoppingCart.heading')}
        </h1>
    )
}

export default ShoppingCart;