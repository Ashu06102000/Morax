import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import FloatingImage from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <About />
      <Features />
      <FloatingImage />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
