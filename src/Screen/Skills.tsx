import React from "react";
import { Card } from "../Component/Card";
import { MobileCard } from "../Component/Card";

import "./home.css";
import Skill from "../Component/skillData";
import Fade from "react-reveal/Fade";

const Skills = () => {
  return (
    <div className="container mx-auto skills pt-10 pb-10">
      <h2 className="text-2xl font-bold text-center " style={{ color: "#f2bc94" }}>
        Skills
      </h2>
      <div className="cardContainer">
        <Fade bottom>
          {Skill.map((data) => (
            <>
              <div className="web-lg">
                <Card data={data} />
              </div>
              <div className="mob-sm">
                <MobileCard data={data} />
              </div>
            </>
          ))}
        </Fade>
      </div>
    </div>
  );
};
export default Skills;
