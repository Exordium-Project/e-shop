import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
import "../Catalog/CatalogStyles/Tech.scss";
import SideBarStyle from '../Styles/SideBar.scss';
import { Box, Typography, StyledEngineProvider, Grid, Accordion, Checkbox, AccordionSummary, AccordionDetails, FormGroup, FormControlLabel, Card, CardContent, CardActions, CardActionArea } from '@mui/material';
import axios from 'axios';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Clothing = () => {
    const [productPref, setProductPref] = useState([]);

    const propFetch = async () => {
        await axios.get('http://localhost:3004/api/products/category/1').then(response => {
            const data = response.data;
            setProductPref(data);
        })
    }
    useEffect(() => {
        propFetch();
    }, [])
    return (
        <Box style={{ display: 'flex' }}>
             <Box className='side-bar' style={SideBarStyle}>
                <Box className='filter-buttons-class'>
                    <Typography className='title'><strong>Avaiable products (123)</strong></Typography>
                    <button className='filter-button'>Torso</button>
                    <button className='filter-button'>Shorts</button>
                    <button className='filter-button'>Shoes</button>
                </Box>
                <Box className='product-properies'>
                    {
                        productPref.map((item, index) => {
                            return (
                                <Box className='side-bar-boxes' key={index}>

                                    <Accordion className='acordion-style' defaultExpanded={true}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography>Color</Typography> 
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                <FormGroup>
                                                    {item.color}
                                                </FormGroup>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Box>
                            )
                        })
                    }
                </Box>
            </Box>
            <Box className='product-main-class'>
            {
                productPref.map((item, index) => {
                    return (
                        <Box className='product-class'>
                            <Card className='card' key={index}>
                                <CardActionArea>
                                    <img src={item.image_url} className='productImage' />
                                </CardActionArea>
                                <Typography className='name'>{item.name}</Typography>
                                <Box className='productInfo'>
                                    <Typography fontSize=".7rem">{item.small_description}</Typography>
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography className="productPrice">{item.price}$</Typography>

                                </Box>
                            </Card>
                        </Box>
                    )
                })
            }
            </Box>
        </Box>
    )
}   

export default Clothing