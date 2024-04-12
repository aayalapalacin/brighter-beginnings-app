import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  pages: string[];
}

const Navbar: React.FC<NavbarProps> = ({ pages }) => {
  const navigate = useNavigate();
  const colors = ["grass", "sky", "tree", "sun", "carrot"];

  return (
    <div className="container mt-md-5 mt-4">
      <nav className="navbar navbar-expand-lg align-items-start navbar-light">
        <div className="navbar-logo-container pb-5 pe-md-3 pe-0 navbar-brand my-auto btn">
          <img
            onClick={() => navigate("/")}
            src="/home_images/brighterLogo.png"
            alt="Brighter Beginnings"
            className="navbar-logo w-100"
          />
        </div>

        <button
          className="navbar-toggler mt-2 me-1 mx-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>

        <div className="nav-links-container pt-4">
          <div className="collapse navbar-collapse row" id="navbarNav">
            <ul className="navbar-nav">
              {pages.map((page, index) => (
                <Link
                  to={`/${page.toLowerCase()}`}
                  key={index}
                  className="nav-link fs-4 mx-3 text-start">
                  <li className={`col color-${colors[index % colors.length]}`}>
                    {page}
                  </li>
                </Link>
              ))}
            </ul>
            <div className="paragraph-container fs-5 ms-2 mt-2  text-start">
              <p>"Quality Child Care at Affordable Prices"</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
