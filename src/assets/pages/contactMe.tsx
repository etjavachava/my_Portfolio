import { Box, Grid, Typography, TextField, Stack } from '@mui/material';
import ButtonComponent from '../components/buttonComponent';
import ProfileInfo from '../components/profileInfo';
import { Send } from '@mui/icons-material';
import { goldBorderTransparent } from '../components/constants/themes/colors';
import  emailjs from '@emailjs/browser';
import  { useRef, useState } from 'react';
import type { FormEvent } from 'react';

function ContactMePage() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState({ type: '', message: '' });

  const SERVICE_ID =import.meta.env.VITE_SERVICE_ID ;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY =import.meta.env.VITE_EMAILJS_PUBIC_API;

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log('SUCCESS!', result.text);
          setStatus({ type: 'success', message: 'Message sent successfully!' });
          form.current?.reset(); // Clear form
      }, (error) => {
          console.error('FAILED...', error);
          setStatus({ type: 'error', message: 'Failed to send. Please try again.' });
      });
  };

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
          <Stack component="form" ref={form} onSubmit={sendEmail}>
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
          
              name="name"
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
              name="email"
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
       
         name="message"
         variant='filled'
         multiline
         rows={5}
         fullWidth
         required
            />
              <ButtonComponent sx={{width:"100%",mt:"20px"}} type="submit" value="send" icon={<Send/>} />
              {status.message && (
                <Typography sx={{ mt: 2 }} color={status.type === 'success' ? 'success.main' : 'error'}>
                  {status.message}
                </Typography>
              )}
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
