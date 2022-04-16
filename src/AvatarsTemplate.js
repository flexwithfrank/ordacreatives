import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { AvatarGroup } from '@mui/material';
import { Box } from '@mui/system';


export default function AvatarsTemplate({alt, alt2, src, src2, des}) {
    return (
        <Stack sx={{ mb: 2, alignItems: 'center' }} direction="row" spacing={2}>
        <AvatarGroup  max={2}>
            <Avatar alt={alt} src={src} />
            <Avatar alt={alt2} src={src2} />
        </AvatarGroup>
        <p style={{ fontSize: 14 }}>{des}</p>
        </Stack>
    );
}