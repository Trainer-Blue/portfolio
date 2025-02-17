import React from "react";
import SwirlBackground from "./components/SwirlBackground";
import Hero from "./components/Hero";
import Socials from "./components/Socials";

function App() {
  return (
    <div className="demo-2" style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <SwirlBackground />
      <Hero />
      <Socials />
    </div>
  );
}

export default App;
