import ButtonComponent from '../components/buttonComponent';
import NavBar from '../components/links';
import { Image } from '../components/imageComponent';
import { Box, Grid, Typography } from '@mui/material';
import { FileDownloadIcon } from '../components/constants/icons';
import { ArrowForwardIosIcon } from '../components/constants/icons';

import theme from '../components/constants/theme';

export const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT ME', href: '#about' },
  { label: 'MY SERVICES', href: '#services' },
  { label: 'PORTFOLIO', href: '#portfolio' },
  { label: 'TESTIMONIALS', href: '#contact' },
  { label: 'CONTACT ME', href: '#contact' },
];
function Home() {
  function hireHandler() {
    console.log('button clicked');
  }
  return (
    <Box sx={{ margin: 'auto' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '5px',
        }}
      >
        <Typography variant="h3">ERNEST</Typography>
        <NavBar links={navLinks} />
        <ButtonComponent type="button" value="Download CV" icon={<FileDownloadIcon />} />
      </Box>
      <Box component="main">
        <Grid container spacing={1} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography>I am</Typography>
              <Typography variant="h4">Ernest Javachava</Typography>
              <Typography
                variant="h3"
                sx={{ fontWeight: '800' }}
                color={theme.palette.secondary.main}
              >
                Web developer &
              </Typography>
              <Typography variant="h3" sx={{ marginBottom: '10px' }}>
                {' '}
                Photographer
              </Typography>
              <ButtonComponent
                type="button"
                onClick={hireHandler}
                value="Hire"
                icon={<ArrowForwardIosIcon />}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              <Image src="./src/assets/images/ernest.png" width={600} height={670} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
export default Home;
