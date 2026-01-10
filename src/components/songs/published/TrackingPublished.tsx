import { trackingButton } from "@/mock/trackingButtons.mock";
import { Box } from "@mui/material";
import { Fragment } from "react"; 
import ButtonTrackPublished from "./ButtonTrackPublished";

const TrackingPublished= ({ trackingStatus }: { trackingStatus: number }) => {
  const getButtonStyles = (index: number) => {
    if (index < trackingStatus - 1) {
      return {
        bgcolor: 'secondary.main',
        borderColor: 'secondary.main',
        color: 'text.secondary'
      };
    } else if (index === trackingStatus - 1) {
      // Buttons Currently
      return {
        bgcolor: 'grey.900',
        borderColor: 'secondary.main',
        color: '#E2FC0B'
      };
    } else {
      // Buttons Pending
      return {
        bgcolor: 'grey.900',
        borderColor: 'transparent',
        color: '#808080'
      };
    }
  };

  return (
    <Box display="flex" width='100%' mx='auto' alignItems="center">
      {trackingButton.map((button, index) => {
        const styles = getButtonStyles(index);
        return (
          <Fragment key={index}>
            <ButtonTrackPublished
              text={button.text}
              icon={button.icon}
              color={styles.color}
            />
            {index < trackingButton.length - 1 && (
              <Box
                sx={{
                  width: {
                    md: '5px',
                    lg: '10px',
                    xl: '40px'
                  },
                  borderTop: '2px solid',
                  borderColor: 'grey.900',
                }}
              />
            )}
          </Fragment>
        );
      })}
    </Box>
  );
}; 

export default TrackingPublished;