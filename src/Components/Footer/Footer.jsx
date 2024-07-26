import React from "react";
import Grid from "@mui/material/Grid";
import "./Footer.css";
import { Link as ScrollLink } from "react-scroll";
import { Container } from "@mui/material";

export default function Footer() {
  return (
    <div id="contact"
      style={{
        backgroundColor: "black",
        color: "white",
      }}
    >
      <Grid container rowSpacing={1}>
        <Grid
          xs={12}
          sm={6}
          md={3}
          style={{
            padding: "20px",
          }}
        >
          <h2>Our Location</h2>
          <hr />
          <ul>
            <li>Defence</li>
            <li>Clifton</li>
            <li>Malir Cannt</li>
            <li>Gulshan-e-Iqbal</li>
            <li>North Nazimabad</li>
          </ul>
        </Grid>
        <Grid
          xs={12}
          sm={6}
          md={3}
          style={{
            padding: "20px",
          }}
        >
          <h2>Qucik Links</h2>
          <hr />

          <ul>
            <li className="c-p">
              <ScrollLink
                to="top"
                spy={true}
                smooth={true}
                offset={-20}
                duration={1000}
              >
                Top
              </ScrollLink>
            </li>
            <li className="c-p">
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-20}
                duration={1000}
              >
                About
              </ScrollLink>
            </li>
            <li className="c-p">
              <ScrollLink
                to="products"
                spy={true}
                smooth={true}
                offset={-20}
                duration={1000}
              >
                Products
              </ScrollLink>
            </li>
            <li className="c-p">
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-20}
                duration={1000}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </Grid>
        <Grid
          xs={12}
          sm={6}
          md={3}
          style={{
            padding: "20px",
          }}
        >
          <h2>Our Location</h2>
          <hr />
          <ul>
            <li>Defence</li>
            <li>Clifton</li>
            <li>Malir Cannt</li>
            <li>Gulshan-e-Iqbal</li>
            <li>North Nazimabad</li>
          </ul>
        </Grid>
        <Grid
          xs={12}
          sm={6}
          md={3}
          style={{
            padding: "20px",
          }}
        >
          <h2>Contact</h2>
          <hr />

          <ul>
            <li>0336-xxxxxxxx</li>
            <li>0336-xxxxxxxx</li>
            <li>amanwasti5@gmail.com</li>
          </ul>
        </Grid>
      </Grid>
      <br />
      <Container>
      <hr />
      <br />
      <center>Created By Syed Amanullah Wasti</center>
      <br />
      </Container>
     
    </div>
  );
}
