import React from "react";
import { FaTwitter } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import "./home.css";
const Socials = () => {
  const socialIcons: { social: any; link: string }[] = [
    {
      social: <FaTwitter />,
      link: "https://twitter.com/bright_lumen",
    },
    {
      social: <BsGithub />,
      link: "github.com/obodobright",
    },
    {
      social: <MdEmail />,
      link: "mailto:obodobright0@gmail.com",
    },
    {
      social: <BsLinkedin />,
      link: "https://www.linkedin.com/in/obodo-bright-228a93188/",
    },
  ];

  return (
    <div className=" fixed w-15 m-5  flex-col flex items-center p-3  justify-center bg-transparent  top-40 ">
      {socialIcons.map((icon) => (
        <a href={icon.link} className="p-3 linkText">
          {icon.social}
        </a>
      ))}
    </div>
  );
};
export default Socials;
