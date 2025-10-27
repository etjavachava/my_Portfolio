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
  
  onClick,
  hover = false,
}: CardComponentProps) {
  return (
    <Card
      sx={{
        width,
        height,
        maxWidth,
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
          <Typography gutterBottom variant="h6" component="h2" fontWeight={800}>
            {title}
          </Typography>
        )}

      
        {subtitle && (
          <Typography variant="body1"  gutterBottom>
            {subtitle}
          </Typography>
        )}

      
        {description && (
          <Typography variant="caption" >
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default CardComponent;
