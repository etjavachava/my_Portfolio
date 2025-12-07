import ButtonComponent from '../components/buttonComponent';

import { Image } from '../components/image/imageComponent';
import { Box, Container, Grid, Typography } from '@mui/material';

import { TypeAnimation } from 'react-type-animation';

function Home() {
  return (
    <Container sx={{ borderBottom: '1px solid rgba(157, 78, 221, 0.3) ', }}>
      <Grid container spacing={1} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{}}>
            <Typography variant="body1" sx={{ marginBottom: '20px', marginTop:{xs:"80px"},xs:{} }} >
              I am
            </Typography>

            <Typography variant="h1" sx={{ marginBottom: '20px' }}>
              Ernest Javachava
            </Typography>
            <Typography
              variant="h1"
              sx={{ fontWeight: 'normal', marginBottom: '20px' }}
              color={'primary'}
            >
              <TypeAnimation
                sequence={['Web Developer', 2000, '', 50, 'Photographer', 2000, '', 50]}
                repeat={Infinity}
              />
            </Typography>
            <Box
              sx={{
                display: { xs: 'flex', lg: 'flex' },
                flexDirection: { xs: 'column', md: 'row' },
                gap: '30px',
              }}
            >
              <ButtonComponent
                type="button"
                href="#contact"
                value="CONTACT ME"
                sx={{ backgroundColor: 'primary' }}
              />
              <ButtonComponent
                type="button"
                href="#portfolio"
                value="VIEW MY PORTFOLIO"
                variant="outlined"
              />
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box>
            <Image src="./images/ernest.png" alt="Ernest Javachava" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Home;
