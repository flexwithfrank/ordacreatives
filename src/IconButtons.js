import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';


export default function IconButtons({ btn, txt }) {
  const handleClick = () => {
    window.open("https://calendly.com/d/pgcc-rgmr/introduction-call-orda-mobile-app-marketing-service?month=2022-04")
  }
  return (
    <Stack sx={{ mt: 4, alignItems: 'center', justifyContent: 'center' }} direction="row" spacing={1}>
      <IconButton onClick={handleClick} sx={{ color: '#ffffff' }} aria-label="delete">
        <Box sx={{ mr: 2 }}><span className='button-text'>{txt}</span></Box>
        {btn}
      </IconButton>
    </Stack>
  );
}