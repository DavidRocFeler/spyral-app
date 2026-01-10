// app/(auth)/login/layout.tsx
import { BackgroundSignUpSvg } from "@/assets/background"
import { Box } from "@mui/material"

const LoginLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Box
      className="custom-scrollbar"
      sx={{
        pb: 5,
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'auto',
        overflowX: 'hidden'
      }}
    >
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none', 
          '& svg': {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        }}
      >
        <BackgroundSignUpSvg />
      </Box>
      <Box 
        sx={{ 
          position: 'relative', 
          zIndex: 1,
          minHeight: '100%'
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default LoginLayout;