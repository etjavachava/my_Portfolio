import { Box, Grid, Typography } from '@mui/material';
import CardComponent from '../components/cardComponent';
import CodeIcon from '@mui/icons-material/Code';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PaletteIcon from '@mui/icons-material/Palette';
function ServicesPage() {
  return (
    <Box>
      <Box sx={{}}>
        <Typography align="center" variant="body1" sx={{ my: '10px' }}>
          MY SERVICES
        </Typography>
        <Typography variant="h4" align="center" sx={{ mb: '40px' }}>
          The Services I Provide
        </Typography>
        <Grid container spacing={6} sx={{ margin: 'auto' }}>
          <Grid size={{ xs: 6 }}>
            <CardComponent
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                pr: '20px',
                borderRadius: '12px',
                backgroundColor: '#fff',
                color: '#9024B6',
              }}
              width={600}
              height={180}
              CardIcon={
                <CodeIcon
                  sx={{
                    fontSize: '150px',
                    textAlign: 'left',
                    color: '#9024B6',
                  }}
                />
              }
              title="Web development"
              description="I'm a skilled web developer passionate about crafting fast, responsive, and visually engaging websites with clean, efficient code and thoughtful design."
              elevation={1}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <CardComponent
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                pr: '20px',
                borderRadius: '12px',
                backgroundColor: '#9024B6',
                color: 'white',
              }}
              width={600}
              height={180}
              CardIcon={
                <CameraAltIcon sx={{ fontSize: '150px', textAlign: 'left', color: 'white' }} />
              }
              title="Photography"
              description="I deliver high-quality brand, product, and portrait photography that tells your story and strengthens your digital presence with authentic, professional visuals."
              elevation={1}
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <CardComponent
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                pr: '20px',
                borderRadius: '12px',
                backgroundColor: '#fff',
                color: '#9024B6',
              }}
              width={600}
              height={180}
              CardIcon={
                <SmartToyIcon
                  sx={{
                    fontSize: '150px',
                    textAlign: 'left',
                    color: '#9024B6',
                  }}
                />
              }
              title="AI Chat Bots"
              description="I build intelligent chatbots that boost user engagement, deliver instant support, and enhance your website’s customer experience."
              elevation={1}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <CardComponent
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                pr: '20px',
                borderRadius: '12px',
                backgroundColor: '#fff',
                color: '#9024B6',
              }}
              width={600}
              height={180}
              CardIcon={
                <PaletteIcon
                  sx={{
                    fontSize: '150px',
                    textAlign: 'left',
                    color: '#9024B6',
                  }}
                />
              }
              title="Complete Brand Packages"
              description="I offer complete brand development—combining professional photography and custom web design to create cohesive, visually striking digital identities."
              elevation={2}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
export default ServicesPage;
