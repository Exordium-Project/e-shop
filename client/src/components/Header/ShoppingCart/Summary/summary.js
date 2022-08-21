import React from 'react';
import {useTranslation} from 'react-i18next';

import styles from './summary.module.scss';
import {Button, StyledEngineProvider} from "@mui/material";

const Summary = (props) => {
    const {t} = useTranslation();

    return (
        <div className={styles.summaryContainer}>
            <StyledEngineProvider injectFirst={true}>
                <div className={styles.subtotalAndDelivery}>
                    <div className={styles.summaryField}>
                        <div>{t('ShoppingCart.Summary.subtotalPriceLabel')}</div>
                        <div className={styles.priceText}>${props.productsPrice}</div>
                    </div>
                    <div className={styles.summaryField}>
                        <div>{t('ShoppingCart.Summary.deliveryPriceLabel')}</div>
                        <div className={styles.priceText}>${props.deliveryPrice}</div>
                    </div>
                </div>
                <div className={styles.total}>
                    <div className={styles.summaryField}>
                        <div>{t('ShoppingCart.Summary.totalPriceLabel')}</div>
                        <b className={styles.priceText}>${props.productsPrice + props.deliveryPrice}</b>
                    </div>
                </div>
                <div className={styles.checkoutButtons}>
                    <Button className={styles.guestCheckoutButton} size={'large'}
                            variant={'outlined'}>{t('ShoppingCart.Summary.guestCheckoutButton')}</Button>
                    <Button className={styles.memberCheckoutButton} size={'large'}
                            variant={'outlined'}>{t('ShoppingCart.Summary.memberCheckoutButton')}</Button>
                </div>
            </StyledEngineProvider>
        </div>
    );
}

export default Summary;