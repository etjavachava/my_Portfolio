import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Image } from '../components/imageComponent';


function AboutMePage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        color: 'white',
        my: '8rem',
      }}
    >
      <Box>
        <Typography variant="h2" align="center">
          About Me
        </Typography>
        <Typography align="center">
          Creative Professional | Problem Solver | Digital Innovator
        </Typography>
      </Box>
      <Grid container spacing={2} alignItems={"center"}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Image
            src="./images/ernest.png"
            alt="Ernest Javachava's profile"
          
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="body1" mb={'25px'}>
            I'm Ernest Javachava, a{' '}
            <Box component="span" >
              web developer and photographer
            </Box>{' '}
            who brings creativity and technical skill together to create meaningful digital
            experiences.
          </Typography>

          <Typography variant="body1" mb={'25px'}>
            My approach combines{' '}
            <Box component="span" >
              clean code with visual storytelling
            </Box>{' '}
            . Whether I'm building a website or capturing a moment through my lens, I focus on
            delivering quality work that makes an impact.
          </Typography>
          <Typography variant="body1">
            I'm passionate about creating solutions that are both functional and beautiful. Every
            project is an opportunity to bring ideas to life and exceed expectations.
          </Typography>
          <Box sx={{ marginTop: 5 }}>{/* info to be edded */}</Box>
        </Grid>
      </Grid>
    </Box>
  );
}
export default AboutMePage;
