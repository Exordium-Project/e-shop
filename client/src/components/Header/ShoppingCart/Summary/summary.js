import React from 'react';
import {useTranslation} from 'react-i18next';

import styles from './summary.module.scss';
import {Button, StyledEngineProvider, Box, Typography} from "@mui/material";

const Summary = (props) => {
    const {t} = useTranslation();

    return (
        <div className={styles.summaryContainer}>
            <StyledEngineProvider injectFirst={true}>
                <Box className={styles.subtotalAndDelivery}>
                    <Box className={styles.summaryField}>
                        <Typography>{t('ShoppingCart.Summary.subtotalPriceLabel')}</Typography>
                        <Typography className={styles.priceText}>${props.productsPrice.toFixed(2)}</Typography>
                    </Box>
                    <Box className={styles.summaryField}>
                        <Typography>{t('ShoppingCart.Summary.deliveryPriceLabel')}</Typography>
                        <Typography className={styles.priceText}>${props.deliveryPrice.toFixed(2)}</Typography>
                    </Box>
                </Box>
                <div className={styles.total}>
                    <div className={styles.summaryField}>
                        <Typography>{t('ShoppingCart.Summary.totalPriceLabel')}</Typography>
                        <Typography className={styles.priceText}>${(props.productsPrice + props.deliveryPrice).toFixed(2)}</Typography>
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