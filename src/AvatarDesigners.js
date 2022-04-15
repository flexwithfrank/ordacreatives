import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

const chipFontsBlack = {
    fontFamily: 'Josefin Sans',
    color: '#000000'
}

export default function AvatarDesigners({src, label}) {
    return (
       
            <Chip style={chipFontsBlack} 
            avatar={<Avatar alt="designer" src={src} />} 
            label={label} 
            variant="outlined"
            size="large">
            </Chip>
        
        
    );
}