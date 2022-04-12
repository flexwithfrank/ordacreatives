import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import frankieAvatar from '/Users/rodriguezmedia/Desktop/react-counter-app/src/images/oink.png';
import { AvatarGroup } from '@mui/material';
import { fontSize } from '@mui/system';
import { spacing } from '@mui/system';
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