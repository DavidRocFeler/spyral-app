// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import ClientLayout from "./ClientLayout";

const manrope = localFont({
  src: "./fonts/Manrope/Manrope-VariableFont_wght.ttf",
  variable: "--font-manrope",
  weight: "200 800",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'],
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
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}