import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import NavBar from './NavBar';
import MobileMenu from './MobileMenu'; 
import ButtonComponent from '../buttonComponent';
import { FileDownloadIcon } from '../constants/icons'; 

interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT ME', href: '#about' },
  { label: 'MY SERVICES', href: '#services' },
  { label: 'PORTFOLIO', href: '#portfolio' },
  { label: 'CONTACT ME', href: '#contact' },
];

function Navigation() {
  return (
    <AppBar 
      position="sticky" 
      color="primary" 
      elevation={0}   
      sx={{ backgroundColor: 'background.paper'}}
    >
      <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
        
      
        <Typography variant="h5" >
          ERNEST
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
          <NavBar links={navLinks} />
        </Box>

        <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
          <ButtonComponent
            type="button"
            value="Download CV"
            href='https://drive.google.com/file/d/1tJMKWbcnJxvMiT5rdmVVvXJyaLFEnODa/view?usp=drive_link'
            icon={<FileDownloadIcon />}
          />
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <MobileMenu links={navLinks} />
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navigation;