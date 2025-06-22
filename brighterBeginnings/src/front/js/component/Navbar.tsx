import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
interface NavbarProps {
  pages: string[];
}

const Navbar: React.FC<NavbarProps> = ({ pages }) => {
  const [toggleIcon, setToggleIcon] = useState(false);
  // const [toggleNavbar, setToggleNavbar] = useState(false);
  const navigate = useNavigate();
  const colors = ["grass", "sky", "tree", "sun", "carrot"];

  const handleToggleNavbar = () => {
    setToggleIcon(!toggleIcon);
    const navbar = document.querySelector(".navbar-collapse");
    if (navbar?.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  return (
    <div className="navbar-container container mt-md-5 mt-4">
      <nav className="navbar-content navbar navbar-expand-lg align-items-start navbar-light">
        <div className="navbar-logo-container pb-md-5 pb-lg-5 pb-0 pe-md-3 pe-0 navbar-brand my-auto btn">
          <img
            onClick={() => {
              navigate("/");
              if (toggleIcon) {
                handleToggleNavbar();
              }
            }}
            src="/home_images/brighterLogo.png"
            alt="Brighter Beginnings"
            className="navbar-logo w-100"
          />
        </div>

        <button
          onClick={() => setToggleIcon(!toggleIcon)}
          className="navbar-toggler my-auto mx-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          {toggleIcon ? (
            <i className="fa-solid fa-x" style={{ fontSize: "2.5rem" }}></i>
          ) : (
            <span className={`navbar-toggler-icon`}></span>
          )}
        </button>

        <div className="nav-links-container pt-4">
          <div className="collapse navbar-collapse row" id="navbarNav">
            <ul className="navbar-nav">
              {pages.map((page, index) => (
                <Link
                  onClick={() => {
                    handleToggleNavbar();
                  }}
                  to={`/${page.toLowerCase()}`}
                  key={index}
                  className="nav-link fs-4 mx-3 text-start">
                  <li className={`col color-${colors[index % colors.length]}`}>
                    {page}
                  </li>
                </Link>
              ))}
            </ul>
            <div className="navbar-footer-container d-none d-sm-none d-md-none d-lg-block">
              <Footer copywright={false}/>
            </div>
            {/* <div className="navbar-paragraph-container fs-5 ms-2 mt-2  text-start">
              <p>"Quality Child Care at Affordable Prices"</p>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
