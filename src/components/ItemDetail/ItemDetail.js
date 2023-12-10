import React from "react";

const ItemDetail = ({ item }) => {
  return (
    <div>
      <div className="tarjeta1">
        <img src={item.imagen} className="" alt={item.pelicula} />
        <h2> {item.pelicula}</h2>
        <p> {item.genero}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
