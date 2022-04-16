import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const buttonStylesV2 = {
    textTransform: 'capitalize',
    
}

export default function ButtonV2({ txt }) {

  const handleClick = () => {
    window.open("https://calendly.com/d/pgcc-rgmr/introduction-call-orda-mobile-app-marketing-service?month=2022-04")
  }
  return (
    <Stack direction="row" spacing={2}>
      <Button onClick={handleClick} sx={{ color: "#ffffff", border: 2 }} variant="outlined">
        <span style={buttonStylesV2} className='button-text'>{txt}</span>
      </Button>
    </Stack>
  );
}
