import { Box, Typography } from "@mui/material";

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  links: NavLink[];
  color?: string;
}

function NavBar({ links, color = "text.primary" }: NavbarProps) {
  
  const baseLinkStyles = {
    position: 'relative',
    textDecoration: 'none',
    color: color,
    fontFamily: "poppins",
    paddingBottom: '3px',
    overflow: 'hidden',
    cursor: 'pointer',

    '&::after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '2px', 
      bottom: 0,
      left: 0,
      backgroundColor: "primary.main", 
      transform: 'scaleX(0)',
      transformOrigin: 'bottom left',
      transition: 'transform 0.3s ease-out',
    },

    '&:hover': {
      '&::after': {
        transform: 'scaleX(1)',
      }
    },
  };

  return (
    <Box component="nav" sx={{ display: 'flex', gap: 4 }}>
      {links.map((link) => (
        <Typography
          key={link.href}
          variant="button"
          component="a"
          href={link.href}
          sx={baseLinkStyles}
        >
          {link.label}
        </Typography>
      ))}
    </Box>
  );
}

export default NavBar;