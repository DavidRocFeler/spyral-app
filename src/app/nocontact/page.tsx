import ToastWarning from "@/components/ui/ToastWaring";
import { Box } from "@mui/material";

const NoContactView = () => {
  return (
    <Box
    display='flex'
    justifyContent='center'
    alignItems='center'
    height='80%'
    >
      <ToastWarning id="no-contact" />
    </Box>
  )
};

export default NoContactView;

