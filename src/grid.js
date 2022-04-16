import * as React from 'react';
import './App.css';
import './styles/output.css'; 
import Box from "@mui/material/Box";
import LyfModal from './LyfModal';
import RueModal from './rueModal';
import Studio3 from './studio3';
import BlendedEmailThree from './BlendedEmailThree';
import BlendedEmailFour from './BlendedEmailFour';
import BlendedEmailOne from './BlendedEmailOne';
import BlendedEmailTwo from './BlendedEmailTwo';
import Studio3EmailTwo from './Studio3EmailTwo';
import HeaderTitlesIcons from './HeaderTitlesIcons';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import 'react-responsive-modal/styles.css';


export default function Grid () {

    return(

        <div>
        <Box sx={{mt: 10, p: 7, 
            borderRadius: 5 }} 
            className="container bg-color-1">
        <Box><HeaderTitlesIcons 
        icon={<CheckIcon 
        sx={{ width: 50, height: 50, mr: 2, fontSize: 38 }} />} 
        text={"Beatifully designed growth emails"} /></Box>
        <BlendedEmailOne />
        <BlendedEmailTwo />
        <BlendedEmailThree />
        <BlendedEmailFour />
        <Studio3 />
        <Studio3EmailTwo />
        <LyfModal/>
        <RueModal />
        </Box>
         </div>


    );
}