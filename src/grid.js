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


export default function Grid () {

    return(

        <div>
        <Box sx={{mt: '3rem'}} className="container">

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