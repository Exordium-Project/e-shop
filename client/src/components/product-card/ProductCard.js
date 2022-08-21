import React from 'react';
import { Box, Typography, Button } from '@mui/material'
import "./product-card.scss"
import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductCard = (props) => {
    return (
        <Box className='card'>
            <img src={props.imageUrl} alt="Image" className='productImage' />
            <Typography fontSize="13px" className="name">{props.name}</Typography>
            <Box className='productInfo'>
                {/* <Typography>Sizes: (TODO?)</Typography> */}
                <Typography fontSize="11px">{props.smallDescription}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography className="productPrice" fontSize="13px">{props.price}$</Typography>
                <IconButton className="button" sx={{ color: 'white', backgroundColor: 'rgba(69,37,242,1)', alignSelf: 'end' }}>
                    <AddShoppingCartIcon>
                    </AddShoppingCartIcon>
                </IconButton>
            </Box>

        </Box>
    );
}

export default ProductCard;