import ToastWarning from "@/components/ui/ToastWaring";
import { Box } from "@mui/material";

const NoFileView = () => {
  return (
    <Box
    display='flex'
    justifyContent='center'
    alignItems='center'
    height='80%'
    >
      <ToastWarning id="no-file" />
    </Box>
  )
};

export default NoFileView;