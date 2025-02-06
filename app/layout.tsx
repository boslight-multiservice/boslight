import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";

import "./globals.css";
import "@fontsource/tomorrow/100.css";
import "@fontsource/tomorrow/200.css";
import "@fontsource/tomorrow/300.css";
import "@fontsource/tomorrow/400.css";
import "@fontsource/tomorrow/500.css";
import "@fontsource/lato";
import { RootProviders } from "@/components/root-provider";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Boslight",
  description: "Loan Application Company",
  icons: "https://www.boslightmulti-serviceslimited.com/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${rubik.variable} antialiased`}>
          <RootProviders>{children}</RootProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
