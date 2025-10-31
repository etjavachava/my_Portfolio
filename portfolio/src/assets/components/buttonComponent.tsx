import { Button, Typography, type SxProps } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import { customColors } from "./constants/colors";

interface ButtonProp {
  type: "submit" | "button" | "reset";
  value: string;
  variant?: "contained" | "text" | "outlined";
  color?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  sx?: SxProps<Theme>;
  disabled?: boolean;
  fullWidth?: boolean;
href?:string;
}
function ButtonComponent({ type, value, icon, onClick,variant="contained",href,  sx={padding:"10px 40px",borderRadius:"6px"}}: ButtonProp) {
  return (
    <Button size="large"
    variant={variant}
      endIcon={icon}
      type={type}
      onClick={onClick}
      sx={sx}
 href={href}
  color="primary"
    >
      <Typography variant="button"> {value}</Typography>
     
    </Button>
  );
}
export default ButtonComponent;
