import { Box } from "@mui/material";

// app/(auth)/layout.tsx
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box
      className="custom-scrollbar"
      sx={{ 
        bgcolor: 'primary.main', 
        height: '100vh', // Cambiar de minHeight a height
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