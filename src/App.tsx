import React from "react";
import Hero from "./components/Home/Hero";
import About from "./components/Home/About";
import Features from "./components/Home/Features";
import FloatingImage from "./components/Home/Story";
import Contact from "./components/genericComponents/Contact";
import Footer from "./components/genericComponents/Footer";
import NavBar from "./components/genericComponents/Navbar";

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
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
