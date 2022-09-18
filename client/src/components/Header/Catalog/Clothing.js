import React, { useState, useEffect } from 'react';
import "../Catalog/CatalogStyles/Tech.scss";
import SideBarStyle from '../Styles/SideBar.scss';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, FormGroup, Card, CardActionArea } from '@mui/material';
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
                    <Typography className='title' component={'span'}><strong>Avaiable products (123)</strong></Typography>
                    <button className='filter-button'>Torso</button>
                    <button className='filter-button'>Shorts</button>
                    <button className='filter-button'>Shoes</button>
                </Box>
                <Box className='product-properies'>
                    <Accordion className='acordion-style' defaultExpanded={true}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography component={'span'}>Color</Typography>
                        </AccordionSummary>
                        {
                            productPref.map((item, index) => {
                                return (
                                    <Box className='side-bar-boxes' key={index}>
                                        <AccordionDetails>
                                            <Typography component={'span'}>
                                                <FormGroup>
                                                    {item.color}
                                                </FormGroup>
                                            </Typography>
                                        </AccordionDetails>
                                    </Box>
                                )
                            })
                        }
                    </Accordion>
                </Box>
            </Box>
            <Box className='product-main-class'>
                {
                    productPref.map((item, index) => {
                        return (
                            <Box className='product-class' key={index}>
                                <Card className='card'>
                                    <CardActionArea>
                                        <img src={item.image_url} className='productImage' />
                                    </CardActionArea>
                                    <Typography className='name' component={'span'}>{item.name}</Typography>
                                    <Box className='productInfo'>
                                        <Typography fontSize=".7rem" component={'span'}>{item.small_description}</Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography className="productPrice" component={'span'}>{item.price}$</Typography>

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