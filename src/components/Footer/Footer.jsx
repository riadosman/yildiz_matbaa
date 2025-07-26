import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
          <p className="col-md-4 mb-0 text-body-secondary">
            © 2024 Yıldız Matbaa, Riad osman
          </p>
          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-body-secondary">
                الصفحه الرئيسيه
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link px-2 text-body-secondary">
                من نحن ؟
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact-us"
                className="nav-link px-2 text-body-secondary"
              >
                تواصل معنا
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
