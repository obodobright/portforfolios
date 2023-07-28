import React from "react";
import "./home.css";
const Navbar = () => {
  type navType = {
    name: string;
    link: string;
  };

  const nav: navType[] = [
    {
      name: "Home",
      link: "",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Portfolio",
      link: "#portfolio",
    },
    {
      name: "Skills",
      link: "#skill",
    },
  ];

  return (
    <div className="w-full h-16 flex justify-center items-center bg-transparent">
      {nav.map((navs, i) => (
        <div key={i} className="transition ease-in-out delay-350 mx-3 text-xl cursor-pointer text-[#00488C] scale-100 hover:scale-105 hover:text-blue-900 ">
          <a href={navs.link}> {navs.name}</a>
        </div>
      ))}
    </div>
  );
};
export default Navbar;
