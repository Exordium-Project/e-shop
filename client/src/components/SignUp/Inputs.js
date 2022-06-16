import React from 'react'
import './SignUp.scss'
import { StyledEngineProvider, Grid, Box, TextField, Link, Button } from '@mui/material'

const Inputs = () => {
    return (
        <StyledEngineProvider injectFirst={true}>
                <Grid xs={7} md={7}>
                    <Box className='name-box'>
                        <TextField placeholder='First name' data-testid='firstName' />
                        <TextField placeholder='Last name' />
                    </Box>
                    <Box className='email-box'>
                        <TextField placeholder='Email' />
                    </Box>
                    <Box className='password-box'>
                        <TextField placeholder='Password' />
                    </Box>
                    <Box className='span-and-button'>
                        <span className='span'>By signing in you accepting Exordium Terms and Conditions <Link to='/'>Learn more</Link></span>
                        <Button className='button'>Create account</Button>
                    </Box>
                </Grid>
                
        </StyledEngineProvider>
    )
}

export default Inputs