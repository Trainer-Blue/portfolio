import React from "react";
import SwirlBackground from "./components/SwirlBackground";
import Hero from "./components/Hero";
import Socials from "./components/Socials";

function App() {
  return (
    <div className="demo-2">
      <SwirlBackground />
      <Hero />
      <Socials />
      <div style={{ height: "200vh" }}></div>
    </div>
  );
}



export default App;
