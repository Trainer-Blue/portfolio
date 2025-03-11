import React from "react";
import SwirlBackground from "./components/SwirlBackground";
import Hero from "./components/Hero";
import Socials from "./components/Socials";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative">
      <SwirlBackground />
      <Sidebar />
      <main className=" z-10" style={{ marginLeft: '60px', marginRight: '60px' }}>
        <section id="hero" className="min-h-screen">
          <Hero />
        </section>
        
        <section id="about" className="min-h-screen" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
          <About />
        </section>
        
        <section id="projects" className="min-h-screen" style={{ paddingTop: '90px', paddingBottom: '60px' }}>
          <Projects />
        </section>
        
        <section id="contact" className="min-h-screen" style={{ paddingTop: '90px', paddingBottom: '60px' }}>
          <Contact />
        </section>
      </main>
      <Socials />
    </div>
  );
}

export default App;

