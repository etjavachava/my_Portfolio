import AboutMePage from "./assets/pages/aboutMe";
import Home from "./assets/pages/home";
import { Box } from "@mui/material";
import ServicesPage from "./assets/pages/myServices";
import PortfolioPage from "./assets/pages/portfolio";
import ContactMePage from "./assets/pages/contactMe";
import FooterPage from "./assets/pages/footer";
import { customColors } from "./assets/components/constants/colors";
function App() {
  return (
   < Box component="div" sx={{ backgroundColor: customColors.background,}}>
      <Box 
      component="main" 
      sx={{
       
        color:customColors.textColor,
        maxWidth: "1400px",
        mx: "auto", 
        px: 3
      }}
    >
      <Box component="section" id="home">
        <Home />
      </Box>
      <Box component="section" id="about">
        <AboutMePage />
      </Box>
      <Box component="section" id="services">
        <ServicesPage />
      </Box>
      <Box component="section" id="portfolio">
        <PortfolioPage />
      </Box>
      <Box component="section" id="contact">
        <ContactMePage />
      </Box>
      <Box component="section" id="footer">
        <FooterPage />
      </Box>
    </Box>   
   </Box>
    
  );
}

export default App;
