import { Box, Grid, Typography } from '@mui/material';
import CardComponent from '../components/cardComponent';
import CodeIcon from '@mui/icons-material/Code';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PaletteIcon from '@mui/icons-material/Palette';
function ServicesPage() {
  return (
    <Box>
      <Box sx={{ minHeight: '100vh', my: '8rem',maxWidth: 1200, mx: 'auto', px: 2 }}>
        <Typography align="center" variant="h2" sx={{ my: '10px' }}>
          MY SERVICES
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: '60px' }}>
          The Services I Provide
        </Typography>
        <Grid container spacing={10} sx={{}}>
          <Grid size={{ xs: 12, xl:6 }}>
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
             
            />
          </Grid>
          <Grid size={{ xs: 12 ,lg:6 }}>
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
          
              CardIcon={
                <CameraAltIcon sx={{ fontSize: '150px', textAlign: 'left', color: 'white' }} />
              }
              title="Photography"
              description="I deliver high-quality brand, product, and portrait photography that tells your story and strengthens your digital presence with authentic, professional visuals."
           
            />
          </Grid>

          <Grid size={{  xs: 12 ,lg:6 }}>
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
             
            />
          </Grid>
          <Grid size={{  xs: 12 ,lg:6 }}>
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
              elevation={1}
              
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
export default ServicesPage;
