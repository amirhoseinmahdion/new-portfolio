import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Amirhosein Mahdion | Front-End Developer</title>
        <meta name="description" content="Portfolio of Amirhosein Mahdion, a front-end developer specializing in React, Next.js, TypeScript, and scalable product interfaces." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/logo.ico" /> */}
      </Head>
      <main className="min-h-screen overflow-x-hidden bg-bodyColor font-bodyFont text-textLight">
        <Navbar />
        <Banner />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
