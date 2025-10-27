import { Box, Typography } from "@mui/material";
import { customColors } from "./constants/colors";

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  links: NavLink[];
  color?:string
}
function NavBar({ links,color=customColors.textColor}: NavbarProps) {
  return (
    <Box
      component="nav" 
    >
      <Box  sx={{display:{xs:"none",md:"flex"},gap:4}}>
        {links.map((link) => (
          <Typography variant="button"
            sx={{
              textDecoration: "none",
             color:color,
             fontFamily:"poppins",
            
              "&:hover": {
                color: "red",
                transition: "color 0.2s ease-in-out",
              },
              "&:focus": { color: "blue" },
            }}
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
