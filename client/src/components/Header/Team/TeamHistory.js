import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Team from "./Team";
import './Team.scss';


const TeamHistory = () => {


    return (

        <Box className="body">
            <Box className="banner"  >
                <Typography className="group-info" variant="h2">
                    Team Exordium Eshop Project History
                </Typography>
                <Typography className="group-info" variant="h6">
                This is an all purpose e-shop practice project, maintain by a group of highly motivated young developers.
                </Typography>
                <Team></Team>
            </Box>
        </Box>
    );
}

export default TeamHistory