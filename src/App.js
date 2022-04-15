import React from "react";
import './App.css';
import Grid from "./grid";
import 'react-responsive-modal/styles.css';
import './button.css';
import ButtonOne from "./ButtonOne";
import AuthorAvatars from "./Avatars";
import Box from "@mui/material/Box";
import GridTwo from "./GridTwo";
import OrdaLanding from "./OrdaLanding";
import GridThree from "./GridThree";
import Icon from '@mui/material/Icon';
import Stack from '@mui/material/Stack';
import MailOutlineIcon from '@mui/icons-material/MailOutline';



export default function App() {
  return (
    <Box className="App-header">


      <h1 class="text-7xl">Enhance your customer experience with Orda Creatives©</h1>
        <Box sx={{width: 600, textAlign: 'center'}}>
        <p>Expertly crafted marketing assets created for growth, customer loyalty, and audience engagement!</p>
        </Box>
        <ButtonOne />
        <AuthorAvatars />

        <Stack sx={{ alignItems: 'center', mt: 8 }} direction="row" spacing={1}>
          <MailOutlineIcon sx={{ width: 50, height: 50, mr: 2 }} />
          <h2>EMAILS</h2>
        </Stack>

        <Grid/>
    
        <Stack direction="column" alignItems="center">
        <Box sx={{width: 900}}>
          <h1>Our team creates campaigns that drive growth 🚀 
          </h1>
        </Box>

        <Box sx={{width: 600, textAlign: 'center' }}>
        <p>Let our team take care of your app launch marketing so you can focus on what matters most.</p>
        </Box>  
        </Stack>

        <ButtonOne />
        <GridTwo />
        <GridThree />
        <Box>

        </Box>
        
    </Box>
    

  );
}
