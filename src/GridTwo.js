import * as React from 'react';
import './App.css';
import Box from "@mui/material/Box";
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import Stack from '@mui/material/Stack';
import ApolloBurger from './ApolloBurger';
import BlendedAppScreens from './BlendedAppScreens';
import HeaderTitlesIcons from './HeaderTitlesIcons';

export default function GridTwo() {

  return (

    <div>
      
        <Box sx={{ mt: 10 }} className='container'>
          <Box sx={{ textAlign: 'center' }}><HeaderTitlesIcons 
        icon={<PhoneIphoneOutlinedIcon 
        sx={{ width: 50, height: 50, mr: 2 }} />} 
        text={"MOBILE APP DESIGN"} /></Box>
        <ApolloBurger />
        <BlendedAppScreens />
        <Box></Box>
        <Box></Box>
        
    </Box>
    </div>
  );
}