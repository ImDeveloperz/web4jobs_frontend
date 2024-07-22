import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import GlobalProvider from "../providers/GlobalProvider";
import { NextUIProvider } from "@nextui-org/react";

const nunito = Nunito(
  {
    subsets: ["latin"],
    weight: ['400', '500', '700'],
  }
);

export const metadata: Metadata = {
  title: "Web4Jobs",
  description: "By Qwaser",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className} >
        <NextUIProvider>
          <GlobalProvider >
            {children}
          </GlobalProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
