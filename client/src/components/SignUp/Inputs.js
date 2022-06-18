import React from 'react'
import './SignUpStyles/Registration-inputs.scss'
import './SignUpStyles/Mobile-phone-view.scss'
import { StyledEngineProvider, Grid, Box, TextField, Link, Button } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { useForm } from 'react-hook-form'

const Inputs = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <StyledEngineProvider injectFirst={true}>
            <Grid xs={7} md={7}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box className='name-box'>
                        <TextField placeholder='First name' 
                            {...register('firstName', {required: 'Required field'})}
                            error={!!errors?.firstName}
                            helperText={errors?.firstName ? errors.firstName.message : null}
                        />
                        <TextField placeholder='Last name' 
                            {...register('lastName', {required: 'Required field'})}
                            error={!!errors?.lastName}
                            helperText={errors?.lastName ? errors.lastName.message : null}/>
                    </Box>
                    <Box className='email-box'>
                            <TextField placeholder='Email' {...register('email', {required: 'This field is required', pattern: { 
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,   
                            message: 'Invalid email address'}})}
                            error={!!errors?.email}
                            helperText={errors?.email ? errors.email.message : null}
                        />
                    </Box>
                    <Box className='password-box'>
                        <TextField placeholder='Password' type='password' />
                    </Box>

                    <Box className='span-and-button'>
                        <span className='tearms-and-conditions'>By signing in you accepting Exordium Terms and Conditions <Link to='#' sx={{cursor: 'pointer'}}>Learn more</Link></span>
                        <button className='button'>Create account</button>
                    </Box>
                </form>
                <Box className='vertical-line'>
                    <Box className='vertical-line-text'>or</Box>
                </Box>
            </Grid>
            <Grid xs={12} md={12}>
                <Box className='buttons-group'>
                    <Button className='facebook-signUp'><FacebookIcon className='facebook-icon' /> Facebook</Button>
                    <Button className='google-signUp'><GoogleIcon className='google-icon' /> Continue with Google</Button>
                    <Button className='apple-signUp'><AppleIcon className='apple-icon' /> Continue with Apple</Button>
                </Box>
            </Grid>
        </StyledEngineProvider>
    )
}

export default Inputs