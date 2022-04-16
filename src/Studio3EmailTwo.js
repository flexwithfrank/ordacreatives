import * as React from 'react';
import './App.css';
import './styles/output.css';
import { Modal } from 'react-responsive-modal';
import Box from "@mui/material/Box";
import Chip from '@mui/material/Chip';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AvatarDesigners from './AvatarDesigners';
import StoreIcon from '@mui/icons-material/Store';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Stack } from '@mui/material';
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



const studioText = {
    text: <p>Boutique Fitness studio changing the way fitness is viewed.
        We crafted an engagement results driven campaign
    </p>,
    header: <h1>RITUAL</h1>
}

export default function Studio3EmailTwo() {

    const [open, setOpen] = React.useState(false);
    return(

        <Box>
             <Box>
             <img className='item' 
             src={"/images/studio-email-two-short.png"} 
             alt="email-1" 
             onClick={() => setOpen(true)} />

             <Chip style={chipFontsBlack} 
             icon={<FitnessCenterIcon />} 
             label="Boutique Fitness — Email Marketing" 
             sx={{backgroundColor: 'white', mt: '1rem'}} />
        </Box>

                <Modal open={open} onClose={() => setOpen(false)}>
            <h1 style={headerStyles}>Studio 3 Fitness</h1>
            <Stack direction="row" spacing={1}>
                <AvatarDesigners src={designerThree.src} label={designerThree.label} />
                <Chip style={chipFontsBlack} 
                icon={<FitnessCenterIcon style={{ color: '1C6DD0'}}  />} 
                label="Botique Fitness Studio" 
                variant="outlined" />

                <Chip style={chipFontsBlack} 
                icon={<StoreIcon style={{ color: '1C6DD0'}}  />} 
                label="Based in Seattle" 
                variant="outlined" />
                </Stack>

                <Stack direction="row" spacing={1} sx={{mt: 1}}>
                <Chip style={chipFontsBlack} 
                icon={<MailOutlineIcon style={{ color: 'A8DF65'}} />} 
                label="45% email open-rate" 
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
          <Box>
              <img className='item' 
              src={"/images/studio-email-two-long.png"} 
              alt="studio3-email-1" />
          </Box>
          </Modal>

        </Box>

    );
}