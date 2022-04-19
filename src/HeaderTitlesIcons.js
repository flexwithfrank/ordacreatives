import React from "react";
import './App.css';
import 'react-responsive-modal/styles.css';
import './button.css';
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


{/* <Box><HeaderTitlesIcons 
        icon={<MarkEmailReadOutlinedIcon 
        sx={{ width: 50, height: 50, mr: 2 }} />} 
        text={"Beatifully designed emails"} /></Box> */}


export default function HeaderTitlesIcons({icon, text}) {
    return(

        <div>
       <Stack sx={{ alignItems: 'center', mt: 8 }} direction="row" spacing={1}>
           <Box>{icon}</Box>
           <Typography sx={{ 
                    textAlign: 'left',
                    fontSize: {
                    lg: 48,
                    md: 32,
                    sm: 32,
                    xs: 32
                    }}}   
                    variant="h1">
                        <span className="vaulto">{text}</span>
            </Typography>
          
        </Stack>
        </div>

    );
}