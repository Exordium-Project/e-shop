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
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

const Team = () => {
    const teamMembers = [
        {
            name: 'Jordan Radushev',
            position: "Full-Stack Developer",
            linkedin: "https://www.linkedin.com/in/jordan-radushev-76665b1a4/",
            github: "https://github.com/JordanRad",
            imgsrc: jordanImg,
            moreInfo: "➜ Passionate young software developer, Collaborative team player, Open-minded and looking for new connections, Responsible, diligent and motivated, Interested in personal and professional development."
        },
        {
            name: 'Ivaylo Slavchev',
            linkedin: "https://www.linkedin.com/in/ivaylo-slavchev-6425a521b/",
            position: "Front-End Developer",
            github: "https://github.com/IvayloSlavchev",
            imgsrc: ivayloImg,
            moreInfo: `Hey, my name is Ivaylo! Currently I am Front-End developer. My main language is JavaScript, so for now I'm learning more about React. I have build some really cool projects with these technologies, I also have some experience with databases, MySQL actually.
            Current tech stack: HTML/CSS, JavaScript, React and MySQL. 
            Other thing that gets my interest is Blockchain development, I have started to learn more about it at the beginning of 2022.`
        },
        {
            name: 'Mehmed Dukov',
            linkedin: "https://www.linkedin.com/in/mehmed-mehmedov-dukov-07a18a225/",
            position: "Back-End Developer",
            github: "https://github.com/Medikko",
            imgsrc: mehmedImg,
            moreInfo: `Mehmed Dukov is a 19 years old software engineer from Velingrad. He is studying software engineering for about 2 years now. 
              He is very curious about Blockchain development and currently he is learning more about it.
            `
        },
        {
            name: 'Petar Arabadzhiev',
            linkedin: "https://www.linkedin.com/in/petar-arabadzhiev-88535a230/",
            position: "Full-Stack Developer",
            github: "https://github.com/Arabadzhiew",
            imgsrc: petarImg,
            moreInfo: `My name is Petar Arabadzhiev, a passionate software developer from Sofia, Bulgaria. Currently, I am working in the web development domain as a full-stack software engineer.
            My current tech stack consists of: Java, Spring, Hibernate, SQL, TypeScript, React, Redux.`
        },
        {
            name: 'Filip Bozhkov',
            linkedin: "https://www.linkedin.com/in/filip-bozhkov-27b4361b7/",
            github: "https://github.com/fbozhkov",
            position: "Front-End Developer",
            imgsrc: filipImg,
            moreInfo: "More info"
        },
        {
            name: 'Petya Marinova',
            linkedin: "https://www.linkedin.com/in/pmmarinova/",
            position: "Front-End Developer",
            github: "https://github.com/petya0111",
            imgsrc: petyaImg,
            moreInfo: "Software developer currently with frontend technologies Angular & JavaScript. Interested in IT conferences and networking. Glad to take part in programming and different aspect of courses and workshops. I live in Rousse."
        },
        {
            name: 'Stanislav Stanchev',
            linkedin: "https://www.linkedin.com/in/stanislav-stanchev/",
            position: "Front-End Developer",
            github: "https://github.com/Stanislav001",
            imgsrc: stanislavImg,
            moreInfo: `I am a software developer. I am currently working as a React Developer. My main tools are JavaScript & React.js and I work mainly on the application interface.
            My time outside of work usually goes to learning new things, reading books and watching sports.`
        },
        {
            name: 'Niazi Yazadzhiev',
            linkedin: "https://www.linkedin.com/in/niazi-yazadzhiev-942a6421b",
            position: "Back-End Developer",
            github: "https://github.com/nyazadzhiev",
            imgsrc: niaziImg,
            moreInfo: `Niazi Yazadzhiev is a 21 years old software and internet technologies student from TU Varna. Currently working as a Back-End developer.`
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
                <Grid >
                    <Box className='member-info-box'>
                        <Box className='group-info-box'>
                            <Typography className="group-info" variant="h6">
                                <img src={modalData?.imgsrc} />
                                {modalData?.name}
                                <br></br>
                                {modalData?.position}
                            </Typography>
                        </Box>
                        <Box className='member-info'>
                            {modalData?.moreInfo}
                        </Box>
                        <button onClick={() => setModalIsOpen(false)} className='close-modal-button'><CloseIcon /></button>
                    </Box>
                </Grid>
            </Modal>
        </Grid>


    );
}

export default Team