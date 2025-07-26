import { Link, useLocation } from "react-router-dom";
import styles from "./header.module.css";
import img from "./yildiz_logo.png";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  const location = useLocation();
 
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className={`${styles.container} container`}>
          <Link className="navbar-brand" to="/">
            <img src={img} alt="logo" className={styles.logo} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  الصفحه الرئيسيه
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/about"
                >
                  من نحن ؟
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/contact-us" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/contact-us"
                >
                  تواصل معنا
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  to="/category"
                  className={`nav-link ${styles.categorys}`}>
                  اصناف
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.cart}>
            <Link
              className={`nav-link ${
                location.pathname === "/cart" ? "active" : ""
              }`}
              aria-current="page"
              to="/cart"
            >
              <FaCartShopping />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
