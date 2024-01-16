import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  console.log(item);
  return (
    <Link to={"/item/" + item.id} className="">
      <div className="tarjetas1">
        <div className="productos1">
          <img src={item.img} className="productos" />
          <p className="titulo2">{item.title}</p>
          <p className="titulo2">${item.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
