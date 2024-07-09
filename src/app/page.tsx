"use client";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Stats from "../components/stats/Stats";
import Futur from "../components/futur/Futur";
import Strategy from "../components/strategy/Strategy";
import Prep from "../components/prep/Prep";
import Programs from "../components/programs/Programs";
import WhoAreYou from "../components/whoAreYou/WhoAreYou";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import { useAtom, useAtomValue } from "jotai";
import { isOpenMenuAtom } from "../providers/atoms";

export default function Home() {
  const isOpenMenu = useAtomValue(isOpenMenuAtom);
  console.log(isOpenMenu)
  return (
    <main className={`bg-primary-color ${isOpenMenu && "h-screen overflow-hidden "}`}>
      <div className="bg-[url('../../public/bgHero.png')]  bg-center bg-blend-saturation bg-cover bg-no-repeat w-full ">
        <Navbar />
        <Hero />
      </div>
      <div>
        <Stats />
      </div>
      <div className="bg-[url('../../public/bg2.png')]  bg-center bg-blend-saturation bg-cover bg-no-repeat w-full ">
        <Futur />
      </div>
      <Strategy />
      <Prep />
      <Programs />
      <WhoAreYou />
      <Contact />
        <Footer />
    </main>
  );
}
