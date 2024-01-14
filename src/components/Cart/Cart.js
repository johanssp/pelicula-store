import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();
  /*const order = {
    buyer: {
      name: "johans adrian",
      email: "johanssp1996",
      phone: "81446611",
      address: "santiago 123",
    },

    items: cart.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
    })),
    total: totalPrice(),
  };
  const handleClick = () => {
    const db = getFirestore();
    const orderscollection = collection(db, "orders");
    addDoc(orderscollection, order).then(({ id }) => console.log(id));
  };*/

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
