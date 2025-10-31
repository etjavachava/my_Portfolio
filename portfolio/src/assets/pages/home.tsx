import ButtonComponent from '../components/buttonComponent';

import { Image } from '../components/imageComponent';
import { Box, colors, Container, Grid, Typography } from '@mui/material';

import theme from '../components/constants/theme';
import { TypeAnimation } from 'react-type-animation';
import { customColors } from '../components/constants/colors';

function Home() {
  function hireHandler() {
    console.log('button clicked');
  }
  return (
    <Container sx={{ borderBottom: '2px solid darkgray' }}>
      <Grid container spacing={1} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{}}>
            <Typography variant="body1" sx={{ marginBottom: '20px' }}>
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
            <Box sx={{ display: 'flex', gap: '30px' }}>
              <ButtonComponent
                type="button"
                onClick={hireHandler}
                value="CONTACT ME"
                sx={{ backgroundColor: 'primary' }}
              />
              <ButtonComponent
                type="button"
                onClick={hireHandler}
                value="VIEW MY PORTFOLIO"
                variant="outlined"
              />
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box>
            <Image
              src="./src/assets/images/ernest.png"
              alt="Ernest Javachava"
              width={600}
              height={670}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Home;
