import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../globals.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import GlobalProvider from "../../providers/GlobalProvider";

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
    <div className={``}>
      <div className="bg-primary-color">
        <GlobalProvider >
          {children}
        </GlobalProvider>
        <div>
        <div className='bg-secondary-color'>
            <Footer />
         </div>
        </div>
      </div>
    </div>
  );
}
