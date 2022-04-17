import * as React from 'react';
import './App.css';
import './styles/output.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Box from "@mui/material/Box";
import Chip from '@mui/material/Chip';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AvatarDesigners from './AvatarDesigners';
import StoreIcon from '@mui/icons-material/Store';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Stack from '@mui/material/Stack';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import Pills from './Pills';

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

const designerSix = {
    src: "/images/avatar-4 (2).png",
    label: "Design by Lilly Torrino"
}



const emailFour = {
    text: <p>"Blended is rapidly growing with the marketing strategies 
            created by the Orda Creatives Team"</p>, 
    header: <h1>BLENDED</h1> 
}

export default function BlendedEmailFour() {
    const [open5, setOpen5] = React.useState(false);
    
    return(
        <div>
            <Box>
            <img className='item' 
            src={"/images/blended-four-v3-short.png"} alt='webpage-one' 
            onClick={() => setOpen5(true)} />

            <Stack sx={{ ml: 1 }} direction='row' spacing={1}>
                <Pills txt={"Email Marketing"} bg={'light'} clr={'dark'} />
                <Pills txt={"Food & Beverage"} bg={'light'} clr={'dark'} />
            </Stack>
        </Box>

        {/* lazy sundaes modal */}

        <Modal open={open5} onClose={() => setOpen5(false)}>
            <span>{emailFour.header}</span>
            <span>{emailFour.text}</span>
            <Stack direction="row" spacing={1}>
                <AvatarDesigners src={designerSix.src} label={designerSix.label} />
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

                <Chip style={chipFontsBlack} 
                icon={<LoyaltyOutlinedIcon style={{ color: 'FF0075'}} />} 
                label="Customer loyalty program" 
                variant="outlined" />

            </Stack>

          <img className='item' 
          src={"/images/blended-four-v3.png"} 
          alt="blended-email-four" />
        
        </Modal>
        </div>

    );
}