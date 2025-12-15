import { lazy, Suspense } from 'react';
import { Box, Container } from '@mui/material';
import LoadingComponent from './assets/components/LoadingComponent';
import Navigation from './assets/components/navigation/navigation';
import { SpeedInsights } from "@vercel/speed-insights/react"

const Home = lazy(() => import('./assets/pages/home'));
const AboutMePage = lazy(() => import('./assets/pages/aboutMe'));
const ServicesPage = lazy(() => import('./assets/pages/myServices'));
const PortfolioPage = lazy(() => import('./assets/pages/portfolio'));
const ContactMePage = lazy(() => import('./assets/pages/contactMe'));
const FooterPage = lazy(() => import('./assets/pages/footer'));


function App() {
  return (
    <Box
      component="div"
      sx={{ minHeight: '100vh', color: 'white' }}
    >
      <SpeedInsights/>
      <Navigation />
      <Suspense fallback={<LoadingComponent />}>
        <Box
          component="nav"
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 1900,
            width: '100%',
 
          }}
        >
    
       
     
        </Box>
        <Box
          component="section"
          id="home"
        
        >
          <Container>
            <Home />
          </Container>
        </Box>
        <Container maxWidth="lg" sx={{ color: 'white', lineHeight: 1.6 }}>
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
        </Container>
        <Box component="section" id="footer">
          <FooterPage />
         </Box>
      </Suspense>
    </Box>
  );
}

export default App;
