import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
// Initialize the Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Taboo - Amandela",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <link rel="canonical" href="http://localhost:3000" />
      </head>
      <body className={`${inter.className} antialiased  custom:bg-slate-100`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
