import React from "react";
import styles from "./style.module.css";
const About = () => {
  return (
    <div>
      <div className={styles.textContent}>
        <h3>Yıldız Matbaa -- افضل دار طباعة على الإنترنت في تركيا</h3>
        <p>أعمال الطباعة عبر الإنترنت</p>
        <p>كل ما تحتاجه موجود في دار الطباعة Yıldız Matbaa!</p>
        <p>أكثر من 100 منتج طباعة في انتظارك بأسعار مناسبة </p>
      </div>
      <div className={styles.imgs}>
      {[...Array(5).keys()].map((_, index) => (
        <img
          key={index}
          src={require(`../assets/about/${index + 1}.jpeg`)}
          alt="img"
          className={styles.img}
        />
      ))}
    </div>
    </div>
  );
};

export default About;
