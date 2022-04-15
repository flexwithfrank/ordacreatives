import * as React from 'react';
import './App.css';
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import OrdaLanding from './OrdaLanding';
import Lazy from './Lazy';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

export default function GridThree() {

    const [open20, setOpen20] = React.useState(false);
  return (

    <Box>
        <Stack sx={{ justifyContent: 'center', alignItems: 'center', mt: 8, mb: 8 }} direction="row" spacing={1}>
        <LanguageOutlinedIcon sx={{ width: 50, height: 50, mr: 2 }} />
          <h2>Landing Page Design</h2>
        </Stack>

        <Box className='container'>
        <OrdaLanding />
        <Lazy />

        <div></div>
        <div></div>
    </Box>
    </Box>
  );
}