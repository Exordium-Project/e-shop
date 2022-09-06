import React from 'react'
import Logo from '../Logo.png'
import { Typography,  Box, Grid, StyledEngineProvider } from '@mui/material';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'
import '../Styles/Footer.scss'

const Footer = () => {
  const { i18n, t } = useTranslation();
  const textDecorationObject = {
    textDecoration: 'none'
  }
  const onLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <StyledEngineProvider>
      <Box className='footer-div'  >
      <Grid container={true} spacing={1} className="grid-container" >
      <Grid item={true} xs={12} md={3}  className='grid' >
            <Typography variant="h6" color="inherit" component="div" className='first-typography'>
              <Link to='/'><img src={Logo} alt="logo" className='img' /></Link>
              <Typography sx={{ fontSize: '1.5rem', ml: '11rem', mt: '-3.6rem', color: 'white' }}>
                EXORDIUM
                <Typography sx={{ color: 'rgb(122, 122, 122)', fontSize: '1.1rem' }}>ALL DAY STORE</Typography>
              </Typography>
             
            </Typography>
           
          </Grid>
          <Grid item={true} xs={12} md={3}>
          <Link to='/team'><Typography sx={{    fontSize: '1.1rem',color: 'white' }} to='/team'>About us</Typography></Link>
          </Grid>
          {/* join discord logo */}
        </Grid>
         
         
      </Box>
      {/* <Grid item={true} xs={12} >
        <Link to='/team' style={textDecorationObject}>
          <Button className='header-buttons'>
            <CodeIcon />
            <Typography color="rgb(122, 122, 122)" className='pages' paddingLeft="10px">Team Developers</Typography>
          </Button>
        </Link>
      </Grid> */}
    </StyledEngineProvider >
  );
}

export default Footer
