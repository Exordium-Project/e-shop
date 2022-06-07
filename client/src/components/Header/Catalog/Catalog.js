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
        <Box className='catalog-styles'>
            <StyledEngineProvider injectFirst={true}>
                <Grid container={true} spacing={0}>
                    <Grid item={true} xl={3.45}>

                        <Button className='catalog-btns firstButtonWidth'>
                            <HomeOutlinedIcon style={{ fontSize: '1.5rem' }} />
                            <Typography variant='paragraph' className='catalog-typography'>Main page</Typography>
                            <ArrowForwardIosIcon style={{ fontSize: '.7rem' }} />
                            <Typography variant='paragraph' className='catalog-typography'>Catalog</Typography>
                        </Button>
                    </Grid>
                    <Grid xl={2.77}>
                        <Button className='catalog-btns secondButtonWidth'>
                            <CompareArrowsIcon className='catalog-icons' />
                            <Typography variant='paragraph' className='catalog-typography'>Compare Products</Typography>
                            <ArrowForwardIosIcon className='arrow-icon' />
                        </Button>
                    </Grid>
                    <Grid xl={2.76}>
                        <Button className='catalog-btns thirtButtonWidth'>
                            <FavoriteBorderIcon className='catalog-icons' />
                            <Typography variant='paragraph' className='catalog-typography'>Wish List - Empty</Typography>
                            <ArrowForwardIosIcon className='arrow-icon' />
                        </Button>
                    </Grid>
                    <Grid xl={1.9} lg={2} md={2} sm={2}>
                        <Button className='catalog-btns fourthButtonWidth'>
                            <ShoppingBagOutlinedIcon className='catalog-icons' />
                            <Typography variant='paragraph' className='catalog-typography'>0 products - 0$</Typography>
                            <ArrowForwardIosIcon className='arrow-icon' />
                        </Button>
                    </Grid>
                </Grid>
            </StyledEngineProvider>

            <SideBar />
        </Box>
    )
}

export default Catalog