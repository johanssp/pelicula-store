import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  console.log(item);
  return (
    <Link to={"/item/" + item.id} className="">
      <div className="tarjetas3">
        <div className="producto">
          <img src={item.img} className="productos4" />
          <p className="titulo2">{item.title}</p>
          <p className="titulo2">${item.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
