import type { Metadata } from "next";
import { Afacad_Flux } from "next/font/google";
import "./globals.css";

const afacadFlux = Afacad_Flux({
  variable: "--font-afacad-flux",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${afacadFlux.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
