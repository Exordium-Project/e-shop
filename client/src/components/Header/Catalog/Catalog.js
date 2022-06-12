import React from 'react'
import { Box, Button, Typography, StyledEngineProvider, Grid } from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import SideBar from './SideBar'
import '../Styles/Catalog.scss'

const Catalog = () => {
    return (
            <StyledEngineProvider injectFirst={true}>
                <Box className='catalog-styles'>
                <Grid container={true} spacing={0}>
                    <Grid item={true} xs={3}>

                        <Button className='catalog-btns main-page-button'>
                            <HomeOutlinedIcon style={{ fontSize: '1.5rem' }} />
                            <Typography variant='paragraph' className='catalog-typography'>Main page</Typography>
                            <ArrowForwardIosIcon style={{ fontSize: '.7rem' }} />
                            <Typography variant='paragraph' className='catalog-typography'>Catalog</Typography>
                        </Button>
                    </Grid>
                    <Grid item={true} xs={3}>
                        <Button className='catalog-btns compare-products-button'>
                            <CompareArrowsIcon className='catalog-icons' />
                            <Typography variant='paragraph' className='catalog-typography'>Compare Products</Typography>
                            <ArrowForwardIosIcon className='arrow-icon' />
                        </Button>
                    </Grid>
                    <Grid item={true} xs={3}>
                        <Button className='catalog-btns wish-list-button'>
                            <FavoriteBorderIcon className='catalog-icons' />
                            <Typography variant='paragraph' className='catalog-typography'>Wish List - Empty</Typography>
                            <ArrowForwardIosIcon className='arrow-icon' />
                        </Button>
                    </Grid>
                    <Grid item={true} xs={3}>
                        <Button className='catalog-btns products-button'>
                            <ShoppingBagOutlinedIcon className='catalog-icons' />
                            <Typography variant='paragraph' className='catalog-typography'>0 products - 0$</Typography>
                            <ArrowForwardIosIcon className='arrow-icon' />
                        </Button>
                    </Grid>
                </Grid>
             </Box>
             <SideBar />
            </StyledEngineProvider>

    )
}

export default Catalog