import React from "react";
import './App.css';
import Grid from "./grid";
import "react-responsive-modal/styles.css";
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
import CustomAppBar from './CustomAppBar';
import BottomNav from "./BottomNav";
import HeroSectionReuseableV3 from "./HeroSectionReusableV3";
import LaunchSteps from "./LaunchSteps";
 

const message = {
    headerOne: <h1>Grow your app downloads and engagement</h1>,
    description: <p>Expertly crafted marketing assets created for growth, customer loyalty, and audience engagement.</p>
}

const messageTwo = {
    headerOne: <h1>Drive your growth with Orda creative partners </h1>,
    description: <p>Let our team take care of your app launch marketing so you can focus on what matters most.</p>
}
const messageThree = {
    headerOne: <h1>Launch with Orda Creatives©</h1>,
    description: <p>Results driven marketing for your app</p>
}


const cardOne = {
  media: "/images/infoCard-app.png",
  text1: <span>App launch marketing</span>,
  text2: <span>From app store listing to customer downloads. We'll handle it all.</span>,
  button: "Get Started — it's easy"
}
const cardTwo = {
  media: "/images/infoCard-web.png",
  text1: <span>Email + SMS marketing</span>,
  text2: <span>We'll supercharge your marketing for max egagement</span>,
  button: "Get Started — it's easy"
}
const cardThree = {
  media: "/images/infoCard-signage.png",
  text1: <span>Physical Signage</span>,
  text2: <span>Customized signage for every use case.</span>,
  button: "Get Started — it's easy"
}

const btnActionOne = () => {
  window.open('https://calendly.com/d/pgcc-rgmr/introduction-call-orda-mobile-app-marketing-service?month=2022-04')
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
      btn={cardOne.button}
      act={btnActionOne} />
      <InfoCards 
      med={cardTwo.media}
      txt1={cardTwo.text1}
      txt2={cardTwo.text2}
      btn={cardTwo.button}
      act={btnActionOne} />
      <InfoCards 
      med={cardThree.media}
      txt1={cardThree.text1}
      txt2={cardThree.text2}
      btn={cardThree.button}
      act={btnActionOne} />
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
        <Box sx={{ p: 0, mb: 5, borderRadius: 10 }} id="gradient-2">
          <HeroSectionReuseableV3
        header={messageThree.headerOne} 
        des={messageThree.description}
        img={"/images/qsr-device.png"}
         />
         </Box>
        
        <LaunchSteps />
    </Box>
    <BottomNav />
    </div>
    
    

  );
}
