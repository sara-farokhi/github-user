import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

const NavBar = ({ icon, brand }) => {
  return (
    <>
      <div className="bg-danger py-3 text-white">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center display-5 ">
              <i className={icon}></i>
              <p className="brand ms-2 h2  my-0">{brand}</p>
            </div>
            <div className="d-flex align-items-center">
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                <p className="ms-2 my-0">Home</p>
              </Link>
              <Link
                to="/aboutUs"
                style={{ color: "white", textDecoration: "none" }}
              >
                <p className="ms-2 my-0">About Us</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
