import React from 'react'
import Logo from './Logo.png'
import { Typography, Button, MenuItem, FormControl, Select, InputLabel,Box, Grid, StyledEngineProvider } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';

import { Link } from 'react-router-dom'
import './Styles/Header.scss'

const Header = () => {
  const textDecorationObject = {
    textDecoration: 'none'
  }
  const languages = [
    {
      title: 'Language',
      options: ['BULGARIAN', 'ENGLISH', 'GERMAN']
    }
  ]
  return (
    <StyledEngineProvider injectFirst={true}>
      <Box className='header-div'>
        <Grid container={true} spacing={0} >
          <Grid item={true} xs={12} md={3}>
            <Typography variant="h6" color="inherit" component="div" className='first-typography'>
              <Link to='/'><img src={Logo} className='img' /></Link>
              <Typography sx={{ fontSize: '1.5rem', ml: '11rem', mt: '-4.4rem', color: 'white' }}>
                EXORDIUM
                <Typography sx={{ color: 'rgb(122, 122, 122)', fontSize: '1.1rem' }}>ALL DAY STORE</Typography>
              </Typography>
            </Typography>
          </Grid>

          <Grid item={true} xs={12} sm={2} md={1.5}>

            <Link to='/toys' style={textDecorationObject}>
              <Button className='header-buttons'>
                <Typography className='pages'>Toys</Typography>
                <span className='span'>hot</span>
              </Button>
            </Link>

          </Grid>

          <Grid item={true} xs={12} sm={2} md={1.5}>

            <Link to="/catalog" style={textDecorationObject}>
              <Button className='header-buttons'>
                <FilterListOutlinedIcon sx={{ color: 'black', fontSize: '1.7rem' }} />
                <Typography className='pages'>Catalog</Typography>
              </Button>
            </Link>

          </Grid>

          <Grid item={true}  xs={12} sm={2} md={1.5}>

            <Link to="/brands" style={textDecorationObject}>
              <Button className='header-buttons'>
                <Typography className='pages'>Brands</Typography>
              </Button>
            </Link>

          </Grid>

          <Grid item={true} xs={12} sm={2} md={1.5}>
            {
              languages.map(item => {
                return (
                  <FormControl fullWidth className='languages'>
                        <InputLabel sx={{ color: 'black', width: '100%' }} className='input-label'><LanguageRoundedIcon />{item.title}</InputLabel>
                        <Select sx={{ height: '7.5rem', textAlign: 'center' }}>
                          {
                            item.options.map(item => { return <MenuItem value={item}>{item}</MenuItem> })
                          }
                        </Select>
                  </FormControl>
                )
              })
            }
          </Grid>

        <Grid item={true} xs={12} sm={2} md={1.5}>

          <Link to='/user' style={textDecorationObject}>
            <Button className='header-buttons'><AccountCircleRoundedIcon color='disabled' fontSize='large' />
              <Typography className='pages'>Alex</Typography>
            </Button></Link>

        </Grid>

        <Grid item={true} xs={12} sm={2} md={1.5}>

          <Link to='/mybag' style={textDecorationObject}>
            <Button className='header-buttons'>
              <Typography className='pages'>My Bag</Typography>
              <ShoppingCartOutlinedIcon fontSize='large' sx={{ color: 'black' }} />
            </Button>
          </Link>

        </Grid>
      </Grid>
    </Box>
  </StyledEngineProvider >
  );
}

export default Header
