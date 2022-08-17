import React from 'react';
import { Box, Typography, Button } from '@mui/material'
import "./product-card.scss"

const ProductCard = (props) => {
    return (
        <Box className='card'>
            <img src="http://www.foaminsulationni.com/images/placeholder/600x600.gif" alt="Image" className='productImage' />
            <Typography variant='h4' className="name">{props.name}</Typography>
            <Box className='productInfo'>
                <Typography>Sizes: (TODO?)</Typography>
                <Typography>Small Description:  </Typography>
                <Typography className="productPrice">{props.price}$</Typography>
            </Box>
            <Button className="button">+</Button>
        </Box>
    );
}

export default ProductCard;