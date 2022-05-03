import React from "react";
import "./home.css";
import Skills from "./Skills";
// import Typist from "../typist";
const Home = () => {
  return (
    <>
      <div className="containerDiv">
        <h1 className="heroText">I'm Obodo Bright</h1>
        <p className="text-xl text-white">I am a proficient Frontend Engineer with a </p>
      </div>
      <div className="container mx-auto about" style={{ color: "#f2bc94" }}>
        <h3 className="text-2xl font-bold">Get to Know Me</h3>
        <p>
          I am a proficient Frontend Engineer with core knowledge on building responsive web
          applications. I help people get into the tech space by teaching and sharing useful tips
          that could be helpful in their tech journey. Gradually learning to become a tech
          entrepreneur, I enjoy meeting new people with diverse peronalities.{" "}
        </p>
      </div>
    </>
  );
};
export default Home;
