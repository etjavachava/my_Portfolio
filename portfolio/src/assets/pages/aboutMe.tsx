import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Image } from "../components/imageComponent";

import ButtonComponent from "../components/buttonComponent";
import { FileDownloadIcon } from "../components/constants/icons";


function AboutMePage() {
  return (
    <Box
      sx={{
        minHeight:"100vh",
        color:"white"
      }}
    >
      <Box>
        <Typography variant="body2" align="center">
          About Me
        </Typography>
      </Box>
      <Grid container spacing={2} alignItems={"center"}>
        <Grid size={{xs:12,md:6}}  >
          <Image
            src=".\src\assets\images\placeholder.jpg"
            width={400}
            height={600}
          />
        </Grid>
        <Grid size={{xs:12,md:6}}>
          <Typography variant="h6" gutterBottom>
            Why You Hire Me
          </Typography>
          <Typography variant="body1">
            You should hire me as a web developer and photographer because I
            combine technical expertise with creative vision, crafting visually
            stunning and high-performing websites. My photography skills enhance
            my designs, ensuring every project tells a compelling story and
            captures attention with precision and style.
          </Typography>
          <Box sx={{ marginTop: 5 }}>
{/* info to be edded */}
          </Box>
          <Box sx={{ marginTop: 5 }}>
            {" "}
            <ButtonComponent
              type="button"
              value="Download CV"
              icon={<FileDownloadIcon />}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
    
  );
}
export default AboutMePage;
