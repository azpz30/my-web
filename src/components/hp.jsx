import React, { useState } from 'react';
import ParticleBackground from './particles';
import TypeLoop from './Type';
import Sparkles from 'react-sparkle'
import brainPic from './bigbrain.png'
import linkedinPic from './lk.svg'
import flaskpic from './flask.png'
import dd from './dungeon.png'
import covid from './covidDashboard.png'
import corr_movie from './corr_movie.png'
import Grid from '@mui/material/Grid';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Container } from '@mui/material';
import { IoReloadCircle } from 'react-icons/io5';
import NavBar from './NavBar';
// import Footer from './Footer';

const projects = [
  {
    id: 1,
    image: brainPic,
    title: 'Kahoot Quiz Game Clone (Front-end) - React Js',
    description: 'Developed a captivating and interactive Kahoot quiz game clone using React, Redux, and RESTful API integration, offering an engaging learning experience.',
    githubLink: 'https://forms.gle/BoyMRtQB5iDNRnsNA',
  },
  {
    id: 2,
    image: linkedinPic,
    title: 'LinkedIn-Inspired Job Posting Website - Vanilla JS',
    description: 'Created a dynamic and user-friendly LinkedIn-inspired job posting website using Vanilla JS, HTML, and CSS, empowering job seekers and employers to connect effortlessly.',
    githubLink: 'https://forms.gle/BoyMRtQB5iDNRnsNA',
  },
  {
    id: 3,
    image: flaskpic,
    title: 'Microsoft Teams Backend Web Server - Python',
    description: 'Built a robust and efficient backend web server for a Microsoft Teams-like application using Python and REST APIs, facilitating seamless communication and collaboration among users.',
    githubLink: 'https://forms.gle/BoyMRtQB5iDNRnsNA',
  },
  {
    id: 4,
    image: dd,
    title: 'Web-Based Game Backend Application - Java',
    description: 'Developed a resilient Java backend for an engaging web-based game, implementing software design principles and Agile development methodologies for seamless gameplay experiences.',
    githubLink: 'https://forms.gle/BoyMRtQB5iDNRnsNA',
  },
  {
    id: 5,
    image: covid,
    title: 'Covid Data Analysis - SQL and Tableau',
    description: 'Conducted real-time analysis of COVID-19 data sourced from Our World in Data. Utilised SQL for data exploration. Used Tableau to transform raw data into actionable insights and dashboard for intuitive visualisation.',
    githubLink: 'https://github.com/azpz30/Covid-Data-Analysis',
  },
  {
    id: 6,
    image: corr_movie,
    title: 'Correlation in Movie Data - Python',
    description: 'Explored movie-related insights using Python, pandas, NumPy, seaborn, and matplotlib. Cleaned and structured data for accuracy and conducted correlation analysis. Unveiled movie industry dynamics through captivating visualizations, offering valuable insights into the relationship between budget, votes, and revenue.',
    githubLink: 'https://github.com/azpz30/Movie-Data-Analysis-Exploring-Correlations',
  },
];

const quotes = ["Right now, I am studying Bachelor of Computer Science at UNSW while working as a student mentor at the same time", "I spend too much time using different frontend frameworks", 
                "I'm struggling to shorten my list of things to watch, learn and do", "Life before Death, Strength before Weakness, Journey before Destination", "I'm moving very fast and breaking things",
                "Recently got into the world of Data Analysis and I love it"]

const HomePage = () => {

  const [quoteIndex, setQuoteIndex] = useState(0);
  // Function to change the text when the button is clicked
  const handleChangeText = () => {
    setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length); // Replace with your desired text
  };

  const bioText = quotes[quoteIndex];

  return (
    <>
      <ParticleBackground />
      <NavBar />
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
          {/* <span className='second-bio'>Right now, I am studying Bachelor of Computer Science at UNSW while working as a student mentor at the same time</span> */}
          <div className='centered-content'>
            <span className='second-bio'>{bioText}</span>
            <button onClick={handleChangeText} className="reload-button">
              <IoReloadCircle size={32} /> {/* Adjust the size as needed */}
            </button>
          </div>
          <br />
          <br />
          <span>My Projects  🚀</span>
          <br />
          <br />
          <div>
          <Container maxWidth="lg">
            <Grid container spacing={5}>
              {projects.map((project) => (
                <Grid item md={6} lg={4} key={project.id}>
                  <Card className="card-container" sx={{ maxWidth: 400, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <CardMedia
                      sx={{ height: 0, paddingTop: '100%' }}
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
                      <Button href={project.githubLink} className="github-button" target="_blank" size="small"><span>GitHub</span></Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
          </div>
        </div>
      </Container>
    </>
  );
}

export default HomePage;
