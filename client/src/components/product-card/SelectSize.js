import React, { useEffect, useState } from 'react';
import {
    Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Select, MenuItem, StyledEngineProvider
} from '@mui/material'
import { useDispatch } from 'react-redux';
import { clothingProductAdded } from '../../features/cartSlice';
import axios from 'axios';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './select-size.scss'

const SelectSize = (props) => {
    const { product, open, onClose } = props;
    const [availableSizes, setAvailableSizes] = useState([]);
    const [category, setCategory] = useState([]);
    const [selectedSize, setSelectedSize] = useState('');
    const dispatch = useDispatch();

    const url = 'http://localhost:3004';
    const sizesURL = `${url}/api/sizes/size-info/${product.id}`;
    const categoryURL = `${url}/api/types`;

    useEffect(() => {
        getSizes();
        getCategory();
    }, []);

    const getSizes = () => {
        axios.get(sizesURL)
            .then((response) => {
                const sizesArray = response.data.sizes;
                setAvailableSizes(sizesArray);
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    const getCategory = () => {
        axios.get(categoryURL)
            .then((response) => {
                const categoryArray = response.data;
                setCategory(categoryArray);

            })
            .catch(error => console.error(`Error: ${error}`));
    }

    const productCategory = category[product.typeId - 1]?.name;

    const handleClose = () => {
        onClose(false);
    }

    const handleChange = (event) => {
        let sizeSelected = event.target.value;
        setSelectedSize(sizeSelected);
    }

    const confirmSize = () => {
        dispatch(
            clothingProductAdded({
                id: product.id,
                name: product.name,
                imageUrl: product.image_url,
                category: productCategory,
                quantity: 1,
                price: product.price,
                size: selectedSize
            })
        )
        onClose(false);
        props.setOffAlert(true);
    }
    return (
        <StyledEngineProvider injectFirst={true}>
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>Select a size first</DialogTitle>
            <Select
                className='select-size-dropdown'
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={selectedSize}
                onChange={handleChange}
                size="small"
                autoWidth
                variant='standard'
                IconComponent={(props) => (<ExpandMoreIcon {...props} />)}
            >
                {availableSizes.map((element, index) => {
                    let obj = Object.keys(element);
                    let size = obj[0];
                    let quantity = element[size];
                    if (quantity > 0) {
                        return <MenuItem value={size} >{size}</MenuItem>
                    }
                })}

            </Select>
            <DialogActions>
                <Button onClick={confirmSize}>Confirm</Button>
            </DialogActions>

        </Dialog>
        </StyledEngineProvider>
    );
}

export default SelectSize;