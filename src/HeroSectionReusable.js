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
        <Stack sx={{alignItems: 'center' }} direction="column">

            <Typography sx={{
                    maxWidth: 1000, 
                    textAlign: 'center',
                    fontSize: {
                    lg: 48,
                    md: 32,
                    sm: 32,
                    xs: 32
                    }}}   
                    variant="h1">
                        <span>{header}</span>
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