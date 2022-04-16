import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import './button.css';
import { borders } from '@mui/system';
import { Modal } from 'react-responsive-modal';
import Stack from '@mui/material/Stack'; 
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';

const buttonStyles = {
    borderRadius: '50px',
    textTransform: 'capitalize',
    backgroundColor: '#ffffff',
    color: '#000000',
    pr: 3,
    pl: 3,
    pt: 3, 
    mt: 4,
    mb: 4
    
}

// startIcon={<RocketLaunchOutlinedIcon sx={{ color: '#949494', width: 30, height: 30 }} />}

export default function IconLabelButtons(){

    const handleClick = () => {
        window.open("https://calendly.com/d/pgcc-rgmr/introduction-call-orda-mobile-app-marketing-service?month=2022-04");
    }

    return(

        <div>
            <Stack sx={{ alignContent: 'center' }}>
            <Button onClick={handleClick} 
            sx={buttonStyles}
            variant="contained" 
            >
            <p>Sign up for growth — 40% off</p>
        </Button>
        </Stack>
        </div>
    )
        
}