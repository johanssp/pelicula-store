import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  console.log(item);
  return (
    <Link to={"/item/" + item.id} className="">
      <div className="">
        <div className="tarjetas1">
          <img src={item.imagen} className="productos" />
          <p children="">{item.pelicula}</p>
          <p>${item.precio}</p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
