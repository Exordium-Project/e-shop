import React from 'react';
import { Box, Typography, IconButton, Card, CardActionArea } from '@mui/material'
import { Link } from "react-router-dom";
import "./product-card.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductCard = (props) => {

    const newTo = {
        pathname:`/product/${props.id}`
    } 

    return (
        <Card className='card'>
            <CardActionArea component={Link} to={newTo}>
                <img src={props.image_url} alt="Image" className='productImage' />
            </CardActionArea> 
            <Typography fontSize=".8rem" className="name">{props.name}</Typography>
            <Box className='productInfo'>
                {/* <Typography>Sizes: (TODO?)</Typography> */}
                <Typography fontSize=".7rem">{props.small_description}</Typography>
            </Box>
               
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography className="productPrice">{props.price}$</Typography>
                <IconButton className="button" sx={{ color: 'white', backgroundColor: 'rgba(69,37,242,1)', alignSelf: 'end' }}>
                    <AddShoppingCartIcon>
                    </AddShoppingCartIcon>
                </IconButton>
            </Box>

        </Card>
    );
}

export default ProductCard;