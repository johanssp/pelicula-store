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
      <div className="tarjetas2">
        <div className="productos2">
          <img src={item.img} className="producto" />
          <h2> {item.title}</h2>
          <p> {item.generyId}</p>
          <p>${item.price}</p>
          <p>Cantidad Disponibles : {item.stock}</p>
        </div>
      </div>
      <div>
        {goToCart ? (
          <Link to="/cart">
            <div className="tarjetas2">
              <button className="registro">terminar</button>
            </div>
          </Link>
        ) : (
          <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
