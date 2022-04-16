import * as React from 'react';
import './App.css';
import './styles/output.css'; 
import { Modal } from 'react-responsive-modal';
import Box from "@mui/material/Box";
import Chip from '@mui/material/Chip';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AvatarDesigners from './AvatarDesigners';
import StoreIcon from '@mui/icons-material/Store';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import Stack from '@mui/material/Stack';
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
        src={"/images/rue-instore-sign.png"} 
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
            src={"/images/rue-post-1.png"} 
            onClick={() => setOpenPost1(true)} />

            <img className="item" 
            src={"/images/rue-post-2.png"}
            onClick={() => setOpenPost2(true)} />

            <img className="item" 
            src={"/images/rue-post-3.png"}
            onClick={() => setOpenPost3(true)} />

            <img className="item"
            src={"/images/rue-email-1.png"}
            onClick={() => setOpenPost4(true)} />

            <img className="item"
            src={"/images/rue-email-2.png"}
            onClick={() => setOpenPost5(true)} />

            <img className="item"
            src={"/images/rue-email-3.png"}
            onClick={() => setOpenPost6(true)} />

            <img className="item"
            src={"/images/story-2.png"}
            onClick={() => setOpenPost7(true)} />

            <img className="item"
            src={"/images/story-1.png"}
            onClick={() => setOpenPost8(true)} />

            <img className="item"
            src={"/images/story 4.png"}
            onClick={() => setOpenPost9(true)} />


            </div>
        </Modal>

        {/* rue IG post inner modals */}
        <Modal open={openPost1} onClose={() => setOpenPost1(false)}>
            <Chip sx={{backgroundColor: 'black', mt: '1rem'}} 
                style={chipFontsWhite} 
                icon={<InstagramIcon style={{ color: 'ffffff'}} />} 
                label="Instagram Post" />

             <img className="item" src={"/images/rue-post-1.png"} />
        </Modal>

        <Modal open={openPost2} onClose={() => setOpenPost2(false)}>
            <Chip sx={{backgroundColor: 'black', mt: '1rem'}} 
                style={chipFontsWhite} 
                icon={<InstagramIcon style={{ color: 'ffffff'}} />} 
                label="Instagram Post" />
             <img className="item" src={"/images/rue-post-2.png"} />
        </Modal>

        <Modal open={openPost3} onClose={() => setOpenPost3(false)}>
            <Chip sx={{backgroundColor: 'black', mt: '1rem'}} 
                style={chipFontsWhite} 
                icon={<InstagramIcon style={{ color: 'ffffff'}} />} 
                label="Instagram Post" />
             <img className="item" src={"/images/rue-post-3.png"} />
        </Modal>

        <Modal open={openPost4} onClose={() => setOpenPost4(false)}>
            <Chip sx={{backgroundColor: 'black', mt: '1rem'}} 
                style={chipFontsWhite} 
                icon={<MailOutlineIcon style={{ color: 'ffffff'}} />} 
                label="Email Campaign 1" />
             <img className="item" src={"/images/rue-email-1.png"} />
        </Modal>

        <Modal open={openPost5} onClose={() => setOpenPost5(false)}>
            <Chip sx={{backgroundColor: 'black', mt: '1rem'}} 
                style={chipFontsWhite} 
                icon={<MailOutlineIcon style={{ color: 'ffffff'}} />} 
                label="Email Campaign 2" />
             <img className="item" src={"/images/rue-email-2.png"} />
        </Modal>

        <Modal open={openPost6} onClose={() => setOpenPost6(false)}>
            <Chip sx={{backgroundColor: 'black', mt: '1rem'}} 
                style={chipFontsWhite} 
                icon={<MailOutlineIcon style={{ color: 'ffffff'}} />} 
                label="Email Campaign 3" />
             <img className="item" src={"/images/rue-email-3.png"} />
        </Modal>

        <Modal open={openPost7} onClose={() => setOpenPost7(false)}>
            <Chip sx={{backgroundColor: 'black', mt: '1rem'}} 
                style={chipFontsWhite} 
                icon={<InstagramIcon style={{ color: 'ffffff'}} />} 
                label="Instagram Story Post" />
             <img className="item" src={"/images/story-2.png"} />
        </Modal>

        <Modal open={openPost8} onClose={() => setOpenPost8(false)}>
            <Chip sx={{backgroundColor: 'black', mt: '1rem'}} 
                style={chipFontsWhite} 
                icon={<InstagramIcon style={{ color: 'ffffff'}} />} 
                label="Instagram Story Post" />
             <img className="item" src={"/images/story-1.png"} />
        </Modal>

        <Modal open={openPost9} onClose={() => setOpenPost9(false)}>
            <Chip sx={{backgroundColor: 'black', mt: '1rem'}} 
                style={chipFontsWhite} 
                icon={<InstagramIcon style={{ color: 'ffffff'}} />} 
                label="Instagram Story Post" />
             <img className="item" src={"/images/story 4.png"} />
        </Modal>

      </Box>
      </Box>


    );
}