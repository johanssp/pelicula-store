import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Link to={"/item/" + item.id} className="">
      <div className="">
        <img src={item.imagen} className="" alt={item.pelicula} />
        <div>
          <p children="">{item.pelicula}</p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
