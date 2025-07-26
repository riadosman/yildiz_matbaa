import React from "react";
import img from "../assets/1.jpg";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <img src={img} alt="" className={styles.contactImages} />
      <div className={styles.ContactLinks}>
        <Link
          to="https://wa.me/+905519459553?text=السلام عليكم"
          className="btn btn-success"
          target="_blank"
          rel="noopener noreferrer"
        >
          905519459553+
          <FaWhatsapp />
        </Link>
        <Link
          to="https://www.facebook.com/profile.php?id=61555900716370"
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yildiz Print - مطبعة يلدز
          <FaFacebook />
        </Link>
        <Link to="mailto:yildizreklam2023@gmail.com" className="btn btn-danger">
          yildizreklam2023@gmail.com
          <FaEnvelope />
        </Link>
        <Link
          to="https://www.google.com/maps/dir//Maltepe,+Topkap%C4%B1+Cd.,+34010+Zeytinburnu%2F%C4%B0stanbul/@41.0243922,28.9885596,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14cabca4f6550031:0x2c2e120875705a27!2m2!1d28.9185197!2d41.0244134?entry=ttu"
          className="btn btn-warning"
          target="_blank"
        >
          2. Matbaacılar Sitesi Litros Yolu 2-4B 34010 Zeytinburnu İstanbul
          Türkiye
          <FaMapMarkerAlt />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
