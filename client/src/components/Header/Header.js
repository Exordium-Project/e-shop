import React from 'react'
import Logo from './Logo.png'
import { Typography, Button, MenuItem, FormControl, Select, InputLabel, Box, Grid, StyledEngineProvider } from '@mui/material';
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
  const languages = ['ENG', 'BUL', 'GER']
  return(
    <Box>
      <StyledEngineProvider injectFirst={true}>
        <Grid container={true} spacing={0} >

          <Grid item={true} xl={3.45} lg={3} md={3.36} sm={12} xs={12}>
            <Typography variant="h6" color="inherit" component="div" className='first-typography'>
              <img src={Logo} className='img' />
              <Typography sx={{ fontSize: '1.1rem', ml: '11rem', mt: '-4.4rem', color: 'white' }}>
                EXORDIUM
                <Typography sx={{ color: 'rgb(122, 122, 122)', fontSize: '0.9rem' }}>ALL DAY STORE</Typography>
              </Typography>
            </Typography>
          </Grid>

          <Grid item={true} >
            <Box className='header-div'>
              <Link to='/toys' style={textDecorationObject}>
                <Button>
                  <Typography className='pages'>Toys</Typography>
                  <span className='span'>hot</span>
                </Button>
              </Link>
            </Box>
          </Grid>

          <Grid item={true} lg={1.49} xl={1.37}>
            <Box className='header-div'>
              <Link to="/catalog" style={textDecorationObject}>
                <Button>
                  <FilterListOutlinedIcon fontSize='large' sx={{ color: 'black' }} />
                  <Typography className='pages'>Catalog</Typography>
                </Button>
              </Link>
            </Box>
          </Grid>

          <Grid item={true} lg={1.5} xl={1.37}>
            <Box className='header-div'>
              <Link to="/brands" style={textDecorationObject}>
                <Button>
                  <Typography className='pages'>Brands</Typography>
                </Button>
              </Link>
            </Box>
          </Grid>

          <Grid item={true}>
            <Box className='header-div'>
              <FormControl fullWidth className='languages'>
                <InputLabel sx={{ mt: '1.3rem' }} className='icon'><LanguageRoundedIcon /></InputLabel>
                <InputLabel className='input-label'>Language</InputLabel>
                <Select sx={{ height: '6.4rem', textAlign: 'center', fontSize: '1rem' }}>
                  {
                    languages.map(items => { return <MenuItem key="{language}">{items}</MenuItem> })
                  }
                </Select>
              </FormControl>
            </Box>
          </Grid>

          <Grid item={true}>
            <Box className='header-div'>
              <Link to='/user' style={textDecorationObject}>
                <Button className=''><AccountCircleRoundedIcon color='disabled' fontSize='large' />
                  <Typography className='pages'>Alexander</Typography>
                </Button></Link>
            </Box>
          </Grid>

          <Grid item={true}>
            <Box className='header-div'>
              <Link to='/mybag' style={textDecorationObject}>
                <Button className='bagBtn'>
                  <Typography className='pages'>My Bag</Typography>
                  <ShoppingCartOutlinedIcon fontSize='large' sx={{ color: 'black' }} />
                </Button>
              </Link>
            </Box>
          </Grid>

        </Grid>
      </StyledEngineProvider>
    </Box>
  );
}

export default Header