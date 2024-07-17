import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../globals.css";
import GlobalProvider from "../../providers/GlobalProvider";
import NavbarAuth from "../../components/auth/navbar/NavbarAuth";
import Image from "next/image";
import BackLink from "../../components/utils/backLink/BackLink";
const screenWidth = "2xl:max-w-[1200px] mx-auto xl:max-w-[1300px] lg:max-w-[1000px] md:max-w-[1000px] max-w-[700px] px-6 "


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
      <div className="bg-secondary-color ">
        <div className={` ${screenWidth} min-h-screen  mx-auto `}>
          {children}
        </div>
      </div>
    </GlobalProvider>
  );
}
