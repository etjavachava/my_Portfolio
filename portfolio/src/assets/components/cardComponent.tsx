import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
  Chip
} from "@mui/material";
import type React from "react";

export interface CardComponentProps {
  title?: string;
  subtitle?: string;
  description?: string;
CardIcon?:React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imageHeight?: number | string;
  imageWidth?:number | string
  width?: number | string;
  height?: number | string;
  maxWidth?: number | string;
  elevation?: number;
  sx?: any;
  onClick?: () => void;
  hover?: boolean;
  minHeight?:number| string
  gap?:number | string
  stack?:string[] | undefined;
      id?:number;
    category?:string,

}

function CardComponent({
  title,
  subtitle,
  description,
  CardIcon,
  imageSrc,
  imageAlt = "Card image",
  imageHeight = 200,
  imageWidth=20,
  width = "100%",
  height = "auto",
  maxWidth,
  elevation = 0,
  sx = {},
  minHeight="260px",
  gap="30px",
  onClick,
  stack,
 
}: CardComponentProps) {
  return (
    <Card 
    
      sx={{
        minHeight,
        width,
        height,
        maxWidth,
        gap:{gap},
        ...sx,
      }}
      elevation={elevation}
      onClick={onClick}
      
      
    >
 {CardIcon &&(
        <Box sx={{mb:1}}>
          <IconButton >{CardIcon}</IconButton>
        </Box>
      )}
     

      {imageSrc && (
        <CardMedia
          component="img"
          height={imageHeight}
          width={imageWidth}
          image={imageSrc}
          alt={imageAlt}
        />
      )}

     
      <CardContent>
      <Box my={2}>
        {title && (
          <Typography gutterBottom variant="h4" component="h2" fontWeight={800}>
            {title}
          </Typography>

   
        )}
 
      
        {subtitle && (
          <Typography variant="overline"  gutterBottom>
            {subtitle}
          </Typography>
        )}

      
        {description && (
          <Typography variant="body2" >
            {description}
          </Typography>
        )}
        </Box>
          {stack && (
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt:"10px" }}>
            {stack.map((tech) => (
              <Chip 
                key={tech} 
                label={tech} 
                size="small" 
                variant="outlined" 
                sx={{ 
                   fontSize: '0.7rem',
                   
                   borderColor: '#eab308', 
                   color: 'text.secondary' 
                }} 
              />
            ))}
          </Box>
   )}
      </CardContent>
    </Card>
  );
}

export default CardComponent;
