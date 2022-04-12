import * as React from 'react';
import './App.css';
import './styles/output.css';
import frankieAvatar from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/oink.png';
import AvatarOne from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/avatar-1.png';
import AvatarTwo from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/avatar-2.png';
import AvatarThree from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/avatar-3.png';
import AvatarFour from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/avatar-4.png';
import studioEmailLong from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/studio3-email-2.png';
import studioEmailShort from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/studio3-email-2-short.png';
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
    label: "Design by Christina Encinado"
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
            src={studioEmailShort} 
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
                src={studioEmailLong} 
                alt="studio" />
            </Stack>
            
        </Modal>

        </Box>

    );
}