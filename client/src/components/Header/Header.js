import React from 'react'
import Logo from './Logo.png'
import { Typography, Button, MenuItem, FormControl, Select, InputLabel,Box, Grid, StyledEngineProvider } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import {useTranslation} from "react-i18next";
import { Link } from 'react-router-dom'
import './Styles/Header.scss'

const Header = () => {
  const { i18n,t } = useTranslation();
  const textDecorationObject = {
    textDecoration: 'none'
  }
  const languages = [
    {
      title: 'Language',
      options: [
        {value:"bg",text:'Български'}, 
        {value: "en",text: 'English'}
      ]
    }
  ]
  const onLanguageChange = (e)=>{
    i18n.changeLanguage(e.target.value)
  }

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
                <Typography className='pages'>{t("Navigation.toys")}</Typography>
                <span className='span'>{t("Navigation.trending")}</span>
              </Button>
            </Link>

          </Grid>

          <Grid item={true} xs={12} sm={2} md={1.5}>

            <Link to="/catalog" style={textDecorationObject}>
              <Button className='header-buttons'>
                <FilterListOutlinedIcon sx={{ color: 'black', fontSize: '1.7rem' }} />
                <Typography className='pages'>{t('Navigation.catalog')}</Typography>
              </Button>
            </Link>

          </Grid>

          <Grid item={true}  xs={12} sm={2} md={1.5}>

            <Link to="/brands" style={textDecorationObject}>
              <Button className='header-buttons'>
                <Typography className='pages'>{t('Navigation.brands')}</Typography>
              </Button>
            </Link>

          </Grid>

          <Grid item={true} xs={12} sm={2} md={1.5}>
            {
              languages.map((item,index) => {
                return (
                  <FormControl key={index+"formcontrol"} fullWidth className='languages'>
                        <InputLabel sx={{ color: 'black', width: '100%' }} className='input-label'><LanguageRoundedIcon />{item.title}</InputLabel>
                        <Select 
                        sx={{ height: '7.5rem', textAlign: 'center' }} 
                        onChange={onLanguageChange}
                        defaultValue="en">
                          {
                            item.options.map((item,index) => { return <MenuItem key={"language"+index} value={item.value}>{item.text}</MenuItem> })
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
              <Typography className='pages'>{t('Navigation.cart')}</Typography>
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
