import React, { useState } from 'react'
import './SignUp.scss'
import Logo from '../Header/Logo.png'
import { Box, StyledEngineProvider, Grid, Typography, Link, RadioGroup, Radio, FormControlLabel, FormControl } from '@mui/material'
import Inputs from './Inputs'

const SignUp = () => {
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const options = [
        {
            title: 'Create an account',
            option: ['Personal account', 'Business account']
        }
    ]
    return (
        <StyledEngineProvider injectFirst={true}>
            <Grid container={true} spacing={0}>
                <Grid xs={12} md={12}>
                    <Box className="left-and-right-header-side">
                        <Box className='left-side-header'>
                            <img src={Logo} alt="sign up logo" className='sign-up-img' />
                            <Typography className='left-side-text'><strong>All day store</strong></Typography>
                        </Box>
                        <Box className='right-side-header'>
                            <Typography>Already a member? <Link to='/user'>Sign in</Link></Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={12} md={12}>
                    {
                        options.map(item => {
                            return (
                                <Box sx={{ textAlign: 'center', mt: '2rem' }}>
                                    <Typography variant='h4'>{item.title}</Typography>
                                    <Box className='option-part'>
                                        {
                                            item.option.map(optionItem => {
                                                return (
                                                    <FormControl>
                                                        <RadioGroup onChange={handleChange} value={value}>
                                                            <FormControlLabel data-testid='radio-button' control={<Radio />} value={optionItem} label={optionItem} />
                                                        </RadioGroup>
                                                    </FormControl>
                                                )
                                            })
                                        }
                                    </Box>
                                </Box>
                            )
                        })
                    }
                </Grid>
                <Inputs />
            </Grid>
        </StyledEngineProvider>
    )
}

export default SignUp