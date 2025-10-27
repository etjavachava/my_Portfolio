import { Box, Grid, Typography } from '@mui/material';
import CardComponent from '../components/cardComponent';

function PortfolioPage() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Typography variant="body1" sx={{ my: '20px' }}>
        Portfolio
      </Typography>
      <Typography variant="h4" sx={{ mb: '20px' }}>
        Work and Projects
      </Typography>
      <Typography variant="body1" sx={{ my: '10px' }}>
        {' '}
        Delivering complete digital solutions through code and camera. From building fast,
        responsive websites to capturing stunning visual content, I provide the technical foundation
        and visual assets that make your online presence stand out.
      </Typography>
      <Grid container spacing={4}>
        <Grid
          size={{ xs: 4 }}
          sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}
        >
          <CardComponent
            imageSrc="./src/assets/images/ernest2.jpg"
            imageHeight={500}
            width={400}
            title="Web Development"
          />
        </Grid>
        <Grid
          size={{ xs: 4 }}
          sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}
        >
          <CardComponent
            imageSrc="./src/assets/images/puckey.jpg"
            imageHeight={500}
            width={400}
            title="Photography"
          />
        </Grid>
        <Grid
          size={{ xs: 4 }}
          sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}
        >
          <CardComponent
            imageSrc="./src/assets/images/ernest2.jpg"
            imageHeight={500}
            width={400}
            title="Chatbot"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
export default PortfolioPage;
