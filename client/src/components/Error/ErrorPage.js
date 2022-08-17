import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <Box sx={{textAlign: 'center'}}>
            <Typography variant='h4'>Whoops, page was not found!</Typography>
            <Typography variant='h6'>Please return at <Link to='/'>Home page</Link></Typography>
        </Box>
    )
}

export default ErrorPage