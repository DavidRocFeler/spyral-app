// app/layout.tsx
import type { Metadata } from "next";
import { Box } from '@mui/material';
import ClientLayout from "./ClientLayout";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/Header";
import MusicPlayer from "@/components/ui/MusicPlayer";

const manrope = localFont({
  src: "./fonts/Manrope/Manrope-VariableFont_wght.ttf",
  variable: "--font-manrope",
  weight: "200 800", // rango de pesos disponibles
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'], // Pesos que necesites
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Spyral App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{backgroundColor: '#000'}}
        className={`${manrope.variable} ${roboto.variable}`}
      >
        <ClientLayout>
          <Box 
            sx={{ 
              display: 'flex', 
              height: '100vh', 
              overflow: 'hidden' 
            }}
          >
            {/* Sidebar */}
            <Sidebar />
            
            {/* Main Content Area */}
            <Box 
              sx={{ 
                flex: 1, 
                display: 'flex', 
                flexDirection: 'column',
                overflow: 'hidden'
              }}
            >
              {/* Header */}
              <Header />
              {/* Content (children from each page) */}
              <Box 
                component="main" 
                sx={{ 
                  flex: 1, 
                  overflow: 'auto' 
                }}
              >
                {children}
              </Box>

              <MusicPlayer/>
            </Box>
          </Box>
        </ClientLayout>
      </body>
    </html>
  );
}