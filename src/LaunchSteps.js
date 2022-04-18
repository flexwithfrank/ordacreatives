import * as React from 'react';
import Stack from '@mui/material/Stack';
import { AvatarGroup, Typography } from '@mui/material';
import Box from "@mui/material/Box";

export default function LaunchSteps() {
    return(
        <div>
            <Stack>
                <Typography variant='h1'
                sx={{ 
                    mb: 5, 
                    textAlign: 'center',
                    fontSize: {
                    lg: 68,
                    md: 32,
                    sm: 32,
                    xs: 32
                    }}}>

                <Box className='visage'>HOW DOES IT WORK?</Box>
                            
                </Typography>

                <Stack sx={{ alignItems: 'center' }} direction='column' spacing={5}>
                    <Box sx={{ maxWidth: 200 }}>
                    <img src={'/images/startup-image.png'} />
                    </Box>
                <Typography sx={{
                    fontSize: {
                    lg: 20,
                    md: 20,
                    sm: 18,
                    xs: 18
                    }}} >
                    <Box sx={{ maxWidth: 250 }} className='visage'>
                        <Stack direction='row'>
                            <Box sx={{ mr: 2, fontSize: 52 }}>1.</Box> 
                            Send SMS &amp; email blast to drive app downloads
                        </Stack>   
                    </Box>
                </Typography>
            </Stack>
            </Stack>
            
        </div>

    );
}