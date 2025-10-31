import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import type React from "react";

interface CardComponentProps {
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
  hover = false,
}: CardComponentProps) {
  return (
    <Card 
    
      sx={{
        minHeight,
        width,
        height,
        maxWidth,
        gap:{gap},
        cursor: onClick ? "pointer" : "default",
        transition: hover ? "all 0.3s ease-in-out" : "none",
        "&:hover": hover
          ? {
              transform: "translateY(-4px)",
              boxShadow: 6,
            }
          : {},
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
      </CardContent>
    </Card>
  );
}

export default CardComponent;
