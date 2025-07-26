import React, { useContext, useState } from "react";
import styles from "./style.module.css";
import CartContext from "../Context.jsx";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const { cart } = useContext(CartContext);

  const [newCart, setnewCart] = useState(cart);

  const removeFromCart = (productId) => {
    var cartIndex = newCart.indexOf(productId);
    setnewCart((prev) => prev.splice(cartIndex, 1));
  };

  return (
    <div>
      <div className={styles.header}>
        <p className={styles.CartTitle}>الصوره</p>
        <p className={styles.CartTitle}>العنوان</p>
        <p className={styles.CartPrice}>السعر</p>
        <p className={styles.CartPrice}>العمليات</p>
      </div>
      {newCart?.map((e) => (
        <div className={styles.Carts} key={e.id}>
          <img
            className={styles.CartImg}
            src={`http://localhost:1337${e.img?.data.attributes.url}`}
            alt={e.title}
          />
          <p className={styles.CartTitle}>{e.title}</p>
          <p className={styles.CartTitle}>{e.price}</p>
          <button className="btn btn-danger" onClick={() => removeFromCart(e)}>
            <MdDelete />
          </button>
        </div>
      ))}

      <button
        type="button"
        className={`btn btn-primary ${styles.finishOrder}`}
        onClick={() => {
          let finishedArr = [];
          newCart.map((e) => {
            finishedArr.push(e.title);
          });
          window.location.href = `https://wa.me/+905579459553?text=${finishedArr}`;
        }}
      >
        اتمام الطلبيه
      </button>
    </div>
  );
};

export default Cart;
