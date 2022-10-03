import React, { useState, useEffect } from 'react';
import './CatalogStyles/Products.scss';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, FormGroup, Card, CardActionArea, Button } from '@mui/material';
import axios from 'axios';
import SideBarStyle from '../Styles/SideBar.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Tech = () => {
    const [productPref, setProductPref] = useState([]);
    const [colorItemHook, setColorItemHook] = useState([]);

    const axiosRequest = axios.get('http://localhost:3004/api/products/category/2');

    const productFetch = async (categoryItem) => {
        await axiosRequest.then(response => {
            const data = response.data;
            const result = data.filter((currData) => {
                return currData.type.name === categoryItem || currData.color == categoryItem
            })
            setProductPref(result);
        })
    }
    const filterColor = async () => {
        await axiosRequest.then(response => {
            const data = response.data;
            const result = data.map(item => {return item.color})
            const unique = Array.from(new Set(result))
            setColorItemHook(unique);
        })
    }

    const allProducts = async (categoryItem) => {
        await axiosRequest.then(response => {
            const data = response.data;
            const result = data.filter((currData) => {
                return currData.type.name !== categoryItem
            })
            setProductPref(result);
        })
    }

    useEffect(() => {
        filterColor();
        allProducts(productPref);
    }, [])
    return (
        <Box style={{ display: 'flex' }}>
                <Box className='side-bar' style={SideBarStyle}>
                <Box className='filter-buttons-class'>
                    <Typography className='title' component={'div'}><strong>Avaiable products</strong></Typography>
                    <button className='filter-button' onClick={() => {
                        allProducts(productPref)
                    }}>All products</button>
                    <button className='filter-button' onClick={() => {
                        productFetch('smartphones')
                    }}>Phones</button>
                    <button className='filter-button' onClick={() => {
                        productFetch('laptops')
                    }}>Laptops</button>
                    <button className='filter-button' onClick={() => {
                        productFetch('periphery')
                    }}>Periphery</button>
                </Box>
                <Box className='product-properies'>
                    <Accordion className='acordion-style' defaultExpanded={true}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography component={'div'}>Color</Typography>
                        </AccordionSummary>
                        {
                            colorItemHook.map((item, index) => {
                                return (
                                    <Box className='side-bar-boxes' key={index}>
                                        <AccordionDetails>
                                            <Typography component={'div'}>
                                                <FormGroup>
                                                <button className='filter-size-button' onClick={() => {
                                                       productFetch(item)
                                                   }}>{item}</button>
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
        </Box >
    )
}

export default Tech