import * as React from 'react';
import './App.css';
import Box from "@mui/material/Box";
import 'react-responsive-modal/styles.css';
import OrdaLanding from './OrdaLanding';
import Lazy from './Lazy';
import HeaderTitlesIcons from './HeaderTitlesIcons';
import CheckIcon from '@mui/icons-material/Check';
import BlendedWebOrdering from './BlendedWebOrdering';



export default function GridThree() {

  return (

        <Box sx={{ alignContent: 'center', 
              borderRadius: 5, 
              mt: 5, mb: 10, p: 5, 
              maxWidth: 1400 }} 
              className='bg-color-1'>
          <Box className='container'>
          <Box><HeaderTitlesIcons 
              icon={<CheckIcon 
              sx={{ width: 50, height: 50, fontSize: 38 }} />} 
              text={"Website design and digital media"} /></Box>
          <OrdaLanding />
          <Lazy />
          <BlendedWebOrdering />

            <div></div>
            <div></div>
            </Box>
        </Box>
        
  );
}