import React from 'react'
import Logo from './Logo.png'
import { Typography, AppBar, Toolbar, IconButton, ButtonGroup, Button, MenuItem, FormControl, Select, InputLabel, Box } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';

import { Link } from 'react-router-dom'

 
const Header = () => {
  return(
    <Box>
        <AppBar position="static" sx={{ background: 'none' }}>
            <Toolbar variant="dense">
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              </IconButton>
              <Typography variant="h6" color="inherit" component="div" sx={{ bgcolor: 'rgba(29,30,31,1)', width: '40%', ml: '-2.7rem', height: '6.3rem'}}>

                <img src={Logo} style={{ borderRadius: '50%', height: '4.5rem', marginLeft: '5.9rem', marginTop: '0.7rem' }} />

                    <Typography sx={{ fontSize: '1.2rem', ml: '11rem', mt: '-4.4rem'}}>
                        EXORDIUM
                        <Typography sx={{color: 'rgb(122, 122, 122)', fontSize: '0.9rem'}}>ALL DAY STORE</Typography>
                    </Typography>
              </Typography>

                <ButtonGroup sx={{height: '6.3rem'}}>

                <Link to='/toys' style={{textDecoration: 'none'}}><Button sx={{width: '11rem', color: 'black',border: '1px solid black', fontSize: '1rem', height: '6.4rem'}}>Toys
                      <span style={{marginLeft: '10px', background: 'blue', color: 'white', borderRadius: '0.5rem', fontSize: '0.7rem', width: '30%'}}>hot</span>
                    </Button></Link>
                    <Link to='/catalog' style={{textDecoration: 'none'}}><Button sx={{width: '11rem', color: 'black', border: '1px solid black', fontSize: '1rem', height: '6.4rem'}}><FilterListOutlinedIcon fontSize="large"/> Catalog</Button></Link>
                    <Link to='/brands' style={{textDecoration: 'none'}}><Button sx={{width: '11rem', color: 'black', border: '1px solid black', fontSize: '1rem', height: '6.4rem'}}>Brands</Button></Link>

                    <FormControl fullWidth sx={{color: 'black', width: '12rem'}}>
                        <InputLabel sx={{mt: '1.4rem'}}><LanguageRoundedIcon /></InputLabel>  
                        <InputLabel sx={{mt: '1.3rem', ml: '2.7rem', fontSize: '1.2rem'}}>Language</InputLabel>
                          <Select sx={{height: '6.4rem', textAlign: 'center', fontSize: '1rem'}}>
                              <MenuItem value='ENG' sx={{mt: '-7px'}}>ENG</MenuItem>
                              <MenuItem value='BUL'>BUL</MenuItem>
                          </Select>
                    </FormControl>

                    <Link to='/user' style={{textDecoration: 'none'}}><Button sx={{width: '11rem', color: 'black', border: '1px solid black', fontSize: '1rem', height: '6.4rem'}}><AccountCircleRoundedIcon color='disabled' fontSize='large'/> Alexander</Button></Link>
                    <Link to='/mybag' style={{textDecoration: 'none'}}><Button sx={{width: '13rem',color: 'black',border: '1px solid black', mr: '-1.4rem', fontSize: '1rem',fontSize: '1rem', height: '6.4rem'}}>MY BAG <ShoppingCartOutlinedIcon fontSize='large'/></Button></Link>

                </ButtonGroup>
            </Toolbar>
        </AppBar>
     </Box>
  );
}

export default Header
