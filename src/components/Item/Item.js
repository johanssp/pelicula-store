import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  console.log(item);
  return (
    <Link to={"/item/" + item.id} className="">
      <div className="">
        <div className="tarjetas1">
          <img src={item.img} className="productos" />
          <p children="">{item.title}</p>
          <p>${item.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
