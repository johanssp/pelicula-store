import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  console.log(item);
  return (
    <Link to={"/item/" + item.id} className="">
      <div className="tarjeta1">
        <img src={item.imagen} className="productos" />
        <div>
          <p children="">{item.pelicula}</p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
