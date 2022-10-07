import React, { useEffect, useState } from 'react';
import { Box, Typography, IconButton, Card, CardActionArea, Alert, Snackbar } from '@mui/material'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { productAdded, clothingProductAdded } from '../../features/cartSlice';
import SelectSize from './SelectSize';
import axios from 'axios';
import "./product-card.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductCard = (props) => {
    const [category, setCategory] = useState([]);
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState(false);

    const url = 'http://localhost:3004'; // change url when deploying
    const categoryURL = `${url}/api/types`;

    useEffect(() => {
        getCategory();
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    const closeAlert = () => {
        setAlert(false);
    }

    const getCategory = () => {
        axios.get(categoryURL)
            .then((response) => {
                const categoryArray = response.data;
                setCategory(categoryArray);

            })
            .catch(error => console.error(`Error: ${error}`));
    }

    const newTo = {
        pathname:`/product/${props.id}`
    } 
    const dispatch = useDispatch();
    const productCategory = category[props.typeId - 1]?.name;
     
    const addToCartClicked = () => {
        if (hasSizes(productCategory)){
            setOpen(true);
        } else {
            dispatch(
                productAdded({
                    id: props.id,
                    name: props.name,
                    imageUrl: props.image_url,
                    category: productCategory,
                    quantity: 1,
                    price: props.price
                })
            )
            setAlert(true)
        }
           
    }

    function hasSizes(productCategory) {
        if (productCategory === 'clothes' || productCategory === 'shoes') {
            return true;
        }
        else {
            return false;
        }
    }

    return (
        <Card className='card'>
            <CardActionArea component={Link} to={newTo}>
                <img src={props.image_url} alt="Image" className='productImage' />
            </CardActionArea> 
            <Typography fontSize=".8rem" className="name">{props.name}</Typography>
            <Box className='productInfo'>
                <Typography fontSize=".7rem">{props.small_description}</Typography>
            </Box>
               
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography className="productPrice">{props.price}$</Typography>
                <IconButton className="button" sx={{ color: 'white', backgroundColor: 'rgba(69,37,242,1)', alignSelf: 'end' }}
                    onClick={addToCartClicked}>
                    <AddShoppingCartIcon>
                    </AddShoppingCartIcon>
                </IconButton>
                {alert &&
                    <Snackbar open={alert} 
                        autoHideDuration={3000}
                        onClose={closeAlert}
                        >
                        <Alert variant="filled" severity="success">{props.name} has been added to your cart</Alert>
                    </Snackbar>
                    }
                <SelectSize 
                    product={props}
                    open={open}
                    onClose={handleClose}
                    setOffAlert={(alert) => setAlert(alert)} />
            </Box>

        </Card>
    );
}

export default ProductCard;