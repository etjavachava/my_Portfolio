import { Box, Stack, Typography } from '@mui/material';
import NavBar from '../components/links';
import { navLinks } from './headerSection';
import SocialMediaLinks from '../components/socialMediaLinks'


function FooterPage() {
  return (
    <>
      <Stack spacing={4} sx={{ background: "linear-gradient(135deg, #1e0b3e 0%, #2d1b4e 100%)"}}>
        <Box textAlign={'center'} justifyContent={'center'}>
          <Typography variant="h2" gutterBottom color='primary'>Ernest</Typography>
          <Typography variant='body1' color='primary'>Web Developer • Photographer • Chatbot Specialist</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <NavBar links={navLinks}  />
        </Box>
        
        <Box >
    <SocialMediaLinks/>
        </Box>
      </Stack>
      <Box sx={{  borderTop: "1px solid rgba(157, 78, 221, 0.3) " }} padding={2}>
        <Typography textAlign={'center'}>© 2025 Ernest All Rights Reserved.</Typography>
      </Box>
    </>
  );
}
export default FooterPage;
