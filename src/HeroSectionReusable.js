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

            <Typography sx={{ pr: 2, pl: 2,
                    maxWidth: 800, 
                    textAlign: 'center',
                    fontSize: {
                    lg: 48,
                    md: 20,
                    sm: 20,
                    xs: 20
                    }}}   
                    variant="h1">
                        {header}
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