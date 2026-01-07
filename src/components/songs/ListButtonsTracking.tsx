// components/ListButtonsTracking.tsx
'use client';
import { trackingButton } from "@/mock/trackingButtons.mock";
import { Box } from "@mui/material";
import TrackingButton from "../ui/TrackinButton";
import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { getTrackingStatus } from "@/utils/trackingStatus";

const ListButtonsTracking = () => { 
  const pathname = usePathname(); 
  const trackingStatus = getTrackingStatus(pathname);

  const getButtonStyles = (index: number) => {
    if (index < trackingStatus - 1) {
      return {
        bgcolor: 'secondary.main',
        borderColor: 'secondary.main',
        color: '#000'
      };
    } else if (index === trackingStatus - 1) {
      return {
        bgcolor: 'grey.900',
        borderColor: 'secondary.main',
        color: '#E2FC0B'
      };
    } else {
      return {
        bgcolor: 'grey.900',
        borderColor: 'transparent',
        color: '#808080'
      };
    }
  };

  return (
    <Box display="flex" gap={0} mb={3} mx='auto' alignItems="center">
      {trackingButton.map((button, index) => {
        const styles = getButtonStyles(index);
        return (
          <Fragment key={index}>
            <Link 
              href={button.href || '#'} 
              style={{ textDecoration: 'none' }}
              passHref
            >
              <TrackingButton
                text={button.text}
                icon={button.icon}
                bgcolor={styles.bgcolor}
                borderColor={styles.borderColor}
                color={styles.color}
              />
            </Link>

            {index < trackingButton.length - 1 && (
              <Box
                sx={{
                  width: '40px',
                  borderTop: '2px dashed',
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

export default ListButtonsTracking;