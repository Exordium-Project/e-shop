import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './SpecialComponent.module.scss';
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const SpecialComponent = (props) =>  {
    const [category, setCategory] = useState([]);

    const url = 'http://localhost:3004';
    const categoryURL = `${url}/api/types`;

    useEffect(() => {
        getAllCategories();
    }, []);

    const getAllCategories = () => {
        axios.get(categoryURL)
        .then ((response) => {
            const categories = response.data;
            setCategory(categories);
        })
            .catch(error => console.error(`Error: ${error}`));
    }

    const typeID = props.typeId;

    const newTo = {
        pathname: `/product/${props.id}`
    } 

    return (
        <Box className={styles.card}>
            <Box className={styles.contentBox}>
                <Typography className={styles.productInfo}>{props.name}</Typography>
                <Typography className={styles.productInfo}>{category[typeID-1]?.name}</Typography>
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