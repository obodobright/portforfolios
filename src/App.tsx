import React from "react";
import "./App.css";
import Home from "./Screen/Home";
import Navbar from "./Screen/Navbar";
import Skills from "./Screen/Skills";
import Socials from "./Screen/Social";
import Work from "./Screen/Work";
function App() {
  return (
    <div className="bodyContainer">
      {/* <Navbar /> */}
      <Home />
      <Socials />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
