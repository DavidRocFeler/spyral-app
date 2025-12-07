import { trackingButton } from "@/mock/trackingButtons.mock";
import { Box } from "@mui/material";
import TrackingButton from "../ui/TrackinButton";

const ListButtonsTracking = ({ trackingStatus }: { trackingStatus: number }) => {
  const getButtonStyles = (index: number) => {
    if (index < trackingStatus - 1) {
      // Botones completados
      return {
        bgcolor: 'secondary.main',
        borderColor: 'secondary.main',
        color: '#000'
      };
    } else if (index === trackingStatus - 1) {
      // Botón actual
      return {
        bgcolor: 'grey.900',
        borderColor: 'secondary.main',
        color: '#E2FC0B'
      };
    } else {
      // Botones pendientes
      return {
        bgcolor: 'grey.900',
        borderColor: 'transparent',
        color: '#808080'
      };
    }
  };

  return (
    <Box display="flex" gap={5} mb={3} mx='auto'>
      {trackingButton.map((button, index) => {
        const styles = getButtonStyles(index);
        return (
          <TrackingButton
            key={index}
            text={button.text}
            icon={button.icon}
            bgcolor={styles.bgcolor}
            borderColor={styles.borderColor}
            color={styles.color}
          />
        );
      })}
    </Box>
  );
}; 

export default ListButtonsTracking;