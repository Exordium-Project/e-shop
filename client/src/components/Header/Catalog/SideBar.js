import React, { useState } from 'react'
import { Box, Typography, AppBar, Toolbar, Slider, Accordion, AccordionSummary, StyledEngineProvider, AccordionDetails, FormControl, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../Styles/SideBar.scss'

const SideBar = () => {
    const [val, setVal] = useState([30, 60])

    const updateValue = (e, data) => {
        setVal(data)
    }

    const priceBoxes = [
        { leftAndRightSide: 'From 100$' },
        { leftAndRightSide: 'To 5000$' }
    ]
    const selectOptions = [
        {
            titles: 'Material',
            firstOption: 'Space',
            secondOption: 'Leather',
        },
        {
            titles: 'Brands',
            firstOption: 'Nike',
            secondOption: 'Puma',
        },
        {
            titles: 'Colors',
            firstOption: 'Black',
            secondOption: 'White'
        },
        {
            titles: 'Characteristics',
            firstOption: 'Sneakers',
            secondOption: 'Athletic'
        },
        {
            titles: 'Location',
            firstOption: 'Sofia, Bulgaria',
            secondOption: 'Plovdiv, Bulgaria'
        }
    ]
    return (
        <Box>
            <StyledEngineProvider injectFirst={true}>
                <AppBar className='AppBar'>
                    <Typography className='price-txt'>Price</Typography>

                    <Toolbar>
                        <Box className='price-diapason'>
                            {
                                priceBoxes.map(item => { return (<Typography className='price'>{item.leftAndRightSide}</Typography>) })
                            }
                        </Box>
                    </Toolbar>
                    <Slider className='slider' value={val} onChange={updateValue} />
                    {
                        selectOptions.map(item => (
                            <Box className='side-bar-boxes'>

                                <Accordion className='acordion-style'>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography>{item.titles}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <FormControl>
                                                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                                                    <FormControlLabel label={item.firstOption} value={item.firstOption} control={<Radio />} />
                                                    <FormControlLabel label={item.secondOption} value={item.secondOption} control={<Radio />} />
                                                </RadioGroup>
                                            </FormControl>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                        ))
                    }
                </AppBar>
            </StyledEngineProvider>
        </Box>
    );
}
export default SideBar;