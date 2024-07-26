import React from "react";
import "./Design.css";
import sneaker1 from "../../Images/sneaker1.jpg";
import sneaker2 from "../../Images/sneaker2.jpg";
import sneaker3 from "../../Images/sneaker3.jpg";
import sneaker4 from "../../Images/sneaker4.jpg";
import sneaker5 from "../../Images/sneaker5.jpg";
import sneaker6 from "../../Images/sneaker6.jpg";
import sneaker7 from "../../Images/sneaker7.jpg";
import sneaker8 from "../../Images/sneaker8.png";
import sneaker9 from "../../Images/sneaker9.jpg";
import sneaker10 from "../../Images/sneaker10.jpg";
import sneaker11 from "../../Images/sneaker11.jpg";
import sneaker12 from "../../Images/sneaker12.jpg";
import { Container } from "@mui/material";

export default function Design() {
  return (
    <div>
      <div className="containerDesign">
        <Container>
          <center>
            <div className="Designdiv1">
              <img src={sneaker1} alt="" className="DesignImg1" />
              <img src={sneaker2} alt="" className="DesignImg" />
              <img src={sneaker3} alt="" className="DesignImg1" />
              <img src={sneaker4} alt="" className="DesignImg" />
              <img src={sneaker6} alt="" className="DesignImg" />
              <img src={sneaker5} alt="" className="DesignImg1" />
              <img src={sneaker8} alt="" className="DesignImg" />
              <img src={sneaker7} alt="" className="DesignImg1" />
              <img src={sneaker9} alt="" className="DesignImg1" />
              <img src={sneaker10} alt="" className="DesignImg" />
              <img src={sneaker11} alt="" className="DesignImg1" />
              <img src={sneaker12} alt="" className="DesignImg" />
            </div>
          </center>
        </Container>
      </div>
    </div>
  );
}
