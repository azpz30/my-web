import React from 'react';
import {AppBar, Toolbar, Avatar, Typography, Stack, Button} from '@mui/material'
import '../App.css';
import icon1 from './dexter.jpeg'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate('/')
  }

  return (
    <AppBar position='static' style={{ background: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        <Avatar
          alt="Dexter"
          src={icon1}
          sx={{ width: 42, height: 42}}
        />
        <Typography variant='h6' component='div' sx={{flexGrow: 1}}>

        </Typography>
        <Stack direction='row' spacing={2}>
          <Button color='inherit' onClick={handleHome}>Home</Button>
          <Button color='inherit' >Projects</Button>
          <Button color='inherit'>Blog</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;