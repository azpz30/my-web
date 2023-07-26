import React from 'react';
import { Container } from 'react-bootstrap';
import ParticleBackground from './particles';
import TypeLoop from './Type';
import Sparkles from 'react-sparkle'
import dexter from './dexter.jpeg'
import Grid from '@mui/material/Grid';
import { Box, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

const HomePage = () => {
    return (
        <>
        <ParticleBackground />
        <Container style={{position: 'relative', color: 'white', textAlign: 'center', fontSize: '3rem'}}>
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
                {/* <img src={logo} alt='my_pic' className='my-pic'/> */}
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
                    <Grid item lg={12}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 300 }}
                            image={dexter}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                    </Grid>
                    {/* <Grid item lg={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 300 }}
                            image={dexter}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                    </Grid>
                    <Grid item lg={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 300 }}
                            image={dexter}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                    </Grid> */}
            </Grid>
            </Box>
                </div>
            </div>
        </Container>
        </>
      )
}

export default HomePage;