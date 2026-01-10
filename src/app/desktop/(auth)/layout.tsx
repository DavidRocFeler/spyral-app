import { Box } from "@mui/material";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Box
      className="custom-scrollbar"
      sx={{ 
        bgcolor: 'primary.main', 
        height: '100vh', 
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'auto'
      }}
    >
      {children}
    </Box>
  );
}

export default AuthLayout;