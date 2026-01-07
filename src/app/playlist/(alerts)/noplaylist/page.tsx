import ToastWarning from "@/components/ui/ToastWaring";
import { Box } from "@mui/material";

const NoPlayListView = () => {
  return (
    <Box
    display='flex'
    justifyContent='center'
    alignItems='center'
    height='80%'
    >
      <ToastWarning id="playlist-empty" />
    </Box>
  )
};

export default NoPlayListView;
