import React, {useState} from 'react';
import { Typography, TextField, Grid, Box, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import './SignUpStyles/Registration-inputs.scss'
import './SignUpStyles/Mobile-phone-view.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import Axios from 'axios';
import { Link, Navigate } from 'react-router-dom';

export default function SignUp() {
    const [isRegistrated, setIsRegistrated] = useState(false);

    const { register, handleSubmit, formState: { errors }, getValues } = useForm()
    const onSubmit = () => {
        Axios.post('http://localhost:3004/api/users/registration', {
            username: getValues('username'), email: getValues('email'),
            password: getValues('password'), full_name: getValues('firstName') + ' ' + getValues('lastName')
        });
        setIsRegistrated(true);
    }
    return (
        <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit(onSubmit)}>
            <Box className='main-box' >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField placeholder='First name' fullWidth
                            type='text'
                            name='firstName'
                            {...register('firstName', { required: 'Required field' })}
                            helperText={errors?.firstName ? errors.firstName.message : null}
                            error={!!errors?.firstName}
                            autoComplete='given-name'
                            inputProps={{ "data-testid": "first-name-input" }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField placeholder='Last name' fullWidth
                            type='text'
                            name='lastName'
                            {...register('lastName', { required: 'Required field' })}
                            helperText={errors?.lastName ? errors.lastName.message : null}
                            error={!!errors?.lastName}
                            autoComplete='family-name'
                            inputProps={{ "data-testid": "last-name-input" }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField placeholder='Email' fullWidth
                            type='email'
                            name='email'
                            {...register('email', {
                                required: 'This field is required', pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address'
                                }
                            })}
                            inputProps={{ "data-testid": "email-input" }}
                            helperText={errors?.email ? errors.email.message : null}
                            error={!!errors?.email}
                            autoComplete='email'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField placeholder='Username' fullWidth
                            type='text'
                            name='username'
                            {...register('username', { required: 'Required field' })}
                            error={!!errors?.username}
                            helperText={errors?.username ? errors.username.message : null}
                            inputProps={{ "data-testid": "username-input" }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required fullWidth
                            placeholder='Password'
                            type='password'
                            name='password'
                            {...register('password', {
                                required: 'This field is required', pattern: {
                                    value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/,
                                    message: 'Password should be at least 8 characters long'
                                }
                            })}
                            error={!!errors?.password}
                            helperText={errors?.password ? errors.password.message : null} inputProps={{ "data-testid": "password-input" }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography className='tearms-and-conditions'>By signing in you accept Exordium Terms and Conditions <Link to="#" sx={{ cursor: 'pointer' }}>Learn more</Link></Typography>
                    </Grid>
                    {
                        !isRegistrated ? <Button type='submit' data-testid='submit-button' className='create-account-button' sx={{ textTransform: 'none' }}>Create account</Button>
                        : <Navigate to='/login' type='submit'><Button type='submit' data-testid='submit-button' className='create-account-button' sx={{ textTransform: 'none' }}>Create account</Button></Navigate>
                    }
                </Grid>
                <Box className='vertical-line'>
                    <Box className='vertical-line-text'>or</Box>
                </Box>
                <Grid item xs={12} md={12}>
                    <Box className='container'>
                        <Box className='buttons-group'>
                            <Button className='facebook-signUp'><FacebookIcon /> Facebook</Button>
                            <Button className='google-signUp'><GoogleIcon /> Continue with Google</Button>
                            <Button className='apple-signUp'><AppleIcon /> Continue with Apple</Button>
                        </Box>
                    </Box>
                </Grid>
            </Box>
        </Box>
    );
}