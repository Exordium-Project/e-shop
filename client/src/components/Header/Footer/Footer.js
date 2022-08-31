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
      <Box className='header-div'  >
        
          <Grid  className='grid' >
            <Typography variant="h6" color="inherit" component="div" className='first-typography'>
              <Link to='/'><img src={Logo} alt="logo" className='img' /></Link>
              <Typography sx={{ fontSize: '1.5rem', ml: '11rem', mt: '-4.4rem', color: 'white' }}>
                EXORDIUM
                <Typography sx={{ color: 'rgb(122, 122, 122)', fontSize: '1.1rem' }}>ALL DAY STORE</Typography>
              </Typography>
              <Typography sx={{    fontSize: '1.1rem',color: 'white' }}>About us</Typography>
            </Typography>
            
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
