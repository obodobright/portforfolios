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
    <div className="card shadow">
      <div className="iconHolder">{data.icon}</div>
      <h3 className="text-xl tracking-wide">{data.skill}</h3>

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
        <h3 className="text-xl tracking-wide">{data.skill}</h3>
        <ReactTooltip data-place="bottom" data-type="light" />
      </>
    </div>
  );
};
