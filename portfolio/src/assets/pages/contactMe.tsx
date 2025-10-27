import { Box, Grid, Typography, TextField, Stack } from '@mui/material';
import ButtonComponent from '../components/buttonComponent';
import ProfileInfo from '../components/profileInfo';

function ContactMePage() {
  return (
    <Box sx={{ textAlign: 'center', p: 3, margin: 'auto' }}>
      <Typography variant="body1" sx={{ my: '10px' }}>
        CONTACT ME
      </Typography>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Lets Make Something Together
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Connect with us effortlessly! Click the "Contact Me" button to reach out and let's discuss
        how we can transform your digital experiences into unforgettable journeys.
      </Typography>
      <Grid container spacing={0}>
        <Grid size={6}>
          <Stack component="form">
            <TextField
              sx={{
                my: '10px',
                '& .MuiFilledInput-root': {
                  backgroundColor: 'lightgray',
                },
              }}
              label="Name"
              variant="filled"
              size="small"
              id="filled-basic"
            />
            <TextField
              sx={{
                my: '10px ',
                '& .MuiFilledInput-root': {
                  backgroundColor: 'lightgray',
                },
              }}
              label="Email"
              variant="filled"
              size="small"
            />

            <TextField
              sx={{
                my: '10px',
                '& .MuiFilledInput-root': {
                  backgroundColor: 'lightgray',
                },
              }}
              label="Message"
              variant="filled"
              multiline
              rows={6}
              fullWidth
            />
            <ButtonComponent type="submit" value="send" />
          </Stack>
        </Grid>
        <Grid size={6}>
          <Typography variant="h4" gutterBottom color="purple">
            Personal Details
          </Typography>
          <ProfileInfo
            name="Ernest T Javachava"
            email="ernestjavaz@gmail.com"
            phone="+263 77 5294 734"
            address="303 Chibondo Hwange"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactMePage;
