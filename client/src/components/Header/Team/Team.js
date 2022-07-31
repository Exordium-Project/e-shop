import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import './Team.scss';
import jordanImg from './team-img/jordan.jpeg'
import ivayloImg from './team-img/ivaylo.jpeg'
import mehmedImg from './team-img/mehmed.jpeg'
import petarImg from './team-img/petar.jpeg'
import filipImg from './team-img/filip.jpeg'
import petyaImg from './team-img/petya.jpeg'
import stanislavImg from './team-img/stanislav.jpeg'
import niaziImg from './team-img/niazi.jpeg'

const Team = () => {
    const teamMembers = [
        {
            name: 'Jordan Radushev',
            position: "Full-stack Developer",
            linkedin: "https://www.linkedin.com/in/jordan-radushev-76665b1a4/",
            github: "https://github.com/JordanRad",
            imgsrc: jordanImg
        },
        {
            name: 'Ivaylo Slavchev',
            linkedin: "https://www.linkedin.com/in/ivaylo-slavchev-6425a521b/",
            position: "Frontend Developer",
            github: "https://github.com/IvayloSlavchev",
            imgsrc: ivayloImg
        },
        {
            name: 'Mehmed Dukov',
            linkedin: "https://www.linkedin.com/in/mehmed-mehmedov-dukov-07a18a225/",
            position: "Backend Developer",
            github: "https://github.com/Medikko",
            imgsrc: mehmedImg
        },
        {
            name: 'Petar Arabadzhiev',
            linkedin: "https://www.linkedin.com/in/petar-arabadzhiev-88535a230/",
            position: "Full-stack Developer",
            github: "https://github.com/Arabadzhiew",
            imgsrc: petarImg
        },
        {
            name: 'Filip Bozhkov',
            linkedin: "https://www.linkedin.com/in/filip-bozhkov-27b4361b7/",
            github: "https://github.com/fbozhkov",
            position: "Frontend Developer",
            imgsrc: filipImg
        },
        {
            name: 'Petya Marinova',
            linkedin: "https://www.linkedin.com/in/pmmarinova/",
            position: "Frontend Developer",
            github: "https://github.com/petya0111",
            imgsrc: petyaImg
        },
        {
            name: 'Stanislav Stanchev',
            linkedin: "https://www.linkedin.com/in/stanislav-stanchev/",
            position: "Frontend Developer",
            github: "https://github.com/Stanislav001",
            imgsrc: stanislavImg
        },
        {
            name: 'Niazi Yazadzhiev',
            linkedin: "https://www.linkedin.com/in/niazi-yazadzhiev-942a6421b",
            position: "Backend Developer",
            github: "https://github.com/nyazadzhiev",
            imgsrc: niaziImg
        }
       
    ];

    return (

        <Grid className="container-grid" container spacing={2}>
       
            {
                teamMembers.map((item) => {
                   return <Grid item xs={12} sm={6} md={3}>
                    <Box className="body">
                        <Box className="banner"  >
                            <Grid class="card-container" >
                                <div className="card" >
                                    <img src={item.imgsrc} alt="" className='memberImage' />
                                    <h1 className="name">{item.name}</h1>
                                    <h3 className="positon">{item.position}</h3>
                                    <div className="memberInfo">
                                        <a href={item.linkedin} target="_blank" rel="noreferrer">
                                            <img src="https://thumbs.dreamstime.com/b/linkedin-icon-filled-website-design-mobile-app-development-social-collection-isolated-black-background-155363702.jpg"
                                                alt="" className="social-image" />
                                        </a>
                                        <a href={item.github} target="_blank" rel="noreferrer">
                                            <img src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
                                                alt="" className='social-image' />
                                        </a>
                                    </div>
                                </div>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
                })
            }
        </Grid>


    );
}

export default Team