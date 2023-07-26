import React from 'react';
import { Container } from 'react-bootstrap';
import ParticleBackground from './particles';
import TypeLoop from './Type';
import Sparkles from 'react-sparkle'
import dexter from './dexter.jpeg'
import Grid from '@mui/material/Grid';
import { Box, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

const projects = [
  {
    id: 1,
    image: dexter,
    title: 'Project 1',
    description: 'Description of Project 1svfovubfoubvwoufvbvwowufb',
    githubLink: 'https://github.com/your_username/project1',
  },
  {
    id: 2,
    image: dexter,
    title: 'Project 2',
    description: 'Description of Project 2',
    githubLink: 'https://github.com/your_username/project1',
  },
  {
    id: 3,
    image: dexter,
    title: 'Project 3',
    description: 'Description of Project 3',
    githubLink: 'https://github.com/your_username/project1',
  },
  // Add more project objects as needed
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
