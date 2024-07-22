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
import { useAuth } from "@/hooks/auth";
import Loading from "@/components/loading/Loading";

export default function Home() {
  const isOpenMenu = useAtomValue(isOpenMenuAtom);
  const { user, isLoading, logout } = useAuth({ middleware: 'guest' })

  const [isOpenProfile, setIsOpenProfile] = useAtom(isOpenMenuAtom);
  console.log(isOpenMenu)
  if (isLoading) return <Loading />
  return (
    <main className={`bg-primary-color ${isOpenMenu && "h-screen overflow-hidden "}`} onClick={() => {
      setIsOpenProfile(false)
    }}>
      <section id="home" >
        <div className="bg-[url('../../public/bgHero.png')]  bg-center bg-blend-saturation bg-cover bg-no-repeat w-full ">
          <Navbar user={user} logout={logout} />
          <Hero />
        </div>
        <div>
          <Stats />
        </div>
      </section>
      <section id="about">
        <div className="bg-[url('../../public/bg2.png')]  bg-center bg-blend-saturation bg-cover bg-no-repeat w-full ">
          <Futur />
        </div>
        <Strategy />
        <Prep />
      </section>
      <section id="programs">
        <Programs />
        <WhoAreYou />
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
