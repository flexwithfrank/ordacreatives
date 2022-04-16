import * as React from 'react';
import './App.css';
import Box from "@mui/material/Box";
import 'react-responsive-modal/styles.css';
import ApolloBurger from './ApolloBurger';
import BlendedAppScreens from './BlendedAppScreens';
import HeaderTitlesIcons from './HeaderTitlesIcons';
import CheckIcon from '@mui/icons-material/Check';
import TacosDevice from './TacosDevice';


export default function GridTwo() {

  return (

    <div>
      
        <Box sx={{ mt: 15 }} className='container'>
          <Box><HeaderTitlesIcons 
        icon={<CheckIcon 
        sx={{ width: 50, height: 50, fontSize: 38 }} />} 
        text={"Mobile app design and brand identity"} /></Box>
        <ApolloBurger />
        <BlendedAppScreens />
        <TacosDevice />
        
    </Box>
    </div>
  );
}