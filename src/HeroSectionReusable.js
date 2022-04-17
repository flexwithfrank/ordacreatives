import React from "react";
import './App.css';
import 'react-responsive-modal/styles.css';
import './button.css';
import Stack from '@mui/material/Stack';
import ButtonOne from "./ButtonOne";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';





export default function HeroSectionReuseable({ header, des }) {
    return(

         <div>
        <Stack sx={{ p: 2, alignItems: 'center' }} direction="column">

            <Typography sx={{ typography: { sm: 'body1', xs: 'body2' } }}  variant="h1" component="div">
                <Box sx={{ p: 3, 
                    maxWidth: 800, 
                    textAlign: 'center' }} >
                    {header}
                 </Box>
            </Typography>
            
            <Box sx={{ p: 2, maxWidth: 600, 
            textAlign: 'center', 
            alignItems: 'center' }}>
                <p>{des}</p>
            </Box>
         <ButtonOne /> 
        </Stack>
        </div>

    );
}