import * as React from 'react';
import './App.css';
import './styles/output.css';
import { Modal } from 'react-responsive-modal';
import Box from "@mui/material/Box";
import Chip from '@mui/material/Chip';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import PrintIcon from '@mui/icons-material/Print';
import BrushIcon from '@mui/icons-material/Brush';
import Stack from '@mui/material/Stack';
import AvatarsTemplate from './AvatarsTemplate';
import 'react-responsive-modal/styles.css';
import Pills from './Pills';


const headerStyles = {
    fontSize: "24px",
    textAlign: 'left'
}

const chipFontsBlack = {
    fontFamily: 'Josefin Sans',
    color: '#000000'
}


const designerTitle = {
    alt: "Gina Turner",
    alt2: "Frankie Garcia",
    src: "/images/avatar-4 (2).png",
    src2: "/images/avatar-5.png"
}
const designerSix = {
    src: "/images/avatar-4 (2).png",
    label: "Design by Lilly Torrino"
}
const designerSeven = {
    src: "/images/avatar-5.png",
    label: "Design by Rodrigo Sanchez"
}

const blendedDescription = {
    text: <p>QR code sticker ordering. Custom stickers available for print</p>, 
    header: <h1>Rewards</h1> 
}

export default function QrSticker() {
    const [open2, setOpen2] = React.useState(false);
    
    return(
        <div>
        <Box>
            <Box>
            <img className='item' 
            src={"/images/sticker-1.png"} 
            alt="email-2" 
            onClick={() => setOpen2(true)}/>
            <Stack sx={{ ml: 1 }} direction='row' spacing={1}>
                <Pills txt={"In-Store Signage"} bg={'light'} clr={'dark'} />
                <Pills txt={"Food & Beverage"} bg={'light'} clr={'dark'} />
                <Pills txt={"QR Code"} bg={'light'} clr={'dark'} />
            </Stack>
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
            des={"Designed by Greta & Katie"} />
            

            <Stack direction="row" spacing={1}>
                {/* <AvatarDesigners src={designerSeven.src} label={designerSeven.label} /> */}
                <Chip  style={chipFontsBlack} 
                label="QR Code ordering"
                icon={<QrCode2Icon style={{ color: '30AADD'}}/>} 
                variant="outlined"/>  

                <Chip style={chipFontsBlack} 
                icon={<PrintIcon style={{ color: 'A8DF65'}} />} 
                label="Printable designs" 
                variant="outlined" />

                <Chip style={chipFontsBlack} 
                icon={<BrushIcon style={{ color: '1C6DD0'}}  />} 
                label="Customizable" 
                variant="outlined" />
                </Stack>

            <img className='item' 
            src={"/images/sticker-1.png"} 
            alt="blended-email-1" />

        </Modal>

        </div>

    );
}