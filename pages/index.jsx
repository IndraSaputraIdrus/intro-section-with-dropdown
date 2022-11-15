import Head from "next/head";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

export default function Home() {
  const clientsLogo = [
    { id: 1, name: "databiz", url: "/images/client-databiz.svg" },
    { id: 2, name: "audiophile", url: "/images/client-audiophile.svg" },
    { id: 3, name: "meet", url: "/images/client-meet.svg" },
    { id: 4, name: "maker", url: "/images/client-maker.svg" },
  ];
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Frontend Mentor | Intro section with dropdown navigation</title>
      </Head>
      <Navbar />
      <HeroSection />
    </>
  );
}
