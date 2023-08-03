import React from 'react';
import { Container } from 'react-bootstrap';
import ParticleBackground from './particles';
import TypeLoop from './Type';
import Sparkles from 'react-sparkle'
import brainPic from './bigbrain.png'
import linkedinPic from './lk.svg'
import flaskpic from './flask.png'
import dd from './dungeon.png'
import Grid from '@mui/material/Grid';
import { Box, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

const projects = [
  {
    id: 1,
    image: brainPic,
    title: 'Kahoot Quiz Game Clone (Front-end) - React Js',
    description: 'Developed a captivating and interactive Kahoot quiz game clone using React, Redux, and RESTful API integration, offering an engaging learning experience.',
    githubLink: 'https://github.com/your_username/project1',
  },
  {
    id: 2,
    image: linkedinPic,
    title: 'LinkedIn-Inspired Job Posting Website - Vanilla JS',
    description: 'Created a dynamic and user-friendly LinkedIn-inspired job posting website using Vanilla JS, HTML, and CSS, empowering job seekers and employers to connect effortlessly.',
    githubLink: 'https://github.com/your_username/project1',
  },
  {
    id: 3,
    image: flaskpic,
    title: 'Microsoft Teams Backend Web Server - Python',
    description: 'Built a robust and efficient backend web server for a Microsoft Teams-like application using Python and REST APIs, facilitating seamless communication and collaboration among users.',
    githubLink: 'https://github.com/your_username/project1',
  },
  {
    id: 4,
    image: dd,
    title: 'Web-Based Game Backend Application - Java',
    description: 'Developed a resilient Java backend for an engaging web-based game, implementing software design principles and Agile development methodologies for seamless gameplay experiences.',
    githubLink: 'https://github.com/your_username/project1',
  },
];

const HomePage = () => {
  return (
    <>
      <ParticleBackground />
      <Container style={{ position: 'relative', color: 'white', textAlign: 'center', fontSize: '3rem' }}>
        <div className='header'>
          <Sparkles
            color="red"
            count={20}
            minSize={7}
            maxSize={12}
            overflowPx={80}
            fadeOutSpeed={30}
            flicker={false}
          />
          <h1>Hi! I am Aziz</h1>
          <TypeLoop />
          <br />
          <br />
          <span className='second-bio'>Right now, I am studying Bachelor of Computer Science at UNSW while working as a student mentor at the same time</span>
          <br />
          <br />
          <br />
          <br />
          <span>My Projects  🚀</span>
          <br />
          <br />
          <div>
          <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {projects.map((project) => (
            <Grid item lg={4} key={project.id}>
              <Card className="card-container" sx={{ maxWidth: 400, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardMedia
                  sx={{ height: 0, paddingTop: '100%' }} // Square shape (height is set to 0, paddingTop is set to 100% to create a square)
                  image={project.image}
                  title="Project Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button href={project.githubLink} target="_blank" size="small">GitHub</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
          </div>
        </div>
      </Container>
    </>
  );
}

export default HomePage;
