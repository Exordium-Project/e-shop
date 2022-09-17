import React, { useState, useEffect } from 'react';
import "../Styles/SideBar.scss";
import axios from 'axios';
import { Box, Typography, StyledEngineProvider, Grid, Accordion, Checkbox, AccordionSummary, AccordionDetails, FormGroup, FormControlLabel } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SideBar = () => {
    const [productPref, setProductPref] = useState([]);

    const propFetch = async () => {
        await axios.get('http://localhost:3004/api/products').then(response => {
            const data = response.data;
            setProductPref(data);
        })
    }
    useEffect(() => {
        propFetch();
    }, [])

    return (
        <StyledEngineProvider injectFirst={true}>
            <Box className='side-bar'>
                <Box className='filter-buttons-class'>
                    <Typography className='title'><strong>Avaiable products (69)</strong></Typography>
                    <button className='filter-button'>Phones</button>
                    <button className='filter-button'>Laptops</button>
                    <button className='filter-button'>Periphery</button>
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
        </StyledEngineProvider>
    )
}

export default SideBar