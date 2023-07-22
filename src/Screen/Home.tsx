import React from "react";
import "./home.css";
// import Skills from "./Skills";
import Typist from "react-typist";
const Home = () => {
  return (
    <>
      <div className="containerDiv">
        <Typist cursor={{ hideWhenDone: true, show: false }} startDelay={3}>
          <h1 className="heroText">I'm Obodo Bright</h1>
        </Typist>
        <Typist cursor={{ hideWhenDone: true, show: false }}>
          <Typist.Delay ms={2000} />
          <p className="text-3xl text-white">Front-end Developer </p>
        </Typist>
      </div>
      <div className="container mx-auto about">
        <h3 className="text-2xl font-bold" style={{ color: "#f2bc94" }}>Get to Know Me</h3>
        <p className="text-[1.5rem]">
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
