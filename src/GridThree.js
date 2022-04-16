import * as React from 'react';
import './App.css';
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import OrdaLanding from './OrdaLanding';
import Lazy from './Lazy';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import HeaderTitlesIcons from './HeaderTitlesIcons';

export default function GridThree() {

    const [open20, setOpen20] = React.useState(false);
  return (

        <Box className='container'>
        <Box><HeaderTitlesIcons 
        icon={<LanguageOutlinedIcon 
        sx={{ width: 50, height: 50, mr: 2 }} />} 
        text={"EMAILS"} /></Box>
        <OrdaLanding />
        <Lazy />

        <div></div>
        <div></div>
    </Box>
  );
}