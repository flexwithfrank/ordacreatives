
import * as React from 'react';
import './App.css';
import frankieAvatar from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/oink.png';
import AvatarOne from '../src/avatar-1.png';
import AvatarTwo from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/avatar-2.png';
import AvatarThree from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/avatar-3.png';
import AvatarFour from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/avatar-4.png';
import { Modal } from 'react-responsive-modal';
import Box from "@mui/material/Box";
import Chip from '@mui/material/Chip';
import AvatarDesigners from './AvatarDesigners';
import StoreIcon from '@mui/icons-material/Store';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Stack from '@mui/material/Stack';
import BlendedGradientShort from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/blended-email-410-short.png';
import BlendedGradientLong from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/blended-email-410-long.png';


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

const blendedText = {
    text: <p>Blended is a rapidly growing juice bar in Seattle, Wa </p>,
    header: <h1>Blended</h1>
}

export default function BlendedEmailThree() {

    const [open22, setOpen22] = React.useState(false);

    return(
        <Box>
            <img className='item'
            src={BlendedGradientShort} 
            alt='webpage-one' 
            onClick={() => setOpen22(true)} />

            <Chip style={chipFontsBlack} 
             icon={<RestaurantIcon />} 
             label="Smoothie &amp; Juice Bar" 
             sx={{backgroundColor: 'white', mt: '1rem'}} />

                <Modal open={open22} onClose={() => setOpen22(false)}>
            <span>{blendedText.header}</span>
            <span>{blendedText.text}</span>
            <Stack direction="row" spacing={1}>
                <AvatarDesigners src={designerTwo.src} label={designerTwo.label} />
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
            <Stack direction="column" spacing={1}>
                <div>

                <img className='item' 
                src={BlendedGradientLong} 
                alt="lyf-two" />

                </div>
            </Stack>
            
        </Modal>

        </Box>

    );
}



