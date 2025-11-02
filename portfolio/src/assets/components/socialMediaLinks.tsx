import { Box, IconButton } from "@mui/material";
import { FacebookIcon,GitHubIcon,WhatsAppIcon,LinkedInIcon } from "./constants/icons"; 
interface SocialMediaLinksProps{
    color?:string;
    sx?:any;
    fontSize?:string;
}

function SocialMediaLinks({color,sx,fontSize}:SocialMediaLinksProps){

    return(<>
 <Box  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap:"20px",marginBottom:"20px",
 
          }}>
            <IconButton color="inherit" href="https://github.com/etjavachava" target="_blank">
             <GitHubIcon  sx={{'&:hover':{
      background:"  #b794f6",
            transform: "translateY(-5px) scale(1.1)",
            borderColor:" #fff" ,
            boxShadow:"0 8px 20px rgba(183, 148, 246, 0.4) " ,
               borderRadius:"50%",
            padding:"5px"
 },...sx}} />
            </IconButton>
            <IconButton color="inherit" href="https://wa.me/263775294734" target="_blank">
            <WhatsAppIcon  sx={{'&:hover':{
      background:"  #b794f6",
            transform: "translateY(-5px) scale(1.1)",
            borderColor:" #fff" ,
            boxShadow:"0 8px 20px rgba(183, 148, 246, 0.4) " ,
               borderRadius:"50%",
            padding:"5px"
 },...sx}}/>
            </IconButton>
            <IconButton color="inherit" href="https://www.facebook.com/ernesttapiwajavachava.javachava/" target="_blank">
              <FacebookIcon sx={{'&:hover':{
      background:"  #b794f6",
            transform: "translateY(-5px) scale(1.1)",
            borderColor:" #fff" ,
            boxShadow:"0 8px 20px rgba(183, 148, 246, 0.4) " ,
               borderRadius:"50%",
            padding:"5px"
 },...sx}}/>
            </IconButton>
            <IconButton color="inherit" href="https://www.linkedin.com/in/e-t-jay-beats-b779532a3/" target="_blank">
              <LinkedInIcon  sx={{'&:hover':{
      background:"  #b794f6",
            transform: "translateY(-8px) scale(1.1)",
            borderColor:" #fff" ,
            boxShadow:"0 10px 30px rgba(183, 148, 246, 0.4) " ,
             transition:"all 0.2s ease-in-out",
            padding:"5px"
 },...sx}} />
            </IconButton>
      
 
        
        
        </Box>
       




 
    </>)

}
 export default SocialMediaLinks