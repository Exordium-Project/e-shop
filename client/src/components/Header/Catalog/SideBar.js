import React, { useState } from 'react'
import { Box, Typography, AppBar, Toolbar, Slider, Accordion, Checkbox, AccordionSummary, StyledEngineProvider, AccordionDetails, FormControlLabel, FormGroup } from '@mui/material';
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
                            </Box>
                        ))
                    }
                </AppBar>
            </StyledEngineProvider>
        </Box>

    );
}
export default SideBar;