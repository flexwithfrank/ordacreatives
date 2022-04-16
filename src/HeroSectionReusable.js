import React from "react";
import './App.css';
import 'react-responsive-modal/styles.css';
import './button.css';
import Stack from '@mui/material/Stack';
import ButtonOne from "./ButtonOne";
import Box from "@mui/material/Box";




export default function HeroSectionReuseable({ header, des }) {
    return(

         <div>
        <Stack sx={{ alignItems: 'center' }} direction="column">
            <Box sx={{ maxWidth: 1000, textAlign: 'center' }} ><h1>{header}</h1></Box>
            <Box sx={{ maxWidth: 600, 
            textAlign: 'center', 
            alignItems: 'center' }}>
                <p>{des}</p>
            </Box>
         <ButtonOne /> 
        </Stack>
        </div>

    );
}