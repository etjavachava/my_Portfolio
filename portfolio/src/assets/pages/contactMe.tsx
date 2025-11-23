import { Box, Grid, Typography, TextField, Stack } from '@mui/material';
import ButtonComponent from '../components/buttonComponent';
import ProfileInfo from '../components/profileInfo';
import { Send } from '@mui/icons-material';
import { goldBorderTransparent } from '../components/constants/themes/colors';

function ContactMePage() {
  return (
    <Box sx={{ textAlign: 'center', my:"8rem",maxWidth: 1200, mx: 'auto', px: 2   }}>

      <Typography variant="h2" sx={{ marginBottom:"20px"}}>
        Lets Make Something Together
      </Typography>
      <Typography variant="body1" sx={{ marginBottom:"20px" }}>
        Connect with us effortlessly! Click the "Contact Me" button to reach out and let's discuss
        how we can transform your digital experiences into unforgettable journeys.
      </Typography>
      <Grid container  >
        <Grid size={{xs:12,md:6}}>
          <Stack component="form" >
            <Box sx={{backgroundColor:"secondary.main",  padding:"40px" ,
            borderRadius:"12px" ,
            border:`1px solid ${goldBorderTransparent}`}}>
              <Typography textAlign={'left'} mb={1}>Name*</Typography>
            <TextField
              sx={{
                my: '10px',
                '& .MuiFilledInput-root': {
                     input:{
                    backgroundColor:"lightgray"
                  }
                },
              }}
          
              variant="filled"
              size="small"
              id="filled-basic"
              fullWidth
              required
            />
            <Typography textAlign={'left'} mb={1}>Email*</Typography>
            <TextField
              sx={{
                my: '10px ',
                '& .MuiFilledInput-root': {
                
                  input:{
                    backgroundColor:"lightgray",
                    borderColor:"red"
                  }
                },

              }}
              variant="filled"
              size="small"
              fullWidth
              required
           
            />
<Typography textAlign={'left'} mb={1}>Message*</Typography>
            <TextField
            sx={{
              my:"10px",
              "& .MuiFilledInput-root":{
                backgroundColor:"lightgray !important",
                input:{
                  borderColor:"red"
                }
              },
              "& .hover":{
                backgroundColor:"lightgray"
              },
              "& .Mui-Focused":{
                backgroundColor:'lightgray'
              }
            }}
       
         variant='filled'
         multiline
         rows={5}
         fullWidth
         required
            />
              <ButtonComponent sx={{width:"100%",mt:"20px"}} type="submit" value="send" icon={<Send/>} />
            </Box>

            
          </Stack>
        </Grid>
        <Grid size={{xs:12,md:6}} >
          <Typography variant="h3" gutterBottom >
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
