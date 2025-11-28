import { warings } from '@/mock/warnings.mock';
import { ToastWarningProps } from '@/types/warings';
import { Box, Typography, Button } from '@mui/material';

const ToastWarning = ({ id }: ToastWarningProps) => {
  const warning = warings.find((item) => item.id === id);

  if (!warning) return null;

  const IconComponent = warning.icon;
  const ButtonIcon = warning.button?.icon;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'primary.main',
        px: 1,
        width: '320px'
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
          <IconComponent />
        </Box>

        {/* Title */}
        <Typography variant="h4">
          {warning.title}
        </Typography>

        {/* Label */}
        <Typography variant="h7" color="text.secondary">
          {warning.label}
        </Typography>

        {/* Button (if exists) */}
        {warning.button && (
          <Button
            sx={{
              borderRadius: '50px',
              mt: 2,
              px: 2,
              py: 1.5,
              bgcolor: 'secondary.main',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              '&:hover': {
                bgcolor: 'secondary.dark'
              }
            }}
          >
            <Typography sx={{textTransform: 'none'}} variant="h8" color="primary.main">
              {warning.button.span}
            </Typography>
            {ButtonIcon && <ButtonIcon />}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ToastWarning;