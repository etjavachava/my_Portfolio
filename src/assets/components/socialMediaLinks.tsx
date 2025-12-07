import { Box, IconButton } from "@mui/material";
import { FacebookIcon,GitHubIcon,WhatsAppIcon,LinkedInIcon } from "./constants/icons"; 
interface SocialMediaLinksProps{

    sx?:any;

}

function SocialMediaLinks({sx}:SocialMediaLinksProps){

    return(<>
 <Box  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap:"20px",marginBottom:"20px",
 
          }}>
            <IconButton color="inherit" href="https://github.com/etjavachava" target="_blank">
             <GitHubIcon  sx={{'&:hover':{
    
            transform: "translateY(-5px) scale(3.1)",
            borderColor:" #fff" ,
     
               borderRadius:"50%",
            padding:"5px"
 },...sx}} />
            </IconButton>
            <IconButton color="inherit" href="https://wa.me/263775294734" target="_blank">
            <WhatsAppIcon  sx={{'&:hover':{
      
            transform: "translateY(-5px) scale(3.1)",
            borderColor:" #fff" ,
         transition:"all 0.2s ease-in-out",
               borderRadius:"50%",
            padding:"5px"
 },...sx}}/>
            </IconButton>
            <IconButton color="inherit" href="https://www.facebook.com/ernesttapiwajavachava.javachava/" target="_blank">
              <FacebookIcon sx={{'&:hover':{
    
            transform: "translateY(-5px) scale(3.1)",
            borderColor:" #fff" ,
      transition:"all 0.2s ease-in-out",
               borderRadius:"50%",
            padding:"5px"
 },...sx}}/>
            </IconButton>
            <IconButton color="inherit" href="https://www.linkedin.com/in/e-t-jay-beats-b779532a3/" target="_blank">
              <LinkedInIcon  sx={{'&:hover':{

            transform: "translateY(-8px) scale(3.1)",
            borderColor:" #fff" ,
        
             transition:"all 0.2s ease-in-out",
            padding:"5px"
 },...sx}} />
            </IconButton>
      
        </Box>
       




 
    </>)

}
 export default SocialMediaLinks