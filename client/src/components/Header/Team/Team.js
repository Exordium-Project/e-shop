import { Typography, Box, Grid } from "@mui/material";
import React from "react";
import './Team.scss';

const Team = () => {
    const teamMembers = [
        {
            name: 'Jordan Radushev',
            position: "Backend Developer",
            linkedin: "https://www.linkedin.com/in/jordan-radushev-76665b1a4/",
            github: "https://github.com/JordanRad",
            imgsrc: "https://avatars.githubusercontent.com/u/63496500?v=4"
        },
        {
            name: 'Ivaylo Slavchev',
            linkedin: "https://github.com/IvayloSlavchev",
            position: "Frontend Developer",
            github: "https://github.com/IvayloSlavchev",
            imgsrc: "https://media-exp1.licdn.com/dms/image/C4E03AQH3Umcu8klQJQ/profile-displayphoto-shrink_400_400/0/1630830179729?e=1664409600&v=beta&t=nJ4Jb76ZamQ5E9DV5tmwyYvZiv3X0AnjLYulpHh5nUs"
        },
        {
            name: 'Petar Arabadzhiev',
            linkedin: "https://www.linkedin.com/in/petar-arabadzhiev-88535a230/",
            position: "Fullstack Developer",
            github: "https://github.com/Arabadzhiew",
            imgsrc: "https://avatars.githubusercontent.com/u/76776739?v=4"
        },
        {
            name: 'Petya Marinova',
            linkedin: "https://www.linkedin.com/in/pmmarinova/",
            position: "Frontend Developer",
            github: "https://github.com/petya0111",
            imgsrc: "https://avatars.githubusercontent.com/u/13080328?v=4"
        },
        {
            name: 'Niazi Yazadzhiev',
            linkedin: "https://www.linkedin.com/in/niazi-yazadzhiev-942a6421b",
            position: "Backend Developer",
            github: "https://github.com/nyazadzhiev",
            imgsrc: "https://media-exp2.licdn.com/dms/image/D4E03AQGD2RkICOrGsg/profile-displayphoto-shrink_400_400/0/1631128288158?e=1661990400&v=beta&t=dBMgDLBTNi4n4X-HLbsalPajbtaiYwO21AwMgyM_huM"
        },
        {
            name: 'Filip Bozhkov',
            linkedin: "https://www.linkedin.com/in/filip-bozhkov-27b4361b7/",
            github: "https://github.com/fbozhkov",
            position: "Frontend Developer",
            imgsrc: "https://avatars.githubusercontent.com/u/52756776?v=4"
        }
    ];
    let chunkSize = 3;
    const res = [];
    while (teamMembers.length > 0) {
        const chunk = teamMembers.splice(0, chunkSize);
        res.push(chunk);
    }
    console.log(res);
    return (
        <Box className="body">
            <Box className="banner"  >
                <Typography className="group-info" variant="h2">
                    Team Exordium Eshop Project
                </Typography>
                <Grid class="card-container" >
                    {
                        res.map((resitem) => {
                           return resitem.map((item) => {
                                return <div className="card" >
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
                            });
                        })

                    }
                </Grid>
            </Box>

        </Box>

    );
}

export default Team