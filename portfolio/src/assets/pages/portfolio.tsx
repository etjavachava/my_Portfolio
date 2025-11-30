import { useState } from 'react';
import { Box, Grid, Typography, Stack } from '@mui/material';
import CardComponent from '../components/cardComponent';
import ButtonComponent from '../components/buttonComponent';
import projects from '../components/project';
import { category } from '../components/project';



function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All Projects');



  const filteredProjects = projects.filter((project) => 
    activeFilter === 'All Projects' 
      ? true 
      : project.category === activeFilter
  );

  return (
    <Box sx={{ minHeight: '100vh', my: '8rem', maxWidth: 1200, mx: 'auto', px: 2 }}>
  
      <Box textAlign={'center'}>
        <Typography variant="h2" sx={{ my: '20px' }}>
          Work and Projects
        </Typography>
        <Typography variant="body1" sx={{ mb: '20px' }}>
          Delivering complete digital solutions through code and camera
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 6, flexWrap: 'wrap' }}>
        {category.map((cat) => (
          <ButtonComponent 
            key={cat}
            type='button' 
          
            value={cat} 
         
            variant={activeFilter === cat ? "contained" : "outlined"} 
           
            onClick={() => setActiveFilter(cat)}
            sx={{
              borderRadius: "30px",
         
              backgroundColor: activeFilter === cat ? 'primary.main' : 'transparent',
              color: activeFilter === cat ? 'white' : 'primary.main'
            }}
          />
        ))}
      </Box>

    
      <Grid container spacing={4}>
       
        {filteredProjects.map((project) => (
          <Grid size={{xs:12, md:4} }key={project.id}>
            <CardComponent
              imageSrc={project.imageSrc}
              imageHeight={250}
              sx={{ height: "480px" }}
              title={project.title}
              description={project.description}
              stack={project.stack}
            />
          </Grid>
        ))}
        

        {filteredProjects.length === 0 && (
          <Grid size={12}>
            <Typography align="center" sx={{ color: 'gray', mt: 4 }}>
              No projects found in this category.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default PortfolioPage;