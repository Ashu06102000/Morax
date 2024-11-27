import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />

      <About />
    </main>
  );
};

export default App;
