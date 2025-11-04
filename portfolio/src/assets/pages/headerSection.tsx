import { Box, IconButton, Typography } from '@mui/material';
import NavBar from '../components/links';
import ButtonComponent from '../components/buttonComponent';
import { FileDownloadIcon, MenuIcon } from '../components/constants/icons';

export const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT ME', href: '#about' },
  { label: 'MY SERVICES', href: '#services' },
  { label: 'PORTFOLIO', href: '#portfolio' },
  { label: 'CONTACT ME', href: '#contact' },
];
function Navigation() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        py: '20px',
      }}
    >
      <Typography variant="h3">ERNEST</Typography>
      <NavBar links={navLinks} />
      <ButtonComponent type="button" value="Download CV"  icon={<FileDownloadIcon />} sx={{display:{xs:"none",lg:"flex"}}} />
      <IconButton sx={{display:{xs:'flex',md:"none"}}}>
        <MenuIcon sx={{color:'white', fontSize:"30px"}}/>
      </IconButton>
    </Box>
  );
}
export default Navigation;
