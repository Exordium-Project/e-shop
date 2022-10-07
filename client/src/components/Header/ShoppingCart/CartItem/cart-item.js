import React, { useState, useEffect } from 'react';
import {useTranslation} from "react-i18next";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateSizeClothingProduct } from '../../../../features/cartSlice';
import styles from './cart-item.module.scss';
import {IconButton, Select, FormControl, MenuItem, Typography, Box, Divider} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CartItem = (props) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const [selectedSize, setSelectedSize] = useState(props.size);
    const [availableSizes, setAvailableSizes] = useState([]);

    const url = 'http://localhost:3004';
    const sizesURL = `${url}/api/sizes/size-info/${props.id}`;

    useEffect(() => {
        getSizes();
    }, []);

    const handleChange = (event) => {
        let oldSizeSelected= selectedSize;
        let newSizeSelected = event.target.value;
        setSelectedSize(newSizeSelected);
        console.log(`old ${oldSizeSelected}  new ${newSizeSelected}`);
        dispatch(
            updateSizeClothingProduct({
                id: props.id,
                oldSize: oldSizeSelected,
                newSize: newSizeSelected
            })
        )
    };

    const getSizes = () => {
        axios.get(sizesURL)
            .then((response) => {
                const sizesArray = response.data.sizes;
                setAvailableSizes(sizesArray);
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    return (
        <div className={styles.cartItem}>
            <div className={styles.imageContainer}>
                <img src={props.imageUrl}></img>
            </div>
            <Box className={styles.infoContainer}>
                <Typography >{props.name}</Typography>
                <Typography className={styles.categoryLabel}>{props.category}</Typography>
                <Box className={styles.sizeAndQuantity}>
                    {props.size &&
                        <Box className={styles.changeSize}>
                            <Typography className={styles.sizeLabel}>{t('ShoppingCart.CartItem.sizeLabel')}</Typography>
                                <Select
                                    className={styles.sizeSelect}
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={selectedSize}
                                    onChange={handleChange}
                                    size="small"
                                    variant='standard'
                                    IconComponent={(props) => (<ExpandMoreIcon {...props} />)}
                                >
                                {availableSizes.map((element, index) => {
                                        let obj = Object.keys(element);
                                        let size = obj[0];
                                        let quantity = element[size];
                                        if (quantity>0) {
                                            return <MenuItem value={size} >{size}</MenuItem>
                                        }
                                    })}
                                    
                                </Select>
                        </Box>
                        }
                    <Box className={styles.quantityContainer}>
                        <Typography mt={1} className={styles.quantityLabel}>{t('ShoppingCart.CartItem.quantityLabel')}</Typography>
                        <Box className={styles.changeQuantity}>
                            <IconButton onClick={props.onDecrease} className={styles.decreaseQuantityButton}>-</IconButton>
                            <Typography mt={1} className={styles.quantityLabel}>{props.quantity}</Typography>
                            <IconButton onClick={props.onIncrease} className={styles.increaseQuantityButton}>+</IconButton>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <div className={styles.priceContainer}>
                <Typography>${props.price}</Typography>
            </div>
            <Divider />
        </div>
    );
}

export default CartItem;