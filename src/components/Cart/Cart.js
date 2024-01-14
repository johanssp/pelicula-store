import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();
  if (cart.lenght === 0) {
    return (
      <>
        <p>no hay elementos en el carrito</p>
        <Link to="/">hacer compras</Link>
      </>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p> total : ${totalPrice()}</p>
      <Link to="/checkout">
        {" "}
        <button className="registro">Finalizar compra </button>
      </Link>
    </>
  );
};

export default Cart;
