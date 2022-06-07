import React from 'react'
import Logo from './Logo.png'
import { Typography, Button, MenuItem, FormControl, Select, InputLabel, Box, Grid, StyledEngineProvider } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';

import { Link } from 'react-router-dom'
<<<<<<< HEAD
import './Styles/Header.scss'

=======

 
>>>>>>> 80bd8980865b4f9179c4fb95dc3a1c4fc95ae16a
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

<<<<<<< HEAD
        </Grid>
      </StyledEngineProvider>
    </Box>
=======
                <ButtonGroup sx={{height: '6.3rem'}}>

                <Link to='/toys' style={{textDecoration: 'none'}}><Button sx={{width: '11rem', color: 'black',border: '1px solid black', fontSize: '1.2rem', height: '6.4rem', textTransform: 'capitalize'}}>Toys
                      <span style={{marginLeft: '10px', background: 'rgba(50,63,175,1)', borderRadius: '.5rem', color: 'white', width: '30%', textTransform: 'lowercase', fontSize: '.9rem'}}>hot</span>
                    </Button></Link>
                    <Link to='/catalog' style={{textDecoration: 'none'}}><Button sx={{width: '11rem', color: 'black', border: '1px solid black', fontSize: '1.2rem', height: '6.4rem', textTransform: 'capitalize', gap: '.5rem'}}><FilterListOutlinedIcon fontSize="large"/> Catalog</Button></Link>
                    <Link to='/brands' style={{textDecoration: 'none'}}><Button sx={{width: '11rem', color: 'black', border: '1px solid black', fontSize: '1.2rem', height: '6.4rem', textTransform: 'capitalize'}}>Brands</Button></Link>


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
                              <MenuItem value='GER'>GER</MenuItem>
                          </Select>
                    </FormControl>

                    <Link to='/user' style={{textDecoration: 'none'}}><Button sx={{width: '11rem', color: 'black', border: '1px solid black', fontSize: '1.2rem', height: '6.4rem', textTransform: 'capitalize'}}><AccountCircleRoundedIcon color='disabled' fontSize='large'/> Alexander</Button></Link>
                    <Link to='/mybag' style={{textDecoration: 'none'}}><Button sx={{width: '13rem',color: 'black',border: '1px solid black', mr: '-2rem', fontSize: '1rem',fontSize: '1rem', height: '6.4rem', gap: '.7rem'}}>MY BAG <ShoppingCartOutlinedIcon fontSize='large'/></Button></Link>
                </ButtonGroup>

                    <Link to='/user' style={{textDecoration: 'none'}}><Button sx={{width: '11rem', color: 'black', border: '1px solid black', fontSize: '1rem', height: '6.4rem'}}><AccountCircleRoundedIcon color='disabled' fontSize='large'/> Alexander</Button></Link>
                    <Link to='/mybag' style={{textDecoration: 'none'}}><Button sx={{width: '13rem',color: 'black',border: '1px solid black', mr: '-1.4rem', fontSize: '1rem',fontSize: '1rem', height: '6.4rem'}}>MY BAG <ShoppingCartOutlinedIcon fontSize='large'/></Button></Link>

                </ButtonGroup>
            </Toolbar>
          </AppBar>
        </Box>
>>>>>>> 80bd8980865b4f9179c4fb95dc3a1c4fc95ae16a
  );
}

export default Header
