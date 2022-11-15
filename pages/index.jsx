import Head from "next/head";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

export default function Home() {
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
