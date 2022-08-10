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
import { Link } from 'react-router-dom'
import Axios from 'axios'

export default function SignIn() {
    const [show, setShow] = useState(false);
    const [loginMethod, setLoginMethod] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [isErrorPresent, setErrorPresent] = useState(false);
    const { register, control, formState: { errors }, handleSubmit } = useForm();
    const localHost = 'http://localhost:3004'

    const onSubmit = async () => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const usernameRegex = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
        if (!emailRegex.test(loginMethod)) {
            //Here is for username
            await Axios.get(`${localHost}/api/users/username/${loginMethod}`).then((response) => {
                setErrorPresent(false)
            }).catch(() => {
                setErrorPresent(true);
            })
        } else if(!usernameRegex.test(loginMethod)){
            //Here is for email
            await Axios.get(`${localHost}/api/users/email/${loginMethod}`).then((response) => {
                setErrorPresent(false)
            }).catch(() => {
                setErrorPresent(true)
            })
        }
        
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
                        <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit(onSubmit)} className='login-form-styles'>
                            {
                                isErrorPresent && (
                                    <Box className='span-class'>
                                        <ErrorSharpIcon />
                                        <Typography>
                                            Oops, that's not a match!
                                        </Typography>
                                    </Box>)
                            }
                            <TextField placeholder='Username or Email' fullWidth
                                type='text'
                                name='usernameOrEmail'
                                {...register('usernameOrEmail', { required: 'This field is required' })}
                                error={!!errors?.usernameOrEmail}
                                helperText={errors?.usernameOrEmail ? errors.usernameOrEmail.message : null}
                                inputProps={{ "data-testid": "username-input" }}
                                onChange={(event) => { setLoginMethod(event.target.value) }}
                            />
                            <TextField type="password"
                                placeholder='Password'
                                name='password'
                                {...register('password', {
                                    required: 'This field is required', pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                                        message: 'Password should be at least 8 characters long'
                                    }
                                })}
                                error={!!errors?.password}
                                helperText={errors?.password ? errors.password.message : null}
                                onChange={(event) => { setUserPassword(event.target.value) }}
                            />
                            {/* {
                                show ?  <TextField type="password"
                                placeholder='Password'
                                name='password'
                                {...register('password', {
                                    required: 'This field is required', pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                                        message: 'Password should be at least 8 characters long'
                                    }
                                })}
                                error={!!errors?.userPassword}
                                helperText={errors?.userPassword ? errors.userPassword.message : null}
                                onChange={(e) => {setUserPassword(e.target.value);}}
                            />  : null
                            } */}
                            <Box className='button-class'>
                                <Button className='log-in-account-button' type='submit'>Continue</Button>
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
                            <Button className='facebook-signUp'><FacebookRoundedIcon sx={{ fontSize: '1.7rem' }} /> Facebook</Button>
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