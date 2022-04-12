import * as React from 'react';
import './App.css';
import frankieAvatar from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/oink.png';
import AvatarOne from '../src/avatar-1.png';
import AvatarTwo from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/avatar-2.png';
import AvatarThree from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/avatar-3.png';
import AvatarFour from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/avatar-4.png';
import Box from "@mui/material/Box";
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import Stack from '@mui/material/Stack';
import ApolloBurger from './ApolloBurger';
import BlendedAppScreens from './BlendedAppScreens';

const headerStyles = {
    fontSize: "24px",
    textAlign: 'left'
}

const chipFontsWhite = {
        fontFamily: 'Josefin Sans',
        color: '#ffffff',
    }
const chipFontsBlack = {
    fontFamily: 'Josefin Sans',
    color: '#000000'
}

const designerOne = {
    src: frankieAvatar,
    label: "Design by Frankie Rodriguez",
}

const designerTwo = {
    src: AvatarOne,
    label: "Design by Cherry Tomlin"
}

const designerThree = {
    src: AvatarThree,
    label: "Design by Greta Quinn"
}
const designerFour = {
    src: AvatarFour,
    label: "Design by Morris Cantana"
}

const designerFive = {
    src: AvatarTwo,
    label: "Design by Chris Encinado"
}

const Item = {
backgroundColor: "ffffff"
}

const apolloText = {
    text: <p>Description</p>,
    header: <h1>HEADER</h1>
}
export default function GridTwo() {

  return (

    <div>
        <Box>
        <Stack sx={{ justifyContent: 'center', 
        alignItems: 'center', mt: 4, mb: 8 }} 
        direction="row" spacing={1}>

        <PhoneIphoneOutlinedIcon sx={{ width: 50, height: 50, mr: 2 }} />
          <h2>Mobile App Design</h2>
        </Stack>  
        </Box>

        <Box className='container'>
        <ApolloBurger />
        <BlendedAppScreens />
        <Box></Box>
        <Box></Box>
        
    </Box>
    </div>
  );
}