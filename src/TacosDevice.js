
import * as React from 'react';
import './App.css';
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


const chipFontsBlack = {
    fontFamily: 'Josefin Sans',
    color: '#000000'
}
const designerOne = {
    src: "/images/oink.png",
    label: "Design by Frankie Rodriguez",
}

const apolloText = {
    text: <p>Apollo Burger is 12 location franchise and is rapidly growing.
        They entrusted us with their mobile app development and design. 
        We kept everything align with branding and messaging.
    </p>,
    header: <h1>Apollo Burger</h1>
}

export default function TacosDevice() {

    const [open20, setOpen20] = React.useState(false);

    return(
        <Box>
            <img className='item'
            src={"/images/tacos-phone.png"} 
            alt='webpage-one' 
            onClick={() => setOpen20(true)} />

            {/* <Chip style={chipFontsBlack} 
             icon={<PhoneIphoneOutlinedIcon />} 
             label="Mobile App design" 
             sx={{backgroundColor: 'white', mt: '1rem'}} /> */}

                <Modal open={open20} onClose={() => setOpen20(false)}>
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
                src={"/images/Artboard 4.png"} 
                alt="lyf-two" />

                <img className='item' 
                src={"/images/Artboard 6.png"} 
                alt="lyf-two" />

                <img className='item' 
                src={"/images/Artboard 7.png"} 
                alt="lyf-two" />

                <img className='item' 
                src={"/images/Artboard 8.png"} 
                alt="lyf-two" />

                <img className='item' 
                src={"/images/Artboard 10.png"} 
                alt="lyf-two" />

                <img className='item' 
                src={"/images/Artboard 10.png"} 
                alt="lyf-two" />

                <img className='item' 
                src={"/images/Artboard 11.png"} 
                alt="lyf-two" />

                </div>
            </Stack>
            
        </Modal>

        </Box>

    );
}



