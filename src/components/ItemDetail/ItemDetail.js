import React from "react";

const ItemDetail = ({ item }) => {
  return (
    <div>
      <div>
        <img src={item.imagen} className="" alt={item.nombre} />
        <h3> {item.nombre}</h3>
        <p> {item.genero}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
