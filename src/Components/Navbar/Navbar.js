import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../Images/Logo.png";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="top">
      <nav className="NavBar">
        <div className="Logos">
          <img src={Logo} alt="" />
        </div>
        <div className={`WebsitesPages ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li className="underline-animation">Home</li>
            <li className="underline-animation">
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
            <li className="underline-animation">
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-20}
                duration={1000}
              >
                About Us
              </ScrollLink>
            </li>
            <li className="underline-animation">
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
            <li className="underline-animation">Cart</li>
          </ul>
        </div>
        <div className="Menu-bar" onClick={toggleMenu}>
          {isMenuOpen ? (
            <IoCloseSharp className="cursor-pointer menu-icons-bar c-p" />
          ) : (
            <IoMenuSharp className="cursor-pointer menu-icons-bar c-p" />
          )}
        </div>
      </nav>
    </div>
  );
}
