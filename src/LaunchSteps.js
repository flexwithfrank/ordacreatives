import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Box from "@mui/material/Box";
import SendToMobileOutlinedIcon from '@mui/icons-material/SendToMobileOutlined';
import ScreenShareOutlinedIcon from '@mui/icons-material/ScreenShareOutlined';
import DomainVerificationOutlinedIcon from '@mui/icons-material/DomainVerificationOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';



export default function LaunchSteps() {
    return(
        <div>
            <Stack sx={{ mt: 10 }}>
                <Typography variant='h1'
                sx={{ 
                    mb: 5, 
                    textAlign: 'center',
                    fontSize: {
                    lg: 57,
                    md: 32,
                    sm: 32,
                    xs: 32
                    }}}>
                <Box className='visage'>HOW TO DRIVE GROWTH.</Box>      
                </Typography>

                <Stack direction={{ sm: 'row', xs: 'column' }} spacing={{ sm: 25, xs: 10 }}>

                    {/* step 1 */}
                <Stack sx={{ alignItems: 'center' }} direction='column' spacing={5}>
                    <Box sx={{ maxWidth: 150 }}>
                    <SendToMobileOutlinedIcon sx={{ width: 100, height: 100 }} />
                    </Box>
                <Typography sx={{
                    fontSize: {
                    lg: 20,
                    md: 20,
                    sm: 18,
                    xs: 18
                    }}} >
                    <Box sx={{ maxWidth: 275 }} className='product'>
                        <Stack direction='row'>
                            <Box sx={{mr: 2, fontSize: 52 }}>1.</Box> 
                            Our team sends SMS &amp; email blast to drive app downloads
                        </Stack>   
                    </Box>
                </Typography>
            </Stack>

             {/*  step 2 */}
            <Stack sx={{ alignItems: 'center' }} direction='column' spacing={5}>
                    <Box sx={{ maxWidth: 150 }}>
                    <ImportantDevicesIcon sx={{ width: 100, height: 100 }} />
                    </Box>
                <Typography sx={{
                    fontSize: {
                    lg: 20,
                    md: 20,
                    sm: 18,
                    xs: 18
                    }}} >
                    <Box sx={{ maxWidth: 300 }} className='product'>
                        <Stack direction='row'>
                            <Box sx={{mr: 2, fontSize: 52 }}>2.</Box> 
                            Update Instagram profile link to rewards platform
                        </Stack>   
                    </Box>
                </Typography>
            </Stack>

            {/*  step 3 */}
            <Stack sx={{ alignItems: 'center' }} direction='column' spacing={5}>
                    <Box sx={{ maxWidth: 150 }}>
                    <FacebookIcon sx={{ width: 100, height: 100 }} />
                    </Box>
                <Typography sx={{
                    fontSize: {
                    lg: 20,
                    md: 20,
                    sm: 18,
                    xs: 18
                    }}} >
                    <Box sx={{ maxWidth: 250 }} className='product'>
                        <Stack direction='row'>
                            <Box sx={{mr: 2, fontSize: 52 }}>3.</Box> 
                            Post 3x on social media to drive app downloads
                        </Stack>   
                    </Box>
                </Typography>
            </Stack>
            </Stack>

            {/* 2nd stack */}

            <Stack sx={{ mt: 5, alignItems: 'center', 
            justifyContent: 'center' }} 
            direction={{ sm: 'row', xs: 'column' }} 
            spacing={{ sm: 25, xs: 10 }}>

                {/*  step 4 */}
            <Stack sx={{ alignItems: 'center' }} direction='column' spacing={5}>
                    <Box sx={{ maxWidth: 150 }}>
                    <DomainVerificationOutlinedIcon sx={{ width: 100, height: 100 }} />
                    </Box>
                <Typography sx={{
                    fontSize: {
                    lg: 20,
                    md: 20,
                    sm: 18,
                    xs: 18
                    }}} >
                    <Box sx={{ maxWidth: 250 }} className='product'>
                        <Stack direction='row'>
                            <Box sx={{mr: 2, fontSize: 52 }}>4.</Box> 
                            Customize your domain to ordering page
                        </Stack>   
                    </Box>
                </Typography>
            </Stack>

            {/*  step 5 */}
            <Stack sx={{ alignItems: 'center' }} direction='column' spacing={5}>
                    <Box sx={{ maxWidth: 150 }}>
                    <QrCode2Icon sx={{ width: 100, height: 100 }} />
                    </Box>
                <Typography sx={{
                    fontSize: {
                    lg: 20,
                    md: 20,
                    sm: 18,
                    xs: 18
                    }}} >
                    <Box sx={{ maxWidth: 250 }} className='product'>
                        <Stack direction='row'>
                            <Box sx={{mr: 2, fontSize: 52 }}>5.</Box> 
                            Order in-store posters with QR code designed by our team
                        </Stack>   
                    </Box>
                </Typography>
            </Stack>


            </Stack>
            </Stack>
            
        </div>

    );
}