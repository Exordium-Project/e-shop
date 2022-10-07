import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './SpecialComponent.module.scss';
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const SpecialComponent = (props) =>  {

    const newTo = {
        pathname: `/product/${props.id}`
    } 

    return (
        <Box className={styles.card}>
            <Box className={styles.contentBox}>
                <Typography className={styles.productInfo}>{props.name}</Typography>
                <Typography className={styles.productInfo}>{props.type?.name}</Typography>
            </Box>
            <Box className={styles.images}>
                <img src={props.image_url} className={styles.mouse} />
            </Box>
            <Box className={styles.contentBox}>
                <Link to={newTo} className={styles.buy}>See Details</Link>
            </Box>
        </Box>
    );
}
export default SpecialComponent