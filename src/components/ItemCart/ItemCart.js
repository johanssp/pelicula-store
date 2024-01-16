import React from "react";
import { useCartContext } from "../Context/CartContext";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();
  return (
    <div className="">
      <img className="productos1" src={product.img} alt={product.title} />
      <div>
        <p>Titulo : {product.title}</p>
        <p>Cantidad : {product.quantity}</p>
        <p>Precio u.: {product.price}</p>
        <p>Subtotal: ${product.quantity * product.price}</p>
        <button className="registro" onClick={() => removeProduct(product.id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ItemCart;
