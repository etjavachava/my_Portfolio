import { Box, Stack, Typography } from '@mui/material';
import NavBar from '../components/links';
import { navLinks } from './home';
import {
  FacebookIcon,
  GitHubIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from '../components/constants/icons';
import { customColors } from '../components/constants/colors';

function FooterPage() {
  return (
    <>
      <Stack spacing={4}>
        <Box textAlign={'center'} justifyContent={'center'}>
          <Typography>Ernest</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <NavBar links={navLinks} />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <GitHubIcon />
          <WhatsAppIcon />
          <FacebookIcon />
          <LinkedInIcon />
        </Box>
      </Stack>
      <Box sx={{backgroundColor:customColors.primary
      }} padding={2}>
        <Typography textAlign={'center'}>© 2025 Ernest All Rights Reserved.</Typography>
      </Box>
    </>
  );
}
export default FooterPage;
