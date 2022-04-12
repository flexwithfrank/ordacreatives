import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import frankieAvatar from '../src/images/avatar-1.png'
import AvatarOne from '../src/images/avatar-1.png';
import AvatarTwo from '../src/images/avatar-2.png';
import AvatarThree from '../src/images/avatar-3.png';
import AvatarFour from '../src/images/avatar-4.png';
import ordaLogo from '../src/images/orda-logo.png';
import { AvatarGroup } from '@mui/material';

const logoSize = {
    width: '100px',
    height: 'auto'
}

export default function AuthorAvatars() {
    return (
        <Stack direction="row" spacing={2}>
        <AvatarGroup max={4}>
            <Avatar alt="Frankie Rodriguez" src={frankieAvatar} />
            <Avatar alt="Thomas Rhett" src={AvatarOne} />
            <Avatar alt="Carl Bowen" src={AvatarTwo} />
            <Avatar alt="Lily Sandrick" src={AvatarThree} />
            <Avatar alt="Rene Ceasar" src ={AvatarFour} />
        </AvatarGroup>
             <p>Designed by the marketing creatives at</p>
             <img style={logoSize} src={ordaLogo} alt="company-logo" />
        </Stack>
    );
}