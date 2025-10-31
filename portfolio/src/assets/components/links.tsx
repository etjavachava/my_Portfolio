import { Box, Typography } from "@mui/material";
import { customColors } from "./constants/colors";

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  links: NavLink[];
  color?: string;
}

function NavBar({ links, color = customColors.textColor }: NavbarProps) {

  const baseLinkStyles = {

    position: 'relative', 
    textDecoration: 'none', 
    color: color,
    fontFamily: "poppins",
    paddingBottom: '3px', 
    overflow: 'hidden', 
    
   
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '4px', 
      bottom: 0,
      left: 0,
      backgroundColor: customColors.primary
      , 
      
    
      transform: 'scaleX(0)', 
      transformOrigin: 'bottom left', 
      transition: 'transform 0.3s ease-out',
    },
    
  
    '&:hover': {

      '&::after': {
        transform: 'scaleX(1)',
      }
    },
    
    '&:focus': { 
      '&::after': {
        transform: 'scaleX(1)',
      },
    },
  };

  return (
    <Box component="nav">
      <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
        {links.map((link) => (
          <Typography
            variant="button"
            sx={baseLinkStyles} // Apply the complex animation styles here
            key={link.href}
            component={"a"}
            href={link.href}
          >
            {link.label}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

export default NavBar;