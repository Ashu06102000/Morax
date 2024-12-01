import Contact from "../genericComponents/Contact";
import About from "./About";
import Features from "./Features";
import Hero from "./Hero";
import FloatingImage from "./Story";

const HomeLayout = () => {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <FloatingImage />
      <Contact />
    </>
  );
};
export default HomeLayout;
