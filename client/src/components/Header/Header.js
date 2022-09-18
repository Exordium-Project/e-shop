import React, { useState, useEffect } from 'react';
import Logo from './Logo.png';
import { Typography, Button, MenuItem, FormControl, Select, InputLabel, Box, Grid, StyledEngineProvider } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import './Styles/Header.scss';

const Header = () => {
  const [username, setUsername] = useState("Sign Up");
  const [path, setPath] = useState('/sign');

  const { i18n, t } = useTranslation();
  const textDecorationObject = {
    textDecoration: 'none'
  }
  const languages = [
    {
      title: 'Language',
      options: [
        { value: "bg", text: 'Български' },
        { value: "en", text: 'English' }
      ]
    }
  ]
  const onLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value)
  }

  useEffect(() => {
    const initialValue = localStorage.getItem("username");
    if(initialValue) {
      const firstName = initialValue.split(' ')[0];
      setUsername(firstName);
      setPath('/user');
    }
  }, [])
  return (
    <StyledEngineProvider injectFirst={true}>
      <Box className='header-div'>
        <Grid container={true} spacing={0} component={'div'}>
          <Grid item={true} xs={12} md={3} component={'div'}>
            <Typography variant="h6" color="inherit" component={'div'} className='first-typography'>
              <Link to='/'><img src={Logo} alt="logo" className='img' /></Link>
              <Typography className='exordium-header-title' component={'div'}>
                EXORDIUM
                <Typography className='exordium-header-subtitle' component={'div'}>ALL DAY STORE</Typography>
              </Typography>
            </Typography>
          </Grid>
          <Grid item={true} xs={12} sm={2.4} md={1.8} component={'div'}>

            <Link to='/clothing' style={textDecorationObject}>
              <Button className='header-buttons'>
                <Typography className='pages' component={'span'}>{t("Navigation.clothing")}</Typography>
              </Button>
            </Link>

          </Grid>

          <Grid item={true} xs={12} sm={2.4} md={1.8} component={'div'}>

            <Link to="/tech" style={textDecorationObject}>
              <Button className='header-buttons'>
                <Typography className='pages' component={'span'}>{t('Navigation.tech')}</Typography>
              </Button>
            </Link>

          </Grid>


          <Grid item={true} xs={12} sm={2.4} md={1.8} component={'div'}>
            {
              languages.map((languageItem, index) => {
                return (
                  <FormControl key={index + "formcontrol"} fullWidth className='languages'>
                    <Typography sx={{ color: 'black', width: '100%' }} component={'span'} className='input-label'><LanguageRoundedIcon fontSize='small' />{languageItem.title}</Typography>
                    <Select
                      sx={{ height: '2.5rem', textAlign: 'center', width: '100.1%' }}
                      onChange={onLanguageChange}
                      defaultValue="en">
                      {
                        languageItem.options.map((optionItem, index) => { return <MenuItem key={"language" + index} value={optionItem.value}>{optionItem.text}</MenuItem> })
                      }
                    </Select>
                  </FormControl>
                )
              })
            }
          </Grid>

          <Grid item={true} xs={12} sm={2.4} md={1.8} component={'div'}>
               <Link to={path} style={textDecorationObject}>
                <Button className='header-buttons'><AccountCircleRoundedIcon color='disabled' fontSize='large' />
                  <Typography className='pages' component={'span'}>{username}</Typography>
                </Button>
              </Link>
          </Grid>

          <Grid item={true} xs={12} sm={2.4} md={1.8} component={'div'}>

            <Link to='/mybag' style={textDecorationObject}>
              <Button className='header-buttons'>
                <Typography className='pages' component={'span'}>{t('Navigation.cart')}</Typography>
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
