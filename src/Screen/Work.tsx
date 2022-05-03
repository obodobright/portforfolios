import React from "react";
import { workData } from "../Component/workData";
import "./home.css";
const Work = () => {
  return (
    <div className="container mx-auto work " style={{ color: "#f2bc94" }}>
      <h3 className="text-2xl font-bold">Work I have done!</h3>
      <div className="work-project">
        {workData?.map((project) => (
          <div className="flex items-center justify-around w-full m-10">
            <div className="project-img">
              <img src={project.img} className="img-width" alt="my here" />
            </div>
            <div className="w-" style={{ width: "350px" }}>
              <h1 className="text-3xl">{project.title}</h1>
              <h1 className="text-lg">{project.description}</h1>

              <div className="icon-holder">
                {project.stack?.map((icon) => (
                  <div style={{ fontSize: "30px", margin: "5px", color: "#130b43" }}>{icon}</div>
                ))}
              </div>

              <div className="flex items-center">
                <h4 className=" url-item">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live
                  </a>
                </h4>
                <span className="text-lg font-bold">|</span>
                <h4 className=" url-item">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Github
                  </a>
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Work;
