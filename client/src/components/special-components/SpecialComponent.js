import React from 'react';
import styles from './SpecialComponent.module.scss';
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const SpecialComponent = (props) =>  {
    return (
        <Box className={styles.card}>
            <Box className={styles.contentBox}>
                <Typography className={styles.productInfo}>{props.name}</Typography>
                <Typography className={styles.productInfo}>Category</Typography>
            </Box>
            <Box className={styles.images}>
                {/* We should set special products from Back-End */}
                <img src="https://eu.ui-avatars.com/api/?name=John+Doe&size=250" className={styles.userImage}/> 
                <Box component='span' className={styles.userInfo}>Username</Box>
                <img src="http://www.foaminsulationni.com/images/placeholder/600x600.gif" className={styles.mouse} />
            </Box>
            <Box className={styles.contentBox}>
                <Link to="#" className={styles.buy}>See Details</Link>
            </Box>
        </Box>
    );
}
export default SpecialComponent