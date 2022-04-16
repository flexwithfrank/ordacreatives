import React from "react";
import './App.css';
import 'react-responsive-modal/styles.css';
import './button.css';
import ButtonOne from "./ButtonOne";
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';

{/* <Box><HeaderTitlesIcons 
        icon={<MarkEmailReadOutlinedIcon 
        sx={{ width: 50, height: 50, mr: 2 }} />} 
        text={"Beatifully designed emails"} /></Box> */}


export default function HeaderTitlesIcons({icon, text}) {
    return(

        <div>
       <Stack sx={{ alignItems: 'center', mt: 8 }} direction="row" spacing={1}>
          <Box>{icon}</Box>
          <h1>{text}</h1>
        </Stack>
        </div>

    );
}