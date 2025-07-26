import React, { useEffect, useState, useContext } from "react";
import { AllproductsData } from "./../data";
import { useParams, Link } from "react-router-dom";
import styles from "./style.module.css";
import { FaCartShopping } from "react-icons/fa6";
import CartContext from "../Context.jsx";

const Info = () => {
  const { cart } = useContext(CartContext);

  const { id } = useParams();
  const [product, setproduct] = useState({});
  useEffect(() => {
    AllproductsData.then((res) => {
      res.map((e) => {
        console.log(e.id == id);
        if (e.id == id) {
          console.log("succccc");
          setproduct(e);
          console.log(e);
        }
        return null;
      });
    });
  }, []);

  return (
    <div className={styles.info}>
      <div className={styles.left_section}>
        <p>العنوان :{product.attributes?.title}</p>
        <p>الوصف :{product.attributes?.description}</p>
        <p>السعر : {product.attributes?.price}</p>
        <p>الصنف : {product.attributes?.category}</p>
        <Link
          className="btn btn-info text-light"
          to="/cart"
          onClick={() => {
            cart.push(product.attributes)
          }}
        >
          <FaCartShopping className={styles.icon} />
          اضف الى السلة
        </Link>
      </div>
      <div className={styles.right_section}>
        <img
          src={`http://localhost:1337${product.attributes?.img.data.attributes.url}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default Info;
