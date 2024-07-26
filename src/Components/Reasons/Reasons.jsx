import React, { useEffect, useState } from "react";
import "./Reasons.css";
import Virat4 from "../../Images/Virat4.jpg";
import Virat3 from "../../Images/Virat3.jpg";
import sneaker122 from "../../Images/sneaker122.jpg";
import sneaker22 from "../../Images/sneaker22.jpg";
import { Container } from "@mui/material";
import ticks from "../../Images/ticks.png";
import plogo from "../../Images/plogo.png";
import alogo from "../../Images/alogo.png";
import nlogo from "../../Images/nlogo.png";
import CountUp from 'react-countup';

export default function Reasons() {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Start the animation when the component is mounted
    setStartAnimation(true);
  }, []);

  return (
    <div className="reasons_main" id="about">
      <Container>
        <br />
        <br />
        <div className="rea__main">
          <div className="rea__1">
            <div className="rea__1_2">
              <div className="rea__1_2_1">
                <img src={Virat3} alt="" />
              </div>
              <div className="rea__1_2_2">
                <img src={sneaker22} alt="" />
                <img src={sneaker122} alt="" />
              </div>
            </div>
          </div>
          <div className="rea__2">
            <h2
              style={{
                textTransform: "uppercase",
                color: "red",
              }}
            >
              Some Reason
            </h2>
            <span
              className="stroke-text"
              style={{
                fontSize: "50px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              Why{" "}
            </span>
            <span
              style={{
                fontSize: "50px",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Choose Us?
            </span>
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <span>
                <img src={ticks} alt="" />
              </span>
              <span>OVER 75+ COMFORT SNEAKERS</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <span>
                <img src={ticks} alt="" />
              </span>
              <span>90+ CUSTOMER WITH GOOD REVIEW</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <span>
                <img src={ticks} alt="" />
              </span>
              <span>80+ NEW DESIGN</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <span>
                <img src={ticks} alt="" />
              </span>
              <span>FREE SHIPING OVER $1000</span>
            </div>
            <div className="partners">
              <center>
                <h3 className="partnerHeading">Our partners</h3>

                <div className="partnerlogo">
                  <img src={plogo} alt="" />
                  <img src={alogo} alt="" />
                  <img src={nlogo} alt="" />
                </div>
              </center>
            </div>
          </div>
        </div>
      </Container>
      <br />
    </div>
  );
}
