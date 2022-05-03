import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { SiJavascript, SiTypescript, SiFirebase, SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { BsGithub } from "react-icons/bs";

type skillType = {
  skill: string;
  percentage: number;
  icon: any;
};
const skills: skillType[] = [
  {
    skill: "HTML",
    percentage: 98,
    icon: <IoLogoHtml5 />,
  },
  {
    skill: "CSS",
    percentage: 95,
    icon: <IoLogoCss3 />,
  },
  {
    skill: "JAVASCRIPT",
    percentage: 90,
    icon: <SiJavascript />,
  },
  {
    skill: "REACT",
    percentage: 98,
    icon: <FaReact />,
  },
  {
    skill: "NODE",
    percentage: 65,
    icon: <DiNodejs />,
  },
  {
    skill: "TYPESCRIPT",
    percentage: 50,
    icon: <SiTypescript />,
  },
  {
    skill: "GIT",
    percentage: 90,
    icon: <BsGithub />,
  },
  {
    skill: "FIREBASE",
    percentage: 80,
    icon: <SiFirebase />,
  },
  {
    skill: "NEXT",
    percentage: 75,
    icon: <SiNextdotjs />,
  },
];

export default skills;
