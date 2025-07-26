import React from "react";
import style from "./categorys.module.css";


const Categorys = () => {
  return (
    <div className={style.imgs}>
      <div>
        <img src={require("../../assets/2.jpg")} alt="" />
        <p>Ajanda</p>
      </div>
      <div>
        <img src={require("../../assets/3.jpg")} alt="" />
        <p>Box</p>
      </div>
      <div>
        <img src={require("../../assets/4.jpg")} alt="" />
        <p>Catalog</p>
      </div>
      <div>
        <img src={require("../../assets/5.jpg")} alt="" />
        <p>Folder</p>
      </div>
      <div>
        <img src={require("../../assets/6.jpg")} alt="" />
        <p>Notebook</p>
      </div>
      <div>
        <img src={require("../../assets/7.jpg")} alt="" />
        <p>Paper DI Envelope</p>
      </div>
      <div>
        <img src={require("../../assets/8.jpg")} alt="" />
        <p>Spiral Notebook</p>
      </div>
    </div>
  );
};

export default Categorys;
