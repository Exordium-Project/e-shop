import React from 'react'
import Logo from '../Logo.png'
import { Typography, Box, Grid, StyledEngineProvider, Button } from '@mui/material';
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
          <Grid item={true} xs={12} md={3} className='grid' >
            <Typography variant="h6" color="inherit" component="div" className='first-typography'>
              <Link to='/'><img src={Logo} alt="logo" className='img' /></Link>
              <Typography className='exordium-header-title'>
                EXORDIUM
                <Typography className='exordium-header-subtitle'>ALL DAY STORE</Typography>
              </Typography>
            </Typography>
          </Grid>
          <Grid item={true} xs={12} sm={2} md={3}>
          <Button className='buttonDecoration' href="/team">{t("Footer.team")}</Button>
          </Grid>
          <Grid item={true} xs={12} sm={5} md={3}>
          <Button className='buttonDecoration' target="_blank"  href="https://discord.gg/FdHFU3Mm6a">{t("Footer.join")}</Button>
          </Grid>
          <Grid item={true} xs={12} sm={5} md={3}>
            <Typography color={'white'} fontFamily={'Montserrat'}>
            {t("Footer.copyright")}{" © "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </StyledEngineProvider >
  );
}

export default Footer
