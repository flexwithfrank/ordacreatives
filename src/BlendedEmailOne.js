import * as React from 'react';
import './App.css';
import './styles/output.css';
import { Modal } from 'react-responsive-modal';
import Box from "@mui/material/Box";
import Chip from '@mui/material/Chip';
import StoreIcon from '@mui/icons-material/Store';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Stack from '@mui/material/Stack';
import AvatarsTemplate from './AvatarsTemplate';
import 'react-responsive-modal/styles.css';

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


const designerTitle = {
    alt: "Gina Turner",
    alt2: "Frankie Garcia",
    src: "/images/avatar-2.png",
    src2: "/images/avatar-4 (2).png"
}

const blendedDescription = {
    text: <p>"Blended is rapidly growing with the marketing strategies 
            created by the Orda Creatives Team"</p>, 
    header: <h1>BLENDED</h1> 
}

export default function BlendedEmailOne() {
    const [open2, setOpen2] = React.useState(false);
    
    return(
        <div>
        <Box>
            <Box>
            <img className='item' 
            src={"/images/blended-email-2.png"} 
            alt="email-2" 
            onClick={() => setOpen2(true)}/>

            <Chip style={chipFontsBlack} 
             icon={<RestaurantIcon />} 
             label="Food &amp; Beverage" 
             sx={{backgroundColor: 'white', mt: '1rem'}} />
        </Box>
            
        </Box>

        {/* modal */}

        {/* blended modal one */}

        <Modal open={open2} onClose={() => setOpen2(false)}>
            <h2 style={headerStyles}>{blendedDescription.header}</h2>
            <span>{blendedDescription.text}</span>

            <AvatarsTemplate alt={designerTitle.alt} 
            alt2={designerTitle.alt2}
            src={designerTitle.src} 
            src2={designerTitle.src2} 
            des={"Designed by Frankie & Gina"} />
            

            <Stack direction="row" spacing={1}>
                {/* <AvatarDesigners src={designerSeven.src} label={designerSeven.label} /> */}
                <Chip  style={chipFontsBlack} 
                label="Located in — Seattle, Wa "
                icon={<StoreIcon style={{ color: '30AADD'}}/>} 
                variant="outlined"/>  

                <Chip style={chipFontsBlack} 
                icon={<TrendingUpIcon style={{ color: 'A8DF65'}} />} 
                label="600% increase in engagement" 
                variant="outlined" />
                </Stack>

                <Stack direction="row" spacing={1} sx={{mt: 1}}>
                <Chip style={chipFontsBlack} 
                icon={<PhoneIphoneOutlinedIcon style={{ color: '1C6DD0'}}  />} 
                label="3000+ app downloads" 
                variant="outlined" />

                <Chip style={chipFontsBlack} 
                icon={<LaptopMacIcon style={{ color: 'FF6B6B'}} />} 
                label="Full stack solution" 
                variant="outlined" />

                <Chip style={chipFontsBlack} 
                icon={<FavoriteBorderOutlinedIcon style={{ color: 'E60965'}} />} 
                label="Customer since 2018" 
                variant="outlined" />

            </Stack>

            <img className='item' 
            src={"/images/blended-email-2.png"} 
            alt="blended-email-1" />

        </Modal>

        </div>

    );
}