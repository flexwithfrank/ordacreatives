import * as React from 'react';
import './App.css';
import Box from "@mui/material/Box";
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import Stack from '@mui/material/Stack';
import ApolloBurger from './ApolloBurger';
import BlendedAppScreens from './BlendedAppScreens';

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