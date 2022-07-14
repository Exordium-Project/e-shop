import React, { useState } from 'react'
import { Button, TextField, Box, StyledEngineProvider, Grid, Checkbox, FormControlLabel, Typography } from '@mui/material'
import './SignIn.scss'
import './Mobile-view.scss'
import LogoWithoutBackground from '../SignUp/Exordium.png'
import { useForm } from 'react-hook-form'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google'
import AppleIcon from '@mui/icons-material/Apple'
import ErrorSharpIcon from '@mui/icons-material/ErrorSharp';
import {Link} from 'react-router-dom'
import Axios from 'axios'

export default function SignIn() {
    const [show, setShow] = useState(false)
    const [loginMethod, setLoginMethod] = useState('')
    const [password, setPassword] = useState('')

    const { register, handleSubmit, formState: { errors } } = useForm()

    const login = () => {
        Axios.post('http://localhost:3004/api/users/login', {
            login: loginMethod,
            password: password
        })
        setShow(true)
    }

    return (
        <StyledEngineProvider injectFirst={true}>
            <Grid container={true} spacing={0}>
                <Grid xs={12} md={12}>
                    <Box className="signUp-header">
                        <Box className='left-side-header'>
                            <img src={LogoWithoutBackground} alt="sign up logo" className='sign-up-img' />
                            <Typography className='left-side-text'><strong>All day store</strong></Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={12} md={12}>
                    <Box className='login-form'>
                        <Box className='sign-in-header'>
                            <Typography variant='h4' sx={{ textAlign: 'center', textTransform: 'uppercase' }}><strong>Exordium</strong></Typography>
                            <Typography>Sign in to Exordium or <Link to='/sign' sx={{ cursor: 'pointer' }}>create an account</Link></Typography>
                        </Box>
                        <Box component="form" noValidate sx={{ mt: 1 }} className='login-form-styles'>
                            <Box className='span-class' sx={{ visibility: errors?.email ? 'visible' : 'hidden' }}>
                                <ErrorSharpIcon />
                                <Typography onClick={handleSubmit(login)}>
                                    Ouch, that's not a match.
                                </Typography>
                            </Box>
                            <TextField margin="normal" fullWidth id="email" placeholder='Email or username' name="email"
                                autoComplete="email" autoFocus 
                                {...register('email', { required: 'Enter email or username to continue' })}
                                error={!!errors?.email}
                                inputRef={{'data-testid' : 'firstName'}}
                                onChange={(event) => setLoginMethod(event.target.value)}
                            />
                            {  show ?  <TextField type="password"
                                placeholder='Password'
                                {...register('password', {
                                    required: 'This field is required', pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                                        message: 'Password should be at least 8 characters long'
                                    }
                                })}
                                error={!!errors?.password}
                                helperText={errors?.password ? errors.password.message : null}
                                onChange={(event) => setPassword(event.target.value)}
                            /> : null }

                            <Box className='button-class'>
                                <button className='log-in-account-button' onClick={handleSubmit(login)}>Continue</button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={12} md={12}>
                    <Box className='horizontal-line-class'>
                        <Box className='horizontal-line'>
                            <Box className='horizontal-line-text'>or</Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={12} md={12}>
                    <Box className='icon-container'>
                        <Box className='buttons-group'>
                            <Button className='facebook-signUp'><FacebookRoundedIcon sx={{fontSize: '1.7rem'}}/> Facebook</Button>
                            <Button className='google-signUp'><GoogleIcon /> Continue with Google</Button>
                            <Button className='apple-signUp'><AppleIcon /> Continue with Apple</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={12} md={12}>
                    <Box className='footer'>
                        <Box className='check'>
                            <FormControlLabel control={<Checkbox />} label='Stay signed in' />
                            <Typography>By signing in you accept Exordium terms and conditions.</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </StyledEngineProvider>
    );
}