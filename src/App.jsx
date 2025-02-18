import React from "react";
import SwirlBackground from "./components/SwirlBackground";
import Hero from "./components/Hero"; // your existing hero component
import Socials from "./components/Socials";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <SwirlBackground />

      {/* <Sidebar /> */}
      
      <main className="ml-64">
        <section id="hero">
          <Hero />
        </section>
      </main>
      <Socials />
    </div>
  );
}

export default App;
