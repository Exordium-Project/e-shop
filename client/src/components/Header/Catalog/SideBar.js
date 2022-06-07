import React, { useState, useEffect } from 'react'
import { Box, Typography, AppBar, Toolbar, Slider, Accordion, AccordionSummary, StyledEngineProvider, AccordionDetails, FormControl, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../Styles/SideBar.scss'

const SideBar = () => {
    const [val, setVal] = useState([30, 60])

    const updateValue = (e, data) => {
        setVal(data)
    }
    const material = ['Space', 'Leather', 'Strickes']
    const brands = ['Nike', 'Puma', 'Adidas']
    const colors = ['Black', 'White', 'Red', 'Blue', 'Brown']
    const cities = ['Sofia, Bulgaria', 'Plovdiv, Bulgaria', 'Varna, Bulgaria']
    const leftSide = ['From 100$']
    const rightSide = ['To 5000$']

    return (
        <Box>
            <StyledEngineProvider injectFirst={true}>
                <AppBar className='AppBar'>
                    <Typography className='price-txt'>Price</Typography>
                    <Toolbar>
                        <Box className='price-diapason'>
                            {
                                leftSide.map(first => {
                                    return <Typography className='price'>{first}</Typography>
                                })
                            }
                            {
                                rightSide.map(second => {
                                    return <Typography className='price'>{second}</Typography>
                                })
                            }
                        </Box>
                    </Toolbar>
                    <Slider className='slider' value={val} onChange={updateValue} />

                    <Box className='side-bar-boxes'>
                        <Accordion className='acordion-style'>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>Material</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <FormControl>
                                        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                                            {
                                                material.map(item => { return <FormControlLabel label={item} value={item} control={<Radio />} /> })
                                            }
                                        </RadioGroup>
                                    </FormControl>
                                </Typography>
                            </AccordionDetails>

                        </Accordion>
                    </Box>

                    <Box className='side-bar-boxes'>
                        <Accordion className='acordion-style'>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>Brands</Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                    <FormControl>
                                        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                                            {
                                                brands.map(brandsItems => { return <FormControlLabel label={brandsItems} value={brandsItems} control={<Radio />} /> })
                                            }
                                        </RadioGroup>
                                    </FormControl>
                                </Typography>
                            </AccordionDetails>

                        </Accordion>
                    </Box>

                    <Box className='side-bar-boxes'>
                        <Accordion className='acordion-style'>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>Color</Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                    <FormControl>
                                        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group" >
                                            {
                                                colors.map(colorItems => { return <FormControlLabel value={colorItems} label={colorItems} control={<Radio />} /> })
                                            }
                                        </RadioGroup>
                                    </FormControl>
                                </Typography>
                            </AccordionDetails>

                        </Accordion>

                    </Box>
                    <Box className='side-bar-boxes'>
                        <Accordion className='acordion-style'>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>Characters</Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                    <FormControl>
                                        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">

                                            <FormControlLabel value="Sneakers" control={<Radio />} label="Sneakers" />

                                        </RadioGroup>
                                    </FormControl>
                                </Typography>
                            </AccordionDetails>

                        </Accordion>

                    </Box>
                    <Box className='side-bar-boxes'>
                        <Accordion className='acordion-style'>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>Locations</Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                    <FormControl>
                                        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group" >
                                            {
                                                cities.map(items => { return <FormControlLabel value={items} label={items} control={<Radio />} /> })
                                            }
                                        </RadioGroup>
                                    </FormControl>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </Box>
                </AppBar>
            </StyledEngineProvider>
        </Box>
    );
}
export default SideBar;