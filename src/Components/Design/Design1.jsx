import React from "react";
import "./Design1.css";
import Model1 from "../../Images/Model1.jpg";
import Model2 from "../../Images/Model2.jpg";

export default function Design1() {
  return (
    <div className="Design1__main">
        <div className="Design1__1">
          <img src={Model1} alt="" />
        </div>
        <div className="Design1__2">
          <img src={Model2} alt="" />
        </div>
    </div>
  );
}
