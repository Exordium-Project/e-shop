import React, { useState } from 'react'
import { Box, Typography, Grid, AppBar, Toolbar, Slider, Accordion, Checkbox, AccordionSummary, StyledEngineProvider, AccordionDetails, FormControlLabel, FormGroup, Card } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../Styles/SideBar.scss'
import SearchBar from '../../search-bar/search-bar';

const SideBar = () => {

    const products = [
        {
            avaiableProducts: 6458,
            categories: ["Shoes", "Shorts", "Hoodies & Jackets"]
        }
    ];

    const selectOptions = [
        {
            titles: 'Material',
            options: ['Space', 'Leather']
        },
        {
            titles: 'Brands',
            options: ['Nike', 'Puma']
        },
        {
            titles: 'Colors',
            options: ['Black', 'White']
        },
        {
            titles: 'Characteristics',
            options: ['Sneakers', 'Athletic']
        },
        {
            titles: 'Location',
            options: ['Sofia, Bulgaria', 'Plovdiv, Bulgaria']
        }
    ]
    return (
        <StyledEngineProvider injectFirst={true}>
            <Box className='side-bar'>
                <Box className='avaiable-products-class'>
                    {
                        products.map((item, index) => {
                            return (
                                <Box className='avaiable-products' key={index}>
                                    <Typography key={index} variant='h6' className='avaiable-products-text'><strong>Avaiable products ({item.avaiableProducts})</strong></Typography>
                                    <ul>
                                    
                                    </ul>

                                </Box>
                            )
                        })
                    }
                </Box>
                <Box className='side-bar-boxes'>
                    {
                        selectOptions.map((item, index) => (
                            <Accordion className='accordion-style' defaultExpanded={true}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography>{item.titles}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <FormGroup>
                                            {
                                                item.options.map(option => (
                                                    <FormControlLabel control={<Checkbox />} label={option} value={option} />
                                                ))
                                            }
                                        </FormGroup>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))
                    }
                </Box>
             
            </Box>
        </StyledEngineProvider>
    );
}
export default SideBar;