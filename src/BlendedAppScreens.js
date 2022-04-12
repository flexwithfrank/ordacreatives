
import * as React from 'react';
import './App.css';
import frankieAvatar from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/oink.png';
import BlendedDevice from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/iPhoneX_Mockup-blended.png';
import AvatarOne from '../src/avatar-1.png';
import AvatarTwo from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/avatar-2.png';
import AvatarThree from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/avatar-3.png';
import AvatarFour from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/avatar-4.png';
import ApolloDevice from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/x-4.png';
import AppScreenOne from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/screenshot1.png';
import AppScreenTwo from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/screenshot2.png';
import AppScreenThree from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/screenshot3.png';
import AppScreenFour from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/screenshot4.png';
import AppScreenFive from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/screenshot5.png';
import AppScreenSix from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/screenshot6.png';
import AppScreenSeven from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/screenshot7.png';
import AppScreenEight from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/screenshot8.png';
import { Modal } from 'react-responsive-modal';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
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
    label: "Design by Chris Encinado"
}

const Item = {
backgroundColor: "ffffff"
}

const apolloText = {
    text: <p>Blended is located in the heart of Seattle.
        They have seen a huge increase in online
        engagement since launching their Rewards Platform © in 2018
    </p>,
    header: <h1>Blended Juice Bar</h1>
}

export default function BlendedAppScreens() {

    const [open21, setOpen21] = React.useState(false);

    return(
        <Box>
            <img className='item'
            src={BlendedDevice} 
            alt='webpage-one' 
            onClick={() => setOpen21(true)} />

            <Chip style={chipFontsBlack} 
             icon={<PhoneIphoneOutlinedIcon />} 
             label="Mobile App design" 
             sx={{backgroundColor: 'white', mt: '1rem'}} />

                <Modal open={open21} onClose={() => setOpen21(false)}>
            <span>{apolloText.header}</span>
            <span>{apolloText.text}</span>
            <Stack direction="row" spacing={1}>
                <AvatarDesigners src={designerOne.src} label={designerOne.label} />
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
                icon={<TrendingUpIcon style={{ color: 'A8DF65'}} />} 
                label="12 locations and growing" 
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
                <div className='rueContainerModal'>

                <img className='item' 
                src={AppScreenOne} 
                alt="b-two" />

                <img className='item' 
                src={AppScreenTwo} 
                alt="b-two" />

                <img className='item' 
                src={AppScreenThree} 
                alt="b-two" />

                <img className='item' 
                src={AppScreenFour} 
                alt="b-two" />

                <img className='item' 
                src={AppScreenFive} 
                alt="b-two" />

                <img className='item' 
                src={AppScreenSix} 
                alt="b-two" />

                <img className='item' 
                src={AppScreenSeven} 
                alt="b-two" />

                <img className='item' 
                src={AppScreenEight} 
                alt="b-two" />

                </div>
            </Stack>
            
        </Modal>

        </Box>

    );
}



