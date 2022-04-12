import * as React from 'react';
import './App.css';
import './styles/output.css';
import frankieAvatar from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/oink.png';
import AvatarOne from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/avatar-1.png';
import AvatarTwo from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/avatar-2.png';
import AvatarThree from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/avatar-3.png';
import AvatarFour from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/avatar-4.png';
import ruePostOne from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/rue-post-1.png';
import ruePostTwo from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/rue-post-2.png';
import ruePostThree from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/rue-post-3.png';
import rueSignage from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/rue-instore-sign.png'
import rueEmailOne from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/rue-email-1.png';
import rueEmailTwo from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/rue-email-2.png';
import rueEmailThree from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/rue-email-3.png';
import rueStoryOne from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/story-2.png';
import rueStoryTwo from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/story-1.png';
import rueStoryThree from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/story 4.png';
import { Modal } from 'react-responsive-modal';
import Box from "@mui/material/Box";
import Chip from '@mui/material/Chip';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AvatarDesigners from './AvatarDesigners';
import StoreIcon from '@mui/icons-material/Store';
import IconChips from './IconChip';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ComputerIcon from '@mui/icons-material/Computer';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import Stack from '@mui/material/Stack';
import Grid from './grid';

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
    label: "Design by Chris Encinado"
}

const rueText = {
    text: <p>Results driven rewards program created by
        a team passionate for growth and connecting communities
    </p>,
    header: <h1>ReU Juicery Campaign</h1>
}

export default function RueModal() {

    const [open7, setOpen7] = React.useState(false);
    const [openPost1, setOpenPost1] = React.useState(false);
    const [openPost2, setOpenPost2] = React.useState(false);
    const [openPost3, setOpenPost3] = React.useState(false);
    const [openPost4, setOpenPost4] = React.useState(false);
    const [openPost5, setOpenPost5] = React.useState(false);
    const [openPost6, setOpenPost6] = React.useState(false);
    const [openPost7, setOpenPost7] = React.useState(false);
    const [openPost8, setOpenPost8] = React.useState(false);
    const [openPost9, setOpenPost9] = React.useState(false);


    return(
      <Box>
        {/* rue post part of grid */}
        <img className='item' 
        src={rueSignage} 
        alt='webpage-one' 
        onClick={() => setOpen7(true)} />

        <Chip style={chipFontsBlack} 
             icon={<RestaurantIcon />} 
             label="Food &amp; Beverage — Full marketing suite" 
             sx={{backgroundColor: 'white', mt: '1rem'}} />
      <Box>

          {/* rue IG post container */}
           <Modal open={open7} onClose={() => setOpen7(false)}>
            <span>{rueText.header}</span>
            <span>{rueText.text}</span>
            <Stack direction="row" spacing={1}>
                <AvatarDesigners src={designerFour.src} label={designerFour.label} />
                <Chip style={chipFontsBlack} 
                icon={<RestaurantIcon style={{ color: '1C6DD0'}}  />} 
                label="Food &amp; Beverage" 
                variant="outlined" />

                <Chip style={chipFontsBlack} 
                icon={<StoreIcon style={{ color: '1C6DD0'}}  />} 
                label="Based in Ohio" 
                variant="outlined" />
                </Stack>

                <Stack direction="row" spacing={1} sx={{mt: 1}}>
                <Chip style={chipFontsBlack} 
                icon={<TrendingUpIcon style={{ color: 'A8DF65'}} />} 
                label="300% Increase in foot traffic" 
                variant="outlined" />

                <Chip style={chipFontsBlack} 
                icon={<LaptopMacIcon style={{ color: 'FF6B6B'}} />} 
                label="Full stack solution" 
                variant="outlined" />

                <Chip style={chipFontsBlack} 
                icon={<FavoriteBorderOutlinedIcon style={{ color: 'E60965'}} />} 
                label="Customer since 2020" 
                variant="outlined" />
            </Stack>
            {/* the actual IG posts embeded in modal */}
            <div className='rueContainerModal'>
            <img className="item" 
            src={ruePostOne} 
            onClick={() => setOpenPost1(true)} />

            <img className="item" 
            src={ruePostTwo}
            onClick={() => setOpenPost2(true)} />

            <img className="item" 
            src={ruePostThree}
            onClick={() => setOpenPost3(true)} />

            <img className="item"
            src={rueEmailOne}
            onClick={() => setOpenPost4(true)} />

            <img className="item"
            src={rueEmailTwo}
            onClick={() => setOpenPost5(true)} />

            <img className="item"
            src={rueEmailThree}
            onClick={() => setOpenPost6(true)} />

            <img className="item"
            src={rueStoryOne}
            onClick={() => setOpenPost7(true)} />

            <img className="item"
            src={rueStoryTwo}
            onClick={() => setOpenPost8(true)} />

            <img className="item"
            src={rueStoryThree}
            onClick={() => setOpenPost9(true)} />


            </div>
        </Modal>

        {/* rue IG post inner modals */}
        <Modal open={openPost1} onClose={() => setOpenPost1(false)}>
            <Chip sx={{backgroundColor: 'black', mt: '1rem'}} 
                style={chipFontsWhite} 
                icon={<InstagramIcon style={{ color: 'ffffff'}} />} 
                label="Instagram Post" />

             <img className="item" src={ruePostOne} />
        </Modal>

        <Modal open={openPost2} onClose={() => setOpenPost2(false)}>
            <Chip sx={{backgroundColor: 'black', mt: '1rem'}} 
                style={chipFontsWhite} 
                icon={<InstagramIcon style={{ color: 'ffffff'}} />} 
                label="Instagram Post" />
             <img className="item" src={ruePostTwo} />
        </Modal>

        <Modal open={openPost3} onClose={() => setOpenPost3(false)}>
            <Chip sx={{backgroundColor: 'black', mt: '1rem'}} 
                style={chipFontsWhite} 
                icon={<InstagramIcon style={{ color: 'ffffff'}} />} 
                label="Instagram Post" />
             <img className="item" src={ruePostThree} />
        </Modal>

        <Modal open={openPost4} onClose={() => setOpenPost4(false)}>
            <Chip sx={{backgroundColor: 'black', mt: '1rem'}} 
                style={chipFontsWhite} 
                icon={<MailOutlineIcon style={{ color: 'ffffff'}} />} 
                label="Email Campaign 1" />
             <img className="item" src={rueEmailOne} />
        </Modal>

        <Modal open={openPost5} onClose={() => setOpenPost5(false)}>
            <Chip sx={{backgroundColor: 'black', mt: '1rem'}} 
                style={chipFontsWhite} 
                icon={<MailOutlineIcon style={{ color: 'ffffff'}} />} 
                label="Email Campaign 2" />
             <img className="item" src={rueEmailTwo} />
        </Modal>

        <Modal open={openPost6} onClose={() => setOpenPost6(false)}>
            <Chip sx={{backgroundColor: 'black', mt: '1rem'}} 
                style={chipFontsWhite} 
                icon={<MailOutlineIcon style={{ color: 'ffffff'}} />} 
                label="Email Campaign 3" />
             <img className="item" src={rueEmailThree} />
        </Modal>

        <Modal open={openPost7} onClose={() => setOpenPost7(false)}>
            <Chip sx={{backgroundColor: 'black', mt: '1rem'}} 
                style={chipFontsWhite} 
                icon={<InstagramIcon style={{ color: 'ffffff'}} />} 
                label="Instagram Story Post" />
             <img className="item" src={rueStoryOne} />
        </Modal>

        <Modal open={openPost8} onClose={() => setOpenPost8(false)}>
            <Chip sx={{backgroundColor: 'black', mt: '1rem'}} 
                style={chipFontsWhite} 
                icon={<InstagramIcon style={{ color: 'ffffff'}} />} 
                label="Instagram Story Post" />
             <img className="item" src={rueStoryTwo} />
        </Modal>

        <Modal open={openPost9} onClose={() => setOpenPost9(false)}>
            <Chip sx={{backgroundColor: 'black', mt: '1rem'}} 
                style={chipFontsWhite} 
                icon={<InstagramIcon style={{ color: 'ffffff'}} />} 
                label="Instagram Story Post" />
             <img className="item" src={rueStoryThree} />
        </Modal>

      </Box>
      </Box>


    );
}