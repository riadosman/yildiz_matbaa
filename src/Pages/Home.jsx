import React from "react";
import Categorys from "./../components/Categorys/Categorys";
import styles from "./style.module.css";
import { TbTruckDelivery } from "react-icons/tb";
import { IoMdPrint } from "react-icons/io";
const Home = () => (
  <div>
    <Categorys />
    <div className={styles.advantages}>
      <div>
        <TbTruckDelivery />
        توصيل سريع اطلب الطلب الخاص بك وسوف نعمل على توصيله باسرع وقت
      </div>
      <div>
        <IoMdPrint />
        طباعة عالية الجودة نقوم باستخدام افضل الماكينات في الطباعة
      </div>
    </div>
    <h1 className={styles.title}>من اعمالنا السابقة</h1>
    <h1 className={styles.title}>يمكنك الطلب عن طريق قسم الاصناف</h1>
    <div className={styles.imgs}>
      <img src={require('../assets/works/1.jpeg')} alt="" className={styles.img}/>
      <img src={require("../assets/works/2.jpeg")} alt="" className={styles.img}/>
      <img src={require("../assets/works/3.jpeg")} alt="" className={styles.img}/>
      <img src={require("../assets/works/4.jpeg")} alt="" className={styles.img}/>
      <img src={require("../assets/works/5.jpeg")} alt="" className={styles.img}/>
      <img src={require("../assets/works/6.jpeg")} alt="" className={styles.img}/>
      <img src={require("../assets/works/7.jpeg")} alt="" className={styles.img}/>
      <img src={require("../assets/works/9.jpeg")} alt="" className={styles.img}/>
      <img src={require("../assets/works/10.jpeg")} alt="" className={styles.img}/>
      <img src={require("../assets/works/11.jpeg")} alt="" className={styles.img}/>
      <img src={require("../assets/works/12.jpeg")} alt="" className={styles.img}/>
      <img src={require("../assets/works/13.jpeg")} alt="" className={styles.img}/>
      <img src={require("../assets/works/14.jpeg")} alt="" className={styles.img}/>
      <img src={require("../assets/works/15.jpeg")} alt="" className={styles.img}/>
      <img src={require("../assets/works/16.jpeg")} alt="" className={styles.img}/>
      <img src={require("../assets/works/17.jpeg")} alt="" className={styles.img}/>
    </div>
    <div className={styles.textContent}>
      <h3>Yıldız Matbaa -- افضل دار طباعة على الإنترنت في تركيا</h3>
      <p>أعمال الطباعة عبر الإنترنت</p>
      <p>كل ما تحتاجه موجود في دار الطباعة Yıldız Matbaa!</p>
      <p>أكثر من 100 منتج طباعة في انتظارك بأسعار مناسبة </p>
    </div>
  </div>
);

export default Home;
