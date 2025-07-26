import React, { useState, useEffect, useContext } from "react";
import styles from "./style.module.css";
import productStyle from "../components/Products/products.module.css";
import { Link } from "react-router-dom";
import { AllproductsData } from "./../data";
import { FaCartShopping } from "react-icons/fa6";
import CartContext from "../Context.jsx";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const { cart } = useContext(CartContext);

  useEffect(() => {
    handleData();
  }, []);

  const handleData = (category = "") => {
    AllproductsData.then((res) => {
      let filteredData = res;
      if (category === "الكل") {
        setData(res);
      } else if (category) {
        filteredData = res.filter(
          (product) => product.attributes.category === category
        );
        setData(filteredData);
      } else {
        setData(res);
      }
      setSelectedCategory(category);
    });
  };

  const categorys = [
    "الكل",
    "بزنس كارت",
    "بروشور",
    "فلاير",
    "فورما",
    "ستيكر",
    "أكياس كرتون",
    "أكياس ورقية",
    "أكياس نايلون",
    "منيو مطاعم",
    "علب هدايا",
    "علب لوكس",
    "علب حلويات",
    "دفتر ملاحظات",
    "دفتر هارد كفر",
    "دفتر جلد",
    "أجندة",
    "رزنامة",
    "ظرف كرتون",
    " ظرف ورقي",
    "فولدر",
    "كاتلوج",
    "أعلام",
  ];

  return (
    <div>
      <ul className={`${styles.dropdown_menu}`}>
        {categorys.map((category, index) => (
          <li
            key={index}
            className={`${styles.dropdown_item} ${
              selectedCategory === category ? styles.active : ""
            }`}
          >
            <p
              className={`dropdown-item`}
              onClick={() => {
                handleData(category);
              }}
            >
              {category}
            </p>
          </li>
        ))}
      </ul>
      <div className={productStyle.cards}>
        {data.length > 0 ? (
          data.map((product, index) => (
            <Link
              key={index}
              className={productStyle.card}
              to={`/info/${product.id}`}
            >
              <img
                src={`http://localhost:1337${product.attributes.img.data.attributes.url}`}
                alt="img"
              />
              <p>{product.attributes.title}</p>
              <p>{product.attributes.price}</p>
              <Link
                to="/cart"
                className="btn btn-info text-light"
                onClick={() => {
                  cart.push(product.attributes);
                  console.log("ADD TO CART SUCCESS");
                }}
              >
                اضف الى السلة
                <FaCartShopping />
              </Link>
            </Link>
          ))
        ) : (
          <p className="alert alert-primary" role="alert">
            لا يوجد منتجات من هذا النوع
          </p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
