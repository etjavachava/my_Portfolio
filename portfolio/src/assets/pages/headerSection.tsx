import { useState } from 'react';
import { Box, Typography, Drawer, List, ListItem, ListItemButton, ListItemText, Link as MuiLink } from '@mui/material';
import { Spin as Hamburger } from 'hamburger-react'; 

import NavBar from '../components/links'; 
import ButtonComponent from '../components/buttonComponent';
import { FileDownloadIcon } from '../components/constants/icons'; 

interface NavLink {
  label: string;
  href: string;
}

type ToggleDrawer = (newOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;

export const navLinks: NavLink[] = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT ME', href: '#about' },
  { label: 'MY SERVICES', href: '#services' },
  { label: 'PORTFOLIO', href: '#portfolio' },
  { label: 'CONTACT ME', href: '#contact' },
];

function Navigation() {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const toggleDrawer: ToggleDrawer = (newOpen) => (event) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setOpenDrawer(newOpen);
  };

  const DrawerList = (
    <Box 
      sx={{ width: 250 }} 
      role="presentation" 
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navLinks.map((item: NavLink) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component={MuiLink} href={item.href} sx={{ textDecoration: 'none' }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ justifyContent: 'center', '&:hover': { background: 'none' } }}>
            <ButtonComponent type="button" value="Download CV" icon={<FileDownloadIcon />} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

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

      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <NavBar links={navLinks} />
      </Box>

      <ButtonComponent
        type="button"
        value="Download CV"
        icon={<FileDownloadIcon />}
        sx={{ display: { xs: 'none', lg: 'flex' } }}
      />

      <Box sx={{ 
        display: { xs: 'flex', md: 'none' },
        zIndex: 1300, 
      }}>
        <Hamburger 
          toggled={openDrawer}
          toggle={setOpenDrawer}
          direction="right"
          size={30}
          color="white"
        />
      </Box>

      <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
}
export default Navigation;