import type { Metadata } from "next";
import "./globals.css";
import Navbars from "@/components/Navbars";



export const metadata: Metadata = {
  title: "IrisLab",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbars/>
        {children}
      </body>
    </html>
  );
}
