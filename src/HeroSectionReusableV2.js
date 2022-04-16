import React from "react";
import './App.css';
import 'react-responsive-modal/styles.css';
import './button.css';
import Stack from '@mui/material/Stack';
import ButtonOne from "./ButtonOne";
import Box from "@mui/material/Box";
import ButtonV2 from "./ButtonV2";
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';




export default function HeroSectionReuseableV2({ header, des, img }) {
    return(

         <div>
        <Stack sx={{ alignItems: 'center', maxWidth: 1200 }} direction={{ xs: 'column', sm: 'row' }} spacing={5}>
            {/* left column */}

            <Stack direction="column">
                <Box><h1>{header}</h1></Box>
                <Box sx={{ maxWidth: 600, 
                textAlign: 'left', 
                alignItems: 'center' }}>
                <p style={{fontSize: "24px"}}>{des}</p>
                </Box>
                <ButtonV2 txt="Get Started with Orda" icn={<CelebrationOutlinedIcon />} /> 
            </Stack>

            {/*  right column */}
                <Box sx={{ maxWidth: 500 }} direction="column">
                <img style={{ borderRadius: '25px'}} src={img} />
                </Box>

             </Stack>
        
        </div>

    );
}