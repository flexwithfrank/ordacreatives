import * as React from 'react';
import './App.css';
import './styles/output.css';
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import IconButtons from './IconButtons';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const partnerHeader = {
    header: <p></p>
}


export default function PartnerLogos() {
    return(
        <div>
            <Box sx={{ justifyContent: 'center', 
            alignItems: 'center', 
            textAlign: 'center' }}>
                <span>{partnerHeader.header}</span>
            </Box>
            <Stack sx={{ mt: 10, alignItems: 'center' }} direction={{ xs: 'column', sm: 'row' }} spacing={10}>
            <Box sx={{ maxWidth: 300 }}>
                <img src={"/images/pc-logo-2.png"} alt="partner-logo-1" />
            </Box>
            <Box sx={{ maxWidth: 250 }}>
                <img src={"/images/chick-logo.png"} alt="partner-logo-2" />
            </Box>
            <Box sx={{ maxWidth: 250 }}>
                <img src={"/images/ritual-logo-2.png"} alt="partner-logo-3" />
            </Box>
            <Box sx={{ maxWidth: 150 }}>
                <img src={"/images/flip-sigi-logo.png"} alt="partner-logo-4" />
            </Box>
        </Stack>

        <Stack sx={{ alignItems: 'center', mt: 5 }} direction={{ xs: 'column', sm: 'row' }} spacing={15}>
            <Box sx={{ maxWidth: 250 }}>
                <img src={"/images/b-logo.png"} alt="partner-logo-5" />
            </Box>
            <Box sx={{ maxWidth: 150 }}>
                <img src={"/images/chi-chi-logo.png"} alt="partner-logo-6" />
            </Box>
            <Box sx={{ maxWidth: 150 }}>
                <img src={"/images/lazy-logo.png"} alt="partner-logo-7" />
            </Box>
            <Box sx={{ maxWidth: 150 }}>
                <img src={"/images/meta-logo.png"} alt="partner-logo-8" />
            </Box>
        </Stack>
        <Box sx={{ mb: 10 }}>
            <IconButtons btn={<ArrowCircleRightOutlinedIcon 
            sx={{ width:  60, height: 60 }} />} 
            txt={"Launch like big brands did"} />
        </Box>
        
            
        </div>
        

    );
}
