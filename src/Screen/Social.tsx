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
      link: "",
    },
    {
      social: <BsGithub />,
      link: "",
    },
    {
      social: <MdEmail />,
      link: "",
    },
    {
      social: <BsLinkedin />,
      link: "",
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
