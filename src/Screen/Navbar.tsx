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
      link: "",
    },
    {
      name: "Work",
      link: "",
    },
  ];

  console.log(nav);

  return (
    <div className="w-full h-16 flex justify-center items-center bg-transparent">
      {nav.map((navs) => (
        <div className="transition ease-in-out delay-350 mx-3 text-xl cursor-pointer text-white scale-100 hover:scale-105 hover:text-blue-900 ">
          {navs.name}
        </div>
      ))}
    </div>
  );
};
export default Navbar;
