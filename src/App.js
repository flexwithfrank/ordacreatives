import React from "react";
import './App.css';
import Grid from "./grid";
import 'react-responsive-modal/styles.css';
import './button.css';
import AuthorAvatars from "./Avatars";
import Box from "@mui/material/Box";
import GridTwo from "./GridTwo";
import GridThree from "./GridThree";
import Stack from '@mui/material/Stack';
import PartnerLogos from './PartnerLogos';
import HeroSectionReuseable from "./HeroSectionReusable";
import HeroSectionReuseableV2 from "./HeroSectionReusableV2";
import InfoCards from "./InfoCards";
import NavBar from "./NavBar";
import CustomAppBar from './CustomAppBar'

const message = {
    headerOne: <h1>Enhance your customer experience with Orda Creatives©</h1>,
    description: <p>Expertly crafted marketing assets created for growth, customer loyalty, and audience engagement.</p>
}

const messageTwo = {
    headerOne: <h1>Drive your growth with Orda Creatives© </h1>,
    description: <p>Let our team take care of your app launch marketing so you can focus on what matters most.</p>
}

const cardOne = {
  media: "/images/creator-2.png",
  text1: <span>App launch marketing</span>,
  text2: <span>Our results driven approach will get usage</span>,
  button: "Learn More"
}
const cardTwo = {
  media: "/images/creator-3.png",
  text1: <span>Social media marketing</span>,
  text2: <span>We'll take charge of your app growth</span>,
  button: "Learn More"
}
const cardThree = {
  media: "/images/creator-4.png",
  text1: <span>Email + SMS marketing</span>,
  text2: <span>Your secret weapon is in your customers pocket. We'll reach them</span>,
  button: "Learn More"
}



export default function App() {
  return (

    <div>
        <CustomAppBar />
      <Box className="App-header">
      {/* section one hero */}

      <Box sx={{ pt: 15 }}>
      <HeroSectionReuseable 
      header={message.headerOne} 
      des={message.description} />
      </Box> 

      {/* avatars */}
      <AuthorAvatars />

      {/* info service cards */}
      <Stack sx={{ mt: 10 }} direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 2, md: 4 }}>
      <InfoCards 
      med={cardOne.media}
      txt1={cardOne.text1}
      txt2={cardOne.text2}
      btn={cardOne.button} />
      <InfoCards 
      med={cardTwo.media}
      txt1={cardTwo.text1}
      txt2={cardTwo.text2}
      btn={cardTwo.button} />
      <InfoCards 
      med={cardThree.media}
      txt1={cardThree.text1}
      txt2={cardThree.text2}
      btn={cardThree.button} />
      </Stack>

        <Grid/>
        <PartnerLogos />

        <Box sx={{ p: 10, borderRadius: 10 }} id="gradient-1">
          <HeroSectionReuseableV2 
        header={messageTwo.headerOne} 
        des={messageTwo.description}
        img={"/images/coffee-1.png"} />
        </Box>

        <GridTwo />
        <GridThree />
        <Box>
        </Box>
        
    </Box>

    </div>
    
    

  );
}
