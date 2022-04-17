import * as React from 'react';
import './App.css';
import './styles/output.css';
import { Modal } from 'react-responsive-modal';
import Box from "@mui/material/Box";
import Chip from '@mui/material/Chip';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AvatarDesigners from './AvatarDesigners';
import StoreIcon from '@mui/icons-material/Store';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Stack from '@mui/material/Stack';
import 'react-responsive-modal/styles.css';
import Pills from './Pills';

const chipFontsBlack = {
    fontFamily: 'Josefin Sans',
    color: '#000000'
}



const designerThree = {
    src: "/images/avatar-3.png",
    label: "Design by Greta Quinn"
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
            src={"/images/lyf-email-short-1.png"} 
            alt='webpage-one' 
            onClick={() => setOpen6(true)} />

            <Stack sx={{ ml: 1 }} direction='row' spacing={1}>
                <Pills txt={"Email Marketing"} bg={'light'} clr={'dark'} />
                <Pills txt={"Retail & Ecommerce"} bg={'light'} clr={'dark'} />
            </Stack>

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
                src={"/images/lyf-phone.png"} 
                alt="lyf-two" />
                <img className='item' 
                src={"/images/lyf-email-full-1.png"} 
                alt="lyf-two" />
            </Stack>
            
        </Modal>

        </Box>
        
    );
}