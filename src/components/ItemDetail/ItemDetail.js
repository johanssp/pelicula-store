import React from "react";

const ItemDetail = ({ item }) => {
  return (
    <div>
      <div className="">
        <img src={item.imagen} className="productos1" />
        <h2> {item.pelicula}</h2>
        <p> {item.genero}</p>
        <p>${item.precio}</p>
        <p>Cantidad Disponibles : {item.cantidad}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
