import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { AvatarGroup } from '@mui/material';
import Box from "@mui/material/Box";

const logoSize = {
    width: '100px',
    height: 'auto'
}

export default function AuthorAvatars() {
    return (
        <Stack sx={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <AvatarGroup max={5}>
            <Avatar alt="Frankie Rodriguez" src={"/images/oink.png"} />
            <Avatar alt="Thomas Rhett" src={"images/avatar-1.png"} />
            <Avatar alt="Carl Bowen" src={"images/avatar-2.png"} />
            <Avatar alt="Lily Sandrick" src={"/images/avatar-3.png"} />
            <Avatar alt="Rene Ceasar" src ={"images/avatar-4 (2).png"} />
        </AvatarGroup>
             <Box sx={{ alignItems: 'center' }} ><p>By creative partners at</p></Box>
             <img style={logoSize} src={"images/orda-logo.png"} alt="company-logo" />
        </Stack>
    );
}