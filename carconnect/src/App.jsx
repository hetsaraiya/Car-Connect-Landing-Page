import React,{useEffect} from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Team from "./components/Team";
import Testi from "./components/Testi";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Team />
      <Testi />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
