import React, { useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

import { AiOutlineBehanceSquare } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import rast from "../assets/images/rast.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);
  const handleHamburger = () => {
    setHamburger(!hamburger);
  };
  return (
    <nav className="header-nav">
      <div>
        <a href="#" className="navbar-brand">
          <img src={rast} alt="Bootstrap" width="120" height="50" />
        </a>
      </div>
      <div className={hamburger ? "closeHamburger" : "openHamburger"}>
        <ul className="nav-list">
          <li className="nav-item">
            <a className="nav-link">Hakkımızda</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Word Ninja</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Word Pyramids</a>
          </li>
        </ul>
      </div>
      <div>
        <div className="nav-link">
          <Link style={{ color: "#744BFC" }}>
            <BsYoutube style={{ marginLeft: "85px", scale: "1.4" }} />
          </Link>
          <Link style={{ color: "#744BFC" }}>
            <BsInstagram style={{ marginLeft: "15px" }} />
          </Link>
          <Link style={{ color: "#744BFC" }}>
            <AiOutlineBehanceSquare
              style={{ marginLeft: "15px", scale: "1.4" }}
            />
          </Link>
          <Link style={{ color: "#744BFC" }}>
            <BsLinkedin style={{ marginLeft: "15px" }} />
          </Link>
        </div>
      </div>

      <div onClick={handleHamburger} className="navbar-toggler">
        {hamburger ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </nav>
  );
};

export default Header;

// recover codes
/* return (
  <>
    <nav className="navbar navbar-expand-lg bg-body-container mb-2 px-5">
      <div className="d-flex justify-content-between align-items-center w-100 ">
        <Link className="navbar-brand logo" to="/ ">
          <img
            src="https://rastmobile.com/wp-content/uploads/2022/08/Rastmobile-Logo.svg"
            alt="Bootstrap"
            width="120"
            height="50"
          />
        </Link>
        <div>
          <div>
            <RxHamburgerMenu size={25} />
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav text d-flex justify-content-between">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  Hakkımızda
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Juri-Yarşma Yazılımı
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Word Ninja
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Word Pyramids
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <Link style={{ color: "#744BFC" }}>
                <BsYoutube style={{ marginLeft: "85px", scale: "1.4" }} />
              </Link>
              <Link style={{ color: "#744BFC" }}>
                <BsInstagram style={{ marginLeft: "15px" }} />
              </Link>
              <Link style={{ color: "#744BFC" }}>
                <AiOutlineBehanceSquare
                  style={{ marginLeft: "15px", scale: "1.4" }}
                />
              </Link>
              <Link style={{ color: "#744BFC" }}>
                <BsLinkedin style={{ marginLeft: "15px" }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </>
); */
