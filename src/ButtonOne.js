import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'; 

const buttonStyles = {
    borderRadius: '50px',
    textTransform: 'capitalize',
    backgroundColor: '#ffffff',
    color: '#000000'
}

// startIcon={<RocketLaunchOutlinedIcon sx={{ color: '#949494', width: 30, height: 30 }} />}

export default function IconLabelButtons(){

    const handleClick = () => {
        window.open("https://calendly.com/d/pgcc-rgmr/introduction-call-orda-mobile-app-marketing-service?month=2022-04");
    }

    return(

        <div>
            <Stack sx={{ mb: 5, mt: 2, alignContent: 'center' }}>
            <Button onClick={handleClick} 
            style={buttonStyles}
            variant="contained" 
            >
            <p>Sign up for growth — 40% off</p>
        </Button>
        </Stack>
        </div>
    )
        
}