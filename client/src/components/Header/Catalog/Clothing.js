import React, { useState, useEffect } from 'react';
import "../Catalog/CatalogStyles/Products.scss";
import SideBarStyle from '../Styles/SideBar.scss';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormGroup, Card, CardActionArea } from '@mui/material';
import axios from 'axios';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Clothing = () => {
    const [productPref, setProductPref] = useState([]);
    const [sizesFilter, setSizesFilter] = useState([]);
    const [clothesColor, setClothesColor] = useState([]);

    const axiosRequest = axios.get('http://localhost:3004/api/products/category/1');

    const productFetch = async (categoryName) => {
        await axiosRequest.then(response => {
            const data = response.data;
            const result = data.filter((currData) => {
                return currData.type.name === categoryName || currData.color == categoryName
            })
            setProductPref(result);
            console.log(result)
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
    const filterColor = async () => {
        await axiosRequest.then(response => {
            const data = response.data;
            const result = data.map(item => { return item.color })
            const unique = Array.from(new Set(result))
            setClothesColor(unique);
            console.log(unique)
        })
    }

    const getUniqueSizes = async () => {
        await axiosRequest.then(response => {
            const data = response.data;
            const sizesArray = data.map(item => {
                return item.sizes.map(secondItem => {
                    return secondItem.size;
                })
            });

            for (let i = 0; i < sizesArray.length; i++) {
                const uniqueSizes = Array.from(new Set(sizesArray[i]))
                console.log(uniqueSizes)
                return setSizesFilter(uniqueSizes);
            }
        })
    }
    useEffect(() => {
        getUniqueSizes();
        allProducts(productPref)
        filterColor()
    }, [])

    return (
        <Box style={{ display: 'flex' }}>
            <Box className='side-bar' style={SideBarStyle}>
                <Box className='filter-buttons-class'>
                    <Typography className='title' component={'span'}><strong>Avaiable products</strong></Typography>
                    <button className='filter-button' onClick={() => {
                        allProducts(productPref)
                    }}>All products</button>
                    <button className='filter-button' onClick={() => {
                        productFetch('torso');
                    }}>Torso</button>
                    <button className='filter-button' onClick={() => {
                        productFetch('shorts')
                    }}>Shorts</button>
                    <button className='filter-button' onClick={() => {
                        productFetch('shoes')
                    }}>Shoes</button>
                </Box>
                <Box className='product-properies'>
                    <Accordion className='acordion-style' defaultExpanded={true}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography component={'span'}>Sizes</Typography>
                        </AccordionSummary>
                        {
                            sizesFilter.map((item, index) => {
                                return (
                                    <Box className='side-bar-boxes' key={index}>
                                        <AccordionDetails>
                                            <Typography component={'span'}>
                                                <FormGroup>
                                                    <button className='filter-size-button'>{item}</button>
                                                </FormGroup>
                                            </Typography>
                                        </AccordionDetails>
                                    </Box>
                                )
                            })
                        }
                    </Accordion>
                </Box>
                <Box className='product-properies'>
                    <Accordion className='acordion-style' defaultExpanded={true}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography component={'span'}>Color</Typography>
                        </AccordionSummary>
                          {
                            clothesColor.map((item, index) => {
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
        </Box>
    )
}

export default Clothing