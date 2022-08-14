import { Grid, Typography } from "@mui/material";
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
import Modal from "react-modal";
import { useState } from "react";

const Team = () => {
    const teamMembers = [
        {
            name: 'Jordan Radushev',
            position: "Full-stack Developer",
            linkedin: "https://www.linkedin.com/in/jordan-radushev-76665b1a4/",
            github: "https://github.com/JordanRad",
            imgsrc: jordanImg,
            moreInfo:"More info"
        },
        {
            name: 'Ivaylo Slavchev',
            linkedin: "https://www.linkedin.com/in/ivaylo-slavchev-6425a521b/",
            position: "Frontend Developer",
            github: "https://github.com/IvayloSlavchev",
            imgsrc: ivayloImg,
            moreInfo:"More info"
        },
        {
            name: 'Mehmed Dukov',
            linkedin: "https://www.linkedin.com/in/mehmed-mehmedov-dukov-07a18a225/",
            position: "Backend Developer",
            github: "https://github.com/Medikko",
            imgsrc: mehmedImg,
            moreInfo:"More info"
        },
        {
            name: 'Petar Arabadzhiev',
            linkedin: "https://www.linkedin.com/in/petar-arabadzhiev-88535a230/",
            position: "Full-stack Developer",
            github: "https://github.com/Arabadzhiew",
            imgsrc: petarImg,
            moreInfo:"More info"
        },
        {
            name: 'Filip Bozhkov',
            linkedin: "https://www.linkedin.com/in/filip-bozhkov-27b4361b7/",
            github: "https://github.com/fbozhkov",
            position: "Frontend Developer",
            imgsrc: filipImg,
            moreInfo:"More info"
        },
        {
            name: 'Petya Marinova',
            linkedin: "https://www.linkedin.com/in/pmmarinova/",
            position: "Frontend Developer",
            github: "https://github.com/petya0111",
            imgsrc: petyaImg,
            moreInfo:"More info"
        },
        {
            name: 'Stanislav Stanchev',
            linkedin: "https://www.linkedin.com/in/stanislav-stanchev/",
            position: "Frontend Developer",
            github: "https://github.com/Stanislav001",
            imgsrc: stanislavImg,
            moreInfo:"More info"
        },
        {
            name: 'Niazi Yazadzhiev',
            linkedin: "https://www.linkedin.com/in/niazi-yazadzhiev-942a6421b",
            position: "Backend Developer",
            github: "https://github.com/nyazadzhiev",
            imgsrc: niaziImg,
            moreInfo:"More info"
        }

    ];

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalData, setModalData] = useState(null);

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
                                                    alt="linkedin" className="social-image" />
                                            </a>
                                            <a href={item.github} target="_blank" rel="noreferrer">
                                                <img src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
                                                    alt="github img" className='social-image' />
                                            </a>
                                            <button className="modal-anchor"
                                                onClick={() => {
                                                    setModalData(item);
                                                    setModalIsOpen(true);
                                                }}>more</button>
                                        </div>
                                    </div>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                })
            }
            <Modal
                isOpen={modalIsOpen} 
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Member info"
            >
                <Typography className="group-info" variant="h6">
                    {modalData?.name}
                </Typography>
                <div>{modalData?.moreInfo}</div>
                <button onClick={() => setModalIsOpen(false)}>Close modal</button>
            </Modal>
        </Grid>


    );
}

export default Team