
import * as React from 'react';
import './App.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Box from "@mui/material/Box";
import Chip from '@mui/material/Chip';
import AvatarDesigners from './AvatarDesigners';
import StoreIcon from '@mui/icons-material/Store';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
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
    src: "/images/oink.png",
    label: "Design by Frankie Rodriguez",
}

const designerTwo = {
    src: "/images/avatar-1.png",
    label: "Design by Cherry Tomlin"
}

const designerThree = {
    src: "/images/avatar-3.png",
    label: "Design by Greta Quinn"
}
const designerFour = {
    src: "/images/avatar-4 (2).png",
    label: "Design by Morris Cantana"
}

const designerFive = {
    src: "/images/avatar-2.png",
    label: "Design by Chris Encinado"
}

const designerSix = {
    src: "/images/avatar-4 (2).png",
    label: "Design by Lilly Torrino"
}
const designerSeven = {
    src: "/images/avatar-5.png",
    label: "Design by Rodrigo Sanchez"
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
            src={"/images/iPhoneX_Mockup-blended.png"} 
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
                src={"/images/screenshot1.png"} 
                alt="b-two" />

                <img className='item' 
                src={"/images/screenshot2.png"} 
                alt="b-two" />

                <img className='item' 
                src={"/images/screenshot3.png"} 
                alt="b-two" />

                <img className='item' 
                src={"/images/screenshot4.png"} 
                alt="b-two" />

                <img className='item' 
                src={"/images/screenshot5.png"} 
                alt="b-two" />

                <img className='item' 
                src={"/images/screenshot6.png"} 
                alt="b-two" />

                <img className='item' 
                src={"/images/screenshot7.png"} 
                alt="b-two" />

                <img className='item' 
                src={"/images/screenshot8.png"} 
                alt="b-two" />

                </div>
            </Stack>
            
        </Modal>

        </Box>

    );
}



