import { Box, Chip, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Image } from '../components/imageComponent';
import { Slider } from '@mui/material';
import { Palette } from '@mui/icons-material';

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
      </Box>
      <Grid container spacing={2} alignItems={'center'}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Image
            src=".\src\assets\images\ernest.png"
            alt="Ernest Javachava's profile"
            width={400}
            height={480}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h3" gutterBottom>
            Why Hire Me
          </Typography>

          <Typography variant="body1" mb={2}>
            I'm a web developer and photographer who combines technical expertise with creative
            vision. I craft visually stunning and high-performing websites while my photography
            skills enhance every design, ensuring each project tells a compelling story and captures
            attention with precision and style. With a strong foundation in modern web technologies
            and a keen eye for detail, I deliver solutions that not only meet technical requirements
            but also create memorable user experiences.
          </Typography>
     

          <Typography variant='body1'>
            My unique value lies in the **synergy between my two crafts**. My photographer's eye
            ensures every design choice is visually intentional, resulting in superior aesthetics
            and powerful brand storytelling. I provide end-to-end service, capturing the necessary
            high-quality imagery and integrating it perfectly into the final web solution. I am
            passionate about turning complex ideas into elegant, functional realities that drive
            results and leave a lasting impression.
          </Typography>
          <Box sx={{ marginTop: 5 }}>{/* info to be edded */}</Box>
        </Grid>
      </Grid>
    </Box>
  );
}
export default AboutMePage;
