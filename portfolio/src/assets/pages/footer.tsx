import { Box, Stack, Typography } from '@mui/material';
import NavBar from '../components/links';
import { navLinks } from './headerSection';
import SocialMediaLinks from '../components/socialMediaLinks'
import { customColors } from '../components/constants/colors';

function FooterPage() {
  return (
    <>
      <Stack spacing={4} sx={{ background: "linear-gradient(135deg, #1e0b3e 0%, #2d1b4e 100%)"}}>
        <Box textAlign={'center'} justifyContent={'center'}>
          <Typography variant="h3" gutterBottom color='primary'>Ernest</Typography>
          <Typography variant='body1'>Web Developer • Photographer • Chatbot Specialist</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <NavBar links={navLinks}  />
        </Box>
        
        <Box >
    <SocialMediaLinks/>
        </Box>
      </Stack>
      <Box sx={{ backgroundColor: customColors.primary }} padding={2}>
        <Typography textAlign={'center'}>© 2025 Ernest All Rights Reserved.</Typography>
      </Box>
    </>
  );
}
export default FooterPage;
