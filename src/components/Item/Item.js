import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Link to={"/item/" + item.id} className="">
      <div className="">
        <img src={item.imagen} className="" alt={item.nombre} />
        <div>
          <p children="">{item.nombre}</p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
