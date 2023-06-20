import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import "../components/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary container mb-5 px-5">
        <div className="d-flex justify-content-between align-items-center w-100">
          <Link className="navbar-brand logo" to="/ ">
            <img
              src="https://rastmobile.com/wp-content/uploads/2022/08/Rastmobile-Logo.svg"
              alt="Bootstrap"
              width="120"
              height="50"
              className="logo-color"
            />
          </Link>
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
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
            </div>
          </div>

          <div>
            <Link style={{ color: "#744BFC" }}>
              <BsYoutube style={{ marginLeft: "15px", scale: "1.4" }} />
            </Link>
            <Link style={{ color: "#744BFC" }}>
              <BsInstagram style={{ marginLeft: "15px" }} />
            </Link>
            <Link style={{ color: "#744BFC" }}>
              <BsLinkedin style={{ marginLeft: "15px" }} />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
