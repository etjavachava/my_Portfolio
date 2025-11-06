import { Box, Grid, Typography } from '@mui/material';
import CardComponent from '../components/cardComponent';


function PortfolioPage() {
  return (
    <Box sx={{ minHeight: '100vh', my: '8rem',maxWidth: 1200, mx: 'auto', px: 2 }}>
      <Box textAlign={'center'}>
        <Typography variant="h2" sx={{ my: '20px' }}>
          Work and Projects
        </Typography>
        <Typography variant="body1" sx={{ mb: '20px' }}>
          Delivering complete digital solutions through code and camera
        </Typography>
      </Box>

      <Grid container spacing={4} >
        <Grid  size={{xs:12,md:4}} >
          <CardComponent
            imageSrc=".//images/ernest2.jpg"
            imageHeight={300}
              sx={{height:"480px"}}
            title="Web Development"
            description="Modern, responsive websites built with HTML, CSS, JavaScript & React. From landing pages to full-stack applications."
          />
        </Grid>

        <Grid size={{xs:12,md:4}}>
          <CardComponent
            imageSrc="./images/ernest2.jpg"
            imageHeight={300}
         sx={{height:"480px"}}
            title="Photography"
            description=" Professional portrait photography for personal branding, events, and creative projects. Capturing authentic moments with style.
                    "
          />
        </Grid>

        <Grid size={{xs:12,md:4}} sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
          <CardComponent
          
            imageSrc="./images/ernest2.jpg"
            imageHeight={300}
         sx={{height:"480px"}}
            title="Whatsapp Chatbots"
            description="Smart WhatsApp automation for businesses. Handle customer inquiries, take orders, and send updates directly on WhatsApp."
            
          />
         
        </Grid>
      </Grid>
    </Box>
  );
}
export default PortfolioPage;
