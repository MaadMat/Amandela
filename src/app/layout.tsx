
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navigation from "./components/navigationBar";


// Initialize the Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Amandela",
  description: "This is a online Taboo game, get your best taboo cards and updated everyday.",
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
        <meta name="google-site-verification" content="bRft9M9ZYq4O01A6mf0uDqk2V7C3rA7_NNLl0a6WUWI" />
        <link rel="canonical" href="https://amandela-iut8.vercel.app/" />
      </head>
      <body className={`${inter.className} antialiased  custom:bg-slate-100 bg-[#f2f2f2]`}>
        <Navigation/>
        {children}
        
      </body>

    </html>
  );
}
