import React from "react";
import ProgressBar from "./Progress";
import "./style.css";
import ReactTooltip from "react-tooltip";

type dataProp = {
  data: {
    skill: string;
    percentage: number;
    icon: any;
  };
};

export const Card = ({ data }: dataProp) => {
  return (
    <div className="card">
      <h3 className="text-xl tracking-wide">{data.skill}</h3>
      <div className="absolute top-1 right-1 iconHolder">{data.icon}</div>
      <div className="absolute bottom-0 left-0 ">
        <ProgressBar progressPercentage={data.percentage} />
      </div>
    </div>
  );
};

export const MobileCard = ({ data }: dataProp) => {
  return (
    <div className="mobileCard">
      <>
        <div className="iconHolder" data-tip={data.skill.toLowerCase()}>
          {data.icon}
        </div>
        <ReactTooltip data-place="bottom" data-type="light" />
      </>
    </div>
  );
};
