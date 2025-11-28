import ToastWarning from "@/components/ui/ToastWaring";
import { Box } from "@mui/material";

const NoFavoriteView = () => {
  return (
    <Box
    display='flex'
    justifyContent='center'
    alignItems='center'
    height='80%'
    >
      <ToastWarning id="no-favorite" />
    </Box>
  )
  
};

export default NoFavoriteView;
