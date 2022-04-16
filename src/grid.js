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
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';


export default function Grid () {

    return(

        <div>
        <Box sx={{mt: 10}} className="container">

        <Box><HeaderTitlesIcons 
        icon={<MarkEmailReadOutlinedIcon 
        sx={{ width: 50, height: 50, mr: 2 }} />} 
        text={"EMAILS"} /></Box>

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