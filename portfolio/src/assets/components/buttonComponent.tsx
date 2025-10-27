import { Button,Typography } from "@mui/material";
import { customColors } from "./constants/colors";

interface ButtonProp {
  type: "submit" | "button" | "reset";
  value: string;
  variant?:"contained"|"text"| "outlined"
  color?:string;
  icon?: React.ReactNode;
  onClick?: () => void;
  sx?:any
}
function ButtonComponent({ type, value, icon, onClick,variant="contained",   sx={padding:"10px 40px",borderRadius:"2",backgroundColor:customColors.primary, "& .MuiButton-endIcon":{
Right:"0"

}}}: ButtonProp) {
  return (
    <Button
    variant={variant}
      endIcon={icon}
      type={type}
      onClick={onClick}
      sx={sx}
    >
      <Typography variant="button"> {value}</Typography>
     
    </Button>
  );
}
export default ButtonComponent;
