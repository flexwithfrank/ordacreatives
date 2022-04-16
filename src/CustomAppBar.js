import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import GestureIcon from '@mui/icons-material/Gesture';

export default function CustomAppBar() {

  const handleClick = () => {
    window.open('https://calendly.com/d/pgcc-rgmr/introduction-call-orda-mobile-app-marketing-service?month=2022-04')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "#101827" }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
          >
            <GestureIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <span className='visage'>Orda Creatives</span>
          </Typography>
          <Button onClick={handleClick} color="inherit"><span className='visage'>Sign Up Now</span></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}