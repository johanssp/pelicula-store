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
        <img src={item.imagen} className="productos1" />
        <h2> {item.pelicula}</h2>
        <p> {item.genero}</p>
        <p>${item.precio}</p>
        <p>Cantidad Disponibles : {item.cantidad}</p>
      </div>
      <div>
        {goToCart ? (
          <Link to="/cart">terminar compra</Link>
        ) : (
          <ItemCount stock={10} initial={0} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
