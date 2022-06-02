import React, { useState } from 'react'
import { Box, Typography, AppBar, Toolbar, Slider, Accordion, AccordionSummary, AccordionDetails, FormControl, FormControlLabel, RadioGroup, Radio } from '@mui/material'; 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SideBar = () => {
    const [val, setVal] = useState([30, 60])
    
    const updateValue = (e, data) => {
        setVal(data)
    }
    return(
        <Box>         
            <AppBar sx={{ background: 'rgba(241,241,241,1)', width: '26.4rem', mt: '10.6rem', position: 'absolute', left: '0', height: 'auto', paddingBottom: '4.9rem'}}>
               <Typography sx={{color: 'black', mt: '2rem', ml: '4.7rem', fontSize: '1.1rem'}}>Price</Typography>
                <Toolbar>

                    <Box sx={{color: 'black', display: 'flex', justifyContent: 'space-around', gap: '2rem', mt: '1rem', ml: '3rem', fontSize: '1.1rem'}}>

                        <Typography sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center',
                            gap: '0.6rem', background: 'rgba(222,224,231,1)', height: '3rem', padding: '1rem', borderRadius: '0.5rem', width: '80%'}}>
                            <Typography sx={{color: 'rgba(189,185,185,1)'}}>From</Typography>
                            100$
                        </Typography>
                        <Typography sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center',
                            gap: '0.6rem', background: 'rgba(222,224,231,1)', height: '3rem', padding: '1rem', borderRadius: '0.5rem', width: '100%'}}>
                            <Typography sx={{color: 'rgba(189,185,185,1)'}}>Up to</Typography>
                            5000$
                        </Typography>
                    </Box>

                </Toolbar>
                    <Slider sx={{mt: '1rem', width: '17rem', ml: '4.7rem'}} value={val} onChange={updateValue}/>
                    
                    <Box sx={{mt: '1rem', width: '70%', ml: '3.7rem'}}>
                        <Accordion sx={{ background: 'rgba(241,241,241,1)'}}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>Material</Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="material"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="Space" control={<Radio />} label="Space" />
                                        <FormControlLabel value="Leather" control={<Radio />} label="Leather" />
                                        <FormControlLabel value="Strickes" control={<Radio />} label="Strickes" />
                                        
                                    </RadioGroup>
                                    </FormControl>
                                </Typography>
                            </AccordionDetails>

                        </Accordion>
                     </Box>

                    <Box sx={{mt: '2rem', width: '70%', ml: '3.7rem'}}>
                        <Accordion sx={{ background: 'rgba(241,241,241,1)'}}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>Brands</Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue=""
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="Nike" control={<Radio />} label="Nike" />
                                        <FormControlLabel value="Puma" control={<Radio />} label="Puma" />
                                        <FormControlLabel value="Adidas" control={<Radio />} label="Adidas" />
                                        
                                    </RadioGroup>
                                    </FormControl>
                                </Typography>
                            </AccordionDetails>

                        </Accordion>
                        
                     </Box>
                     <Box sx={{mt: '2rem', width: '70%', ml: '3.7rem'}}>
                        <Accordion sx={{ background: 'rgba(241,241,241,1)'}}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>Color</Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue=""
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="Black" control={<Radio />} label="Black" />
                                        <FormControlLabel value="White" control={<Radio />} label="White" />
                                        <FormControlLabel value="Red" control={<Radio />} label="Red" />
                                        <FormControlLabel value="Blue" control={<Radio />} label="Blue" />
                                        <FormControlLabel value="Brown" control={<Radio />} label="Brown" />
                                    </RadioGroup>
                                    </FormControl>
                                </Typography>
                            </AccordionDetails>

                        </Accordion>
                        
                     </Box>
                     <Box sx={{mt: '2rem', width: '70%', ml: '3.7rem'}}>
                        <Accordion sx={{ background: 'rgba(241,241,241,1)'}}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>Characters</Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue=""
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="Sneakers" control={<Radio />} label="Sneakers" />
                                        
                                    </RadioGroup>
                                    </FormControl>
                                </Typography>
                            </AccordionDetails>

                        </Accordion>
                        
                     </Box>
                     <Box sx={{mt: '2rem', width: '70%', ml: '3.7rem'}}>
                        <Accordion sx={{ background: 'rgba(241,241,241,1)'}}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>Locations</Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue=""
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="Sofia, Bulgaria" control={<Radio />} label="Sofia, Bulgaria" />
                                        <FormControlLabel value="Plovdiv, Bulgaria" control={<Radio />} label="Plovdiv, Bulgaria" />
                                        <FormControlLabel value="Varna, Bulgaria" control={<Radio />} label="Varna, Bulgaria" />
                                        
                                    </RadioGroup>
                                    </FormControl>
                                </Typography>
                            </AccordionDetails>

                        </Accordion>
                        
                     </Box>
            </AppBar>
        </Box>
    );
}
export default SideBar;