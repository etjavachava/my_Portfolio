import { Box, Stack, Typography } from '@mui/material';
import SocialMediaLinks from '../components/socialMediaLinks'
import { goldBorderTransparent } from '../components/constants/themes/colors';


function FooterPage() {
  return (
    <>
      <Stack spacing={4} sx={{borderTop:`1px solid ${goldBorderTransparent}`,bgcolor:"background.paper"}}>
        <Box textAlign={'center'} justifyContent={'center'}>
          <Typography variant="h2" gutterBottom color='text.secondary'>Ernest</Typography>
          <Typography variant='body1' color='text.secondery' >Web Developer | Photographer | Chatbot Specialist</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        
        </Box>
        <Box >
    <SocialMediaLinks/>
        </Box>
      </Stack>
      <Box sx={{  borderTop: `1px solid ${goldBorderTransparent}`,bgcolor:"background.paper"}} padding={2}>
        <Typography textAlign={'center'} color='primary'>© 2025 Ernest All Rights Reserved.</Typography>
      </Box>
    </>
  );
}
export default FooterPage;
