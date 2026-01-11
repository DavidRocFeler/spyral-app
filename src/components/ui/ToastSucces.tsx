import { Box, Typography } from '@mui/material';
import PrimaryButton from './PrimaryButton';
import { ArrowRightSvg, CheckIconBiggerBrandSvg } from '@/assets/icons';
import { IToastSuccesProps } from '@/types/ui';
import Link from 'next/link';

const ToastSucces = ({ 
    label = 'Congratulations!',
    title = "Your song is registered!",
    textButton = "Proceed to publish",
    icon = CheckIconBiggerBrandSvg,
    iconButton = ArrowRightSvg,
 }: IToastSuccesProps) => {
    const IconSvg = icon;
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgcolor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <Link
      href='/desktop/songs/distribute'
      style={{
        textDecoration: 'none',
        color: 'inherit'
      }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            borderRadius: '40px',
            py: 5,
            width: '640px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
              maxWidth: '400px',
              textAlign: 'center'
            }}
          >
            {/* Icon */}
            <Box sx={{ mb: 1 }}>
              <IconSvg/>
            </Box>

            {/* Label */}
            <Typography variant="h7" color="text.secondary">
              {label}
            </Typography>

            {/* Title */}
            <Typography variant="h4">
              {title}
            </Typography>

            <Box mt={2.5}>
              <PrimaryButton
              text={textButton}
              icon={iconButton}
              />
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default ToastSucces;