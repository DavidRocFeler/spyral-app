import ToastWarning from "@/components/ui/ToastWaring";
import { Box } from "@mui/material";

const PlayBackFailedView = () => {
  return (
    <Box
    display='flex'
    justifyContent='center'
    alignItems='center'
    height='80%'
    >
      <ToastWarning id="playback-failed" />
    </Box>
  )
};

export default PlayBackFailedView;
