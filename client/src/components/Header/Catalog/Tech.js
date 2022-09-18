import React, { useState, useEffect } from 'react';
import './CatalogStyles/Tech.scss';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, FormGroup, Card, CardActionArea } from '@mui/material';
import axios from 'axios';
import SideBarStyle from '../Styles/SideBar.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Tech = () => {
    const [productPref, setProductPref] = useState([]);

    const propFetch = async () => {
        await axios.get('http://localhost:3004/api/products/category/2').then(response => {
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
                    <Typography className='title' component={'div'}><strong>Avaiable products (123)</strong></Typography>
                    <button className='filter-button'>Phones</button>
                    <button className='filter-button'>Laptops</button>
                    <button className='filter-button'>Periphery</button>
                </Box>
                <Box className='product-properies'>
                    <Accordion className='acordion-style' defaultExpanded={true}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography component={'div'}>Color</Typography>
                        </AccordionSummary>
                        {
                            productPref.map((item, index) => {
                                return (
                                    <Box className='side-bar-boxes' key={index}>
                                        <AccordionDetails>
                                            <Typography component={'div'}>
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
                                    <Typography className='name' component={'div'}>{item.name}</Typography>
                                    <Box className='productInfo'>
                                        <Typography fontSize=".7rem" component={'div'}>{item.small_description}</Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography className="productPrice" component={'div'}>{item.price}$</Typography>

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

export default Tech