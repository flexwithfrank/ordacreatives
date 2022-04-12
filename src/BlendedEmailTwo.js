import * as React from 'react';
import './App.css';
import './styles/output.css';
import frankieAvatar from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/oink.png';
import AvatarOne from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/avatar-1.png';
import AvatarTwo from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/avatar-2.png';
import AvatarThree from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/avatar-3.png';
import AvatarFour from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/avatar-4.png'; 
import AvatarFive from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/avatar-4 (2).png';
import AvatarSix from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/avatar-5.png';
import blendedEmailTwoFull from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/blended-email-22.png';
import blendedEmailTwoShort from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/blended-email-22 copy.png';
import { Modal } from 'react-responsive-modal';
import Box from "@mui/material/Box";
import Chip from '@mui/material/Chip';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AvatarDesigners from './AvatarDesigners';
import StoreIcon from '@mui/icons-material/Store';
import IconChips from './IconChip';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ComputerIcon from '@mui/icons-material/Computer';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
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
    label: "Design by Allison Brookes"
}

const designerSix = {
    src: AvatarFive,
    label: "Design by Lilly Torrino"
}
const designerSeven = {
    src: AvatarSix,
    label: "Design by Rodrigo Sanchez"
}

const blendedDescription = {
    text: <p>"Blended is rapidly growing with the marketing strategies 
            created by the Orda Creatives Team"</p>, 
    header: <h1>BLENDED</h1> 
}

export default function BlendedEmailTwo() {
    
        const [open4, setOpen4] = React.useState(false);
    
    return(
        <div>
        <Box>
             <Box>
            <img className='item' 
            src={blendedEmailTwoShort} 
            alt="email-4" 
            onClick={() => setOpen4(true)} />

            <Chip style={chipFontsBlack} 
             icon={<RestaurantIcon />} 
             label="Food &amp; Beverage" 
             sx={{backgroundColor: 'white', mt: '1rem'}} />

        </Box>
            
        </Box>

        {/* modal */}

        {/* blended modal one */}

        <Modal open={open4} onClose={() => setOpen4(false)}>
            <h1 style={headerStyles}>Blended Juice Bar</h1>
            <Stack direction="row" spacing={1}>
                <AvatarDesigners src={designerOne.src} label={designerOne.label} />
                <Chip style={chipFontsBlack} 
                icon={<RestaurantIcon style={{ color: '1C6DD0'}}  />} 
                label="Food &amp; Beverage" 
                variant="outlined" />

                <Chip style={chipFontsBlack} 
                icon={<StoreIcon style={{ color: '1C6DD0'}}  />} 
                label="Based in Seattle" 
                variant="outlined" />
                </Stack>

                <Stack direction="row" spacing={1} sx={{mt: 1}}>
                <Chip style={chipFontsBlack} 
                icon={<TrendingUpIcon style={{ color: 'A8DF65'}} />} 
                label="3 locations and growing" 
                variant="outlined" />

                <Chip style={chipFontsBlack} 
                icon={<LaptopMacIcon style={{ color: 'FF6B6B'}} />} 
                label="Full stack solution" 
                variant="outlined" />

                <Chip style={chipFontsBlack} 
                icon={<FavoriteBorderOutlinedIcon style={{ color: 'E60965'}} />} 
                label="Customer since 2016" 
                variant="outlined" />
                
            </Stack>
                

            <img className='item' 
            src={blendedEmailTwoFull} 
            alt="blended-two" />
        </Modal>

        </div>

    );
}