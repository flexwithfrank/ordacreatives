import * as React from 'react';
import './App.css';
import './styles/output.css';
import frankieAvatar from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/oink.png';
import AvatarOne from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/avatar-1.png';
import AvatarTwo from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/avatar-2.png';
import AvatarThree from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/avatar-3.png';
import AvatarFour from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/avatar-4.png';
import ordaLanding from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/orda-landing.png';
import ordaLandingFull from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/getorda-landing-2.png';
import { Modal } from 'react-responsive-modal';
import Box from "@mui/material/Box";
import Chip from '@mui/material/Chip';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AvatarDesigners from './AvatarDesigners';
import StoreIcon from '@mui/icons-material/Store';
import IconChips from './IconChip';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import Stack from '@mui/material/Stack';

const headerStyles = {
    fontSize: "24px",
    textAlign: 'left'
}

const chipFontsWhite = {
        fontFamily: 'Josefin Sans',
        color: '#ffffff',
    }
const chipFontsBlack = {
    fontFamily: 'Josefin Sans',
    color: '#000000'
}

const designerOne = {
    src: frankieAvatar,
    label: "Design by Frankie Rodriguez",
}

const designerTwo = {
    src: AvatarOne,
    label: "Design by Cherry Tomlin"
}

const designerThree = {
    src: AvatarThree,
    label: "Design by Greta Quinn"
}
const designerFour = {
    src: AvatarFour,
    label: "Design by Morris Cantana"
}

const designerFive = {
    src: AvatarTwo,
    label: "Design by Chris Encinado"
}

export default function OrdaLanding() {

    const [open3, setOpen3] = React.useState(false);
    return(
        <div>

        <Box>
            <img className='item' 
            src={ordaLanding} 
            alt="email-3" 
            onClick={() => setOpen3(true)} />

            <Chip style={chipFontsBlack} 
             icon={<LaptopMacIcon />} 
             label="Digital Marketing SaaS" 
             sx={{backgroundColor: 'white', mt: '1rem'}} />
        </Box>

        {/* orda modal */}

         <Modal open={open3} onClose={() => setOpen3(false)}> 

         <h1 style={headerStyles}>Get Orda </h1>
            <Stack direction="row" spacing={1}>
                <AvatarDesigners src={designerOne.src} label={designerOne.label} />
                <Chip style={chipFontsBlack} 
                icon={<RocketLaunchOutlinedIcon style={{ color: '1C6DD0'}}  />} 
                label="Digital Saas startup" 
                variant="outlined" />

                <Chip style={chipFontsBlack} 
                icon={<StoreIcon style={{ color: '1C6DD0'}}  />} 
                label="Based in New York" 
                variant="outlined" />
                </Stack>

                <Stack direction="row" spacing={1} sx={{mt: 1}}>
                <Chip style={chipFontsBlack} 
                icon={<TrendingUpIcon style={{ color: 'A8DF65'}} />} 
                label="1200% increase monthly traffic" 
                variant="outlined" />

                <Chip style={chipFontsBlack} 
                icon={<LaptopMacIcon style={{ color: 'FF6B6B'}} />} 
                label="Full stack solution offering" 
                variant="outlined" />

                <Chip style={chipFontsBlack} 
                icon={<FavoriteBorderOutlinedIcon style={{ color: 'E60965'}} />} 
                label="Customer since 2018" 
                variant="outlined" />

            </Stack>
            <img className='item' 
            src={ordaLandingFull} 
            alt="orda-landing-page" />
        </Modal>

         </div>
    );
}