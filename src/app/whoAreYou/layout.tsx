import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../globals.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

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
    <div >
      <div className="bg-primary-color  ">
        <div>
          {children}
        </div>
        <div className="bg-secondary-color py-8">
        <Footer />
        </div>
      </div>
    </div>
  );
}
