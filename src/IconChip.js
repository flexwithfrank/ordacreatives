import * as React from 'react';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

export default function IconChips({icons, label}) {
    return (
         <Stack direction="row" spacing={1}>
      <Chip icon={icons} label={label} />
    </Stack>
    );
}