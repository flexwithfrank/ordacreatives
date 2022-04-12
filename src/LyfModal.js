import * as React from 'react';
import './App.css';
import './styles/output.css';
import frankieAvatar from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/oink.png';
import AvatarOne from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/avatar-1.png';
import AvatarTwo from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/avatar-2.png';
import AvatarThree from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/avatar-3.png';
import AvatarFour from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/avatar-4.png';
import lyfEmailShort from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/lyf-email-short-1.png';
import lyfEmailFull from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/lyf-email-full-1.png'
import lyfDevice from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/lyf-phone.png';
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
import Grid from './grid';

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

const lyfText = {
    text: <p>Game changing lifestyle branding looking for 
        an edge in customer aquistion. We created a mobile app
        and marketing campaign which drove results
    </p>,
    header: <h1>LYF Performance</h1>
}


export default function LyfModal() {

    const [open6, setOpen6] = React.useState(false);

    return(
            
        <Box>
            <img className='item' 
            src={lyfEmailShort} 
            alt='webpage-one' 
            onClick={() => setOpen6(true)} />

            <Chip style={chipFontsBlack} 
             icon={<ShoppingBagOutlinedIcon />} 
             label="Retail &amp; Ecommerce" 
             sx={{backgroundColor: 'white', mt: '1rem'}} />

                <Modal open={open6} onClose={() => setOpen6(false)}>
            <span>{lyfText.header}</span>
            <span>{lyfText.text}</span>
            <Stack direction="row" spacing={1}>
                <AvatarDesigners src={designerThree.src} label={designerThree.label} />
                <Chip style={chipFontsBlack} 
                icon={<RestaurantIcon style={{ color: '1C6DD0'}}  />} 
                label="Food &amp; Beverage" 
                variant="outlined" />

                <Chip style={chipFontsBlack} 
                icon={<StoreIcon style={{ color: '1C6DD0'}}  />} 
                label="Based in New York" 
                variant="outlined" />
                </Stack>

                <Stack direction="row" spacing={1} sx={{mt: 1}}>
                <Chip style={chipFontsBlack} 
                icon={<MailOutlineIcon style={{ color: 'A8DF65'}} />} 
                label="55% email open-rate" 
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
            <Stack direction="column" spacing={1}>
                <img className='item' 
                src={lyfDevice} 
                alt="lyf-two" />
                <img className='item' 
                src={lyfEmailFull} 
                alt="lyf-two" />
            </Stack>
            
        </Modal>

        </Box>
        
    );
}