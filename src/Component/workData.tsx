import { IoLogoCss3 } from "react-icons/io";
import img1 from "../image/clientpanel.png";
import img2 from "../image/lumen.png";
import img3 from "../image/giffinder.png";
import img4 from "../image/generalassembly.png";
import img5 from "../image/thoughtapp.png";
import img6 from "../image/dev.io.png";

import {
  SiJavascript,
  SiTailwindcss,
  SiJest,
  SiRedux,
  SiFirebase,
  SiStyledcomponents,
  SiSocketdotio,
  // SiMaterialui,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { RiSecurePaymentFill } from "react-icons/ri";
import { AiFillApi } from "react-icons/ai";

type workType = {
  img: string;
  title: string;
  description: string;
  stack: {
    icon: any;
    tooltip: string;
  }[];
  github: string;
  live: string;
};

export const workData: workType[] = [
  {
    img: img2,
    title: "Lumen Luxury",
    description:
      "This is a mini e-commerce application that gives users the ability to buy both male and female clothes with a payment integration",
    stack: [
      {
        icon: <FaReact />,
        tooltip: "React",
      },

      {
        icon: <AiFillApi />,
        tooltip: "API",
      },
      {
        icon: <SiJavascript />,
        tooltip: "JavaScript",
      },
      {
        icon: <SiStyledcomponents />,
        tooltip: "Styled-components",
      },
      {
        icon: <IoLogoCss3 />,
        tooltip: "CSS",
      },
    ],
    github: "https://github.com/obodobright/Mini-ecommerce-with-payment-stack",
    live: "https://lumenluxury.netlify.app/",
  },
  {
    img: img1,
    title: "Client Panel",
    description:
      "A tracking application for small and medium scale entrepreneur especially market women to track their debtors",
    stack: [
      {
        icon: <FaReact />,
        tooltip: "React",
      },
      {
        icon: <SiJavascript />,
        tooltip: "JavaScript",
      },
      {
        icon: <SiStyledcomponents />,
        tooltip: "Styled-components",
      },
      {
        icon: <SiFirebase />,
        tooltip: "Firebase",
      },
      {
        icon: <RiSecurePaymentFill />,
        tooltip: "Paystack",
      },
      {
        icon: <IoLogoCss3 />,
        tooltip: "CSS",
      },
    ],
    github:
      "https://github.com/obodobright/mybuild--firebaseauth-useReducer-state-management/tree/master/src/clientPanel",
    live: "https://obodoclientsapp.netlify.app/",
  },
  {
    img: img3,
    title: "Gif Finder",
    description:
      "This is a simple search application that look up for your current Gifs that you fit s your mood",
    stack: [
      {
        icon: <FaReact />,
        tooltip: "React",
      },
      {
        icon: <SiJavascript />,
        tooltip: "JavaScript",
      },
      {
        icon: <AiFillApi />,
        tooltip: "API",
      },
      {
        icon: <SiJest />,
        tooltip: "Jest",
      },
      {
        icon: <SiTailwindcss />,
        tooltip: "TailwindCSS",
      },
      {
        icon: <IoLogoCss3 />,
        tooltip: "CSS",
      },
      {
        icon: <SiRedux />,
        tooltip: "Redux",
      },
    ],

    github: "https://github.com/obodobright/Giphy-Gif-Riby-react",
    live: "https://lucent-panda-7075b6.netlify.app/",
  },
  {
    img: img4,
    title: "General Assembly",
    description:
      "This is a web confering apllication that allows users to have a realtime video and audio chat over a low-latency network",
    stack: [
      {
        icon: <FaReact />,
        tooltip: "React",
      },
      {
        icon: <DiNodejs />,
        tooltip: "Node",
      },
      {
        icon: <SiSocketdotio />,
        tooltip: "Socket.io",
      },
      {
        icon: <SiJavascript />,
        tooltip: "JavaScript",
      },
      {
        icon: <SiStyledcomponents />,
        tooltip: "Styled-components",
      },
      {
        icon: <IoLogoCss3 />,
        tooltip: "CSS",
      },
    ],
    github: "https://github.com/obodobright/web-conferecing-app",
    live: "https://ga-meet.netlify.app/",
  },
  {
    img: img6,
    title: "Dev.io Article feedspage - Clone",
    description:
      "This is a clone of the popular dev.io article page, it's is a static single webpage to skill up my react components skills",
    stack: [
      {
        icon: <FaReact />,
        tooltip: "React",
      },
      {
        icon: <></>,
        tooltip: "Material UI",
      },
      {
        icon: <SiJavascript />,
        tooltip: "JavaScript",
      },
      {
        icon: <SiStyledcomponents />,
        tooltip: "Styled-components",
      },
      {
        icon: <IoLogoCss3 />,
        tooltip: "CSS",
      },
    ],
    github: "https://github.com/obodobright/dev.t0-homepage",
    live: "https://brightobododevtest.netlify.app/",
  },
  {
    img: img5,
    title: "My Thought App",
    description:
      "This is a React beginner application that helps you write your thoughts, where you can save.",
    stack: [
      {
        icon: <FaReact />,
        tooltip: "React",
      },
      {
        icon: <SiJavascript />,
        tooltip: "JavaScript",
      },
      {
        icon: <IoLogoCss3 />,
        tooltip: "CSS",
      },
    ],
    github: "",
    live: "https://mythoughtapp.netlify.app/",
  },
];

// stack: [<FaReact />, <SiJavascript />, <IoLogoCss3 />],
