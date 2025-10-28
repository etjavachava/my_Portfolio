import { Box, Grid, Typography, TextField, Stack } from '@mui/material';
import ButtonComponent from '../components/buttonComponent';
import ProfileInfo from '../components/profileInfo';
import { customColors } from '../components/constants/colors';
import { Send } from '@mui/icons-material';

function ContactMePage() {
  return (
    <Box sx={{ textAlign: 'center', p: 3, margin: 'auto', minHeight:"100vh" }}>
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
      <Grid container gap={6} sx={{justifyContent:"space-around"}}>
        <Grid size={4}>
          <Stack component="form" sx={{width:"500px"}}>
            <TextField
              sx={{
                my: '10px',
                '& .MuiFilledInput-root': {
                     input:{
                    backgroundColor:"lightgray"
                  }
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
                
                  input:{
                    backgroundColor:"lightgray"
                  }
                },

              }}
              label="Email"
              variant="filled"
              size="small"
            />

            <TextField
            sx={{
              my:"10px",
              "& .MuiFilledInput-root":{
                backgroundColor:"lightgray !important"
              },
              "& .hover":{
                backgroundColor:"lightgray"
              },
              "& .Mui-Focused":{
                backgroundColor:'lightgray'
              }
            }}
         label="message"
         variant='filled'
         multiline
         rows={6}
            />
            <Box alignItems="flex-end" width={800} textAlign={"center"}>
            <ButtonComponent type="submit" value="send" icon={<Send/>} sx={{width:"200px", backgroundColor:customColors.primary,textAlign:"right"}}/>
            </Box>
          </Stack>
        </Grid>
        <Grid size={6}>
          <Typography variant="h4" gutterBottom sx={{color:customColors.primary}}>
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
