import { Box, Grid, Typography } from '@mui/material';
import CardComponent from '../components/cardComponent';

function PortfolioPage() {
  return (
    <Box sx={{ minHeight: '100vh', my: '8rem' }}>
      <Box textAlign={'center'}>
        <Typography variant="h2" sx={{ my: '20px' }}>
          Work and Projects
        </Typography>
        <Typography variant="body1" sx={{ mb: '20px' }}>
          Delivering complete digital solutions through code and camera
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent={'space-evenly'}>
        <Grid size={3} sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
          <CardComponent
            imageSrc="./src/assets/images/ernest2.jpg"
            imageHeight={300}
            width={300}
            title="Web Development"
            description="Modern, responsive websites built with HTML, CSS, JavaScript & React. From landing pages to full-stack applications."
          />
        </Grid>

        <Grid size={3} sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
          <CardComponent
            imageSrc="./src/assets/images/ernest2.jpg"
            imageHeight={300}
            width={300}
            title="Photography"
            description=" Professional portrait photography for personal branding, events, and creative projects. Capturing authentic moments with style.
                    "
          />
        </Grid>

        <Grid size={3} sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
          <CardComponent
          
            imageSrc="./src/assets/images/ernest2.jpg"
            imageHeight={300}
            width={300}
            title="Whatsapp Chatbots"
            description="Smart WhatsApp automation for businesses. Handle customer inquiries, take orders, and send updates directly on WhatsApp."
          />
        </Grid>
      </Grid>
    </Box>
  );
}
export default PortfolioPage;
