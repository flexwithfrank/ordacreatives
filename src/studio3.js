import * as React from 'react';
import './App.css';
import './styles/output.css'; 
import { Modal } from 'react-responsive-modal';
import Box from "@mui/material/Box";
import Chip from '@mui/material/Chip';
import AvatarDesigners from './AvatarDesigners';
import StoreIcon from '@mui/icons-material/Store';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CampaignIcon from '@mui/icons-material/Campaign';
import Stack from '@mui/material/Stack';

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

export default function Studio3() {

    const [open10, setOpen10] = React.useState(false);
    return(

        <Box>
            <img className='item' 
            src={"/images/studio3-email-2-short.png"} 
            alt='webpage-one' 
            onClick={() => setOpen10(true)} />

            <Chip style={chipFontsBlack} 
             icon={<FitnessCenterIcon />} 
             label="Boutique Fitness" 
             sx={{backgroundColor: 'white', mt: '1rem'}} />

                <Modal open={open10} onClose={() => setOpen10(false)}>
            <span>{studioText.header}</span>
            <span>{studioText.text}</span>
            <Stack direction="row" spacing={1}>
                <AvatarDesigners src={designerFive.src} label={designerFive.label} />
                <Chip style={chipFontsBlack} 
                icon={<FitnessCenterIcon style={{ color: '1C6DD0'}}  />} 
                label="Boutique fitness studio" 
                variant="outlined" />

                <Chip style={chipFontsBlack} 
                icon={<StoreIcon style={{ color: '1C6DD0'}}  />} 
                label="Based in Seattled" 
                variant="outlined" />
                </Stack>

                <Stack direction="row" spacing={1} sx={{mt: 1}}>
                <Chip style={chipFontsBlack} 
                icon={<TrendingUpIcon style={{ color: 'A8DF65'}} />} 
                label="Membership driven campaign" 
                variant="outlined" />

                <Chip style={chipFontsBlack} 
                icon={<PhoneIphoneOutlinedIcon style={{ color: 'FF6B6B'}} />} 
                label="Branded Mobile App" 
                variant="outlined" />

                <Chip style={chipFontsBlack} 
                icon={<FavoriteBorderOutlinedIcon style={{ color: 'E60965'}} />} 
                label="Customer since 2016" 
                variant="outlined" />
            </Stack>

                 <Chip sx={{mt: 1}} style={chipFontsBlack} 
                icon={<CampaignIcon style={{ color: 'FF6B6B'}} />} 
                label="Marketing services by Orda" 
                variant="outlined" />
            <Stack direction="column" spacing={1}>
                <img className='item' 
                src={"/images/studio3-email-2.png"} 
                alt="studio" />
            </Stack>
            
        </Modal>

        </Box>

    );
}