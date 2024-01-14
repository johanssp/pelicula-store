import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";

const ItemDetail = ({ item }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();
  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(item, quantity);
  };
  return (
    <div>
      <div className="">
        <img src={item.img} className="productos1" />
        <h2> {item.title}</h2>
        <p> {item.generyId}</p>
        <p>${item.price}</p>
        <p>Cantidad Disponibles : {item.stock}</p>
      </div>
      <div>
        {goToCart ? (
          <Link to="/cart">terminar compra</Link>
        ) : (
          <ItemCount stock={10} initial={1} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
