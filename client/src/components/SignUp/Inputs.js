import { Typography, TextField, Grid, Box, Link, Button } from '@mui/material'
import { useForm } from 'react-hook-form';
import './SignUpStyles/Registration-inputs.scss'
import './SignUpStyles/Mobile-phone-view.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';


export default function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <Box component="form" noValidate sx={{ mt: 3 }}>
            <Box className='main-box'>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField placeholder='First name' fullWidth
                            {...register('firstName', { required: 'Required field' })}
                            error={!!errors?.firstName}
                            helperText={errors?.firstName ? errors.firstName.message : null} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField placeholder='Last name' fullWidth
                            {...register('lastName', { required: 'Required field' })}
                            error={!!errors?.lastName}
                            helperText={errors?.lastName ? errors.lastName.message : null} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField placeholder='Email' fullWidth {...register('email', {
                            required: 'This field is required', pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address'
                            }
                        })}
                            error={!!errors?.email}
                            helperText={errors?.email ? errors.email.message : null} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required fullWidth placeholder='Password' type='password'
                            {...register('password', {
                                required: 'This field is required', pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                                    message: 'Password should be at least 8 characters long'
                                }
                            })}
                            error={!!errors?.password}
                            helperText={errors?.password ? errors.password.message : null} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className='tearms-and-conditions'>By signing in you accept Exordium Terms and Conditions <Link to="#" sx={{ cursor: 'pointer' }}>Learn more</Link></Typography>
                    </Grid>
                    <button onClick={handleSubmit(onSubmit)} className='create-account-button'>Create account</button>
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