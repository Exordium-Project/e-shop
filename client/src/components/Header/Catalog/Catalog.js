import React from 'react'
import { Box, ButtonGroup, Button, Typography} from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import SideBar from './SideBar'

const Catalog = () => {
  return (
    <div>
        <Box>
            <ButtonGroup>
                <Button sx={{width: '26.4rem', height: '4.3rem', border: '1px solid black', color: 'black', gap: '.5rem'}}>
                    <HomeOutlinedIcon style={{fontSize: '1.5rem'}}/>   
                    <Typography variant='paragraph' style={{textTransform: 'capitalize', fontSize: '1.1rem'}}>Main page</Typography>
                    <ArrowForwardIosIcon style={{fontSize: '.7rem'}}/>
                    <Typography variant='paragraph' style={{color: 'gray', textTransform: 'capitalize', fontSize: '1.1rem'}}>Catalog</Typography>
                </Button>
                <Button sx={{width: '22.05rem', height: '4.3rem', border: '1px solid black', color: 'black', gap: '.5rem'}}>
                    <CompareArrowsIcon style={{backgroundColor: 'rgba(29,30,31,1)', color: 'white', padding: '.3rem', fontSize: '2rem', borderRadius: '1rem'}}/>
                    <Typography variant='paragraph' style={{fontSize: '1rem', textTransform: 'capitalize', fontSize: '1.1rem'}}>Compare products</Typography>
                    <ArrowForwardIosIcon style={{marginLeft: '4rem', color: 'gray'}} />
                </Button>
                <Button sx={{width: '23.05rem', height: '4.3rem', border: '1px solid black', color: 'black', gap: '.5rem'}}>
                <FavoriteBorderIcon style={{backgroundColor: 'rgba(29,30,31,1)', color: 'white', padding: '.3rem', fontSize: '2rem', borderRadius: '1rem'}}/>
                    <Typography variant='paragraph' style={{fontSize: '1rem', textTransform: 'capitalize', fontSize: '1.1rem'}}>Wish List - Empty</Typography>
                    <ArrowForwardIosIcon style={{marginLeft: '4rem', color: 'gray'}} />
                </Button>
                <Button sx={{width: '24rem', height: '4.3rem', border: '1px solid black', color: 'black', gap: '.5rem'}}>
                    <ShoppingBagOutlinedIcon style={{backgroundColor: 'rgba(29,30,31,1)', color: 'white', padding: '.3rem', fontSize: '2rem', borderRadius: '1rem'}}/>
                      <Typography variant='paragraph' style={{fontSize: '1rem', textTransform: 'capitalize', fontSize: '1.1rem'}}>0 products - 0$</Typography>
                    <ArrowForwardIosIcon style={{marginLeft: '4.5rem', color: 'gray'}} />
                </Button>
            </ButtonGroup>
        </Box>

        <SideBar />
     </div>
  )
}

export default Catalog