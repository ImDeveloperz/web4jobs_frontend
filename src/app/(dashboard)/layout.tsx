import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../globals.css";
import GlobalProvider from "../../providers/GlobalProvider";
import Sidbar from "../../components/dashboard/sidbar/Sidbar";
import Navbar from "@/components/dashboard/navbar/Navbar";


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
    <GlobalProvider >
      {children}
    </GlobalProvider>
  );
}
