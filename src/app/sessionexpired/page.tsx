import ToastWarning from "@/components/ui/ToastWaring";
import { Box } from "@mui/material";

const SessionExpiredView = () => {
  return (
    <Box
    display='flex'
    justifyContent='center'
    alignItems='center'
    height='80%'
    >
      <ToastWarning id="session-expired" />
    </Box>
  )
};

export default SessionExpiredView;
