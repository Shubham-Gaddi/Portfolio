import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { Helmet } from "react-helmet";

export default function Home() {
  useEffect(() => {
    document.title = "John Doe | Frontend Developer Portfolio";
  }, []);

  return (
    <>
      <Helmet>
        <title>John Doe | Frontend Developer Portfolio</title>
        <meta name="description" content="John Doe is a passionate frontend developer with 5 years of experience building responsive, accessible, and performant web applications." />
        <meta property="og:title" content="John Doe | Frontend Developer Portfolio" />
        <meta property="og:description" content="John Doe is a passionate frontend developer with 5 years of experience building responsive, accessible, and performant web applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://johndoe.dev" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
