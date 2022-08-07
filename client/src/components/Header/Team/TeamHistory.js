import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Team from "./Team";
import './Team.scss';
import Accordion from '@mui/material/Accordion';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


const TeamHistory = () => {


    return (

        <Box className="body">
            <Box className="banner"  >

                <Accordion className="accordion-container">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className="expand-icon" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="h5">Team Exordium Eshop Project History</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="h6">
                            This is an all purpose e-shop practice project in React and NodeJS. Maintained by a group of highly motivated young developers.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordion-container">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className="expand-icon" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="h5">All started in a great community in Discord</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="h6">
                            We were getting know each other more in every daily meetings. <br/>
                            When problem arises it is supported by experienced developers 
                            from the <b>Discord IT Carrer and Lifestyle</b> community.
                        </Typography>
                        <Button target="_blank"  href="https://discord.gg/FdHFU3Mm6a">Join Discord</Button>
                    </AccordionDetails>
                </Accordion>
                <Team />
            </Box>
        </Box>
    );
}

export default TeamHistory