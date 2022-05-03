import React from "react";
import "./style.css";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

type progressType = {
  progressPercentage: number;
};
const Progress = ({ progressPercentage }: progressType) => {
  return (
    <ProgressBar
      percent={progressPercentage}
      width={235}
      height={5}
      filledBackground="#f2bc94"
      unfilledBackground="#00154f"
    />
    // <div className="progress">
    //   <div
    //     style={{ width: `${progressPercentage}%` }}
    //     className="h-full progress-bar"
    //     // className={`h-full ${progressPercentage < 70 ? "bg-yellow-600" : "bg-green-600"}`}
    //   ></div>
    // </div>
  );
};
export default Progress;
