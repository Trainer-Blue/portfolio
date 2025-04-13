import React from "react";
import { motion } from "framer-motion";
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
      <main className="z-10" style={{ marginLeft: '60px', marginRight: '60px' }}>
        <motion.section 
          id="hero" 
          className="min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
        </motion.section>
        
        <motion.section 
          id="about" 
          className="min-h-screen" 
          style={{ paddingTop: '40px', paddingBottom: '60px' }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileOutOfView={{ opacity: 0, x: -100 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <About />
        </motion.section>
        
        <motion.section 
          id="projects" 
          className="min-h-screen" 
          style={{ paddingTop: '90px', paddingBottom: '60px' }}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileOutOfView={{ opacity: 0, x: 100 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Projects />
        </motion.section>
        
        <motion.section 
          id="contact" 
          className="min-h-screen" 
          style={{ paddingTop: '90px', paddingBottom: '60px' }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileOutOfView={{ opacity: 0, x: -100 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Contact />
        </motion.section>
      </main>
      <Socials />
    </div>
  );
}

export default App;

