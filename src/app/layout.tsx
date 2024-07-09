import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import GlobalProvider from "../providers/GlobalProvider";


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
          <GlobalProvider >
            {children}
          </GlobalProvider>
      </body>
    </html>
  );
}
