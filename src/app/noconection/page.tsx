import ToastWarning from "@/components/ui/ToastWaring";
import { Box } from "@mui/material";

const NoConectionView = () => {
  return (
    <Box
    display='flex'
    justifyContent='center'
    alignItems='center'
    height='80%'
    >
      <ToastWarning id="no-internet" />
    </Box>
  )
};

export default NoConectionView;


