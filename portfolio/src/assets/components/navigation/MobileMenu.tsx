import { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, Link as MuiLink } from '@mui/material';
import { Spin as Hamburger } from 'hamburger-react';
import ButtonComponent from '../buttonComponent';
import { FileDownloadIcon } from '../constants/icons';

interface NavLink {
  label: string;
  href: string;
}

interface MobileMenuProps {
  links: NavLink[];
}

const MobileMenu = ({ links }: MobileMenuProps) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenDrawer(newOpen);
  };

  return (
    <>
  
      <Box sx={{ zIndex: 1300, position: 'relative' }}>
        <Hamburger 
          toggled={openDrawer} 
          toggle={setOpenDrawer} 
          direction="right" 
          size={24} 
          color={openDrawer ? "white" : "white"} 
        />
      </Box>

      <Drawer 
        anchor="left" 
        open={openDrawer} 
        onClose={toggleDrawer(false)}
        slotProps={{ paper:{sx:{width: 300, pt: 5, bgcolor: 'background.default'}}  }}
      >
        <Box 
          role="presentation" 
          onClick={toggleDrawer(false)} 
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {links.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton component={MuiLink} href={item.href} sx={{ textDecoration: 'none', color: 'text.primary' }}>
                  <ListItemText 
                    primary={item.label} 
                    slotProps={{primary:{ fontFamily: 'poppins', fontWeight: 500 }}} 
                  />
                </ListItemButton>
              </ListItem>
            ))}
            
          
            <ListItem disablePadding sx={{ mt: 2, justifyContent: 'center' }}>
               <Box sx={{ width: '90%', display: 'flex', justifyContent: 'start' }}>
                  <ButtonComponent type="button" value="Download CV" icon={<FileDownloadIcon />} />
               </Box>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileMenu;