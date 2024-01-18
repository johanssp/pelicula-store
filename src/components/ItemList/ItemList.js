import React from "react";
import Item from "../Item/Item";

const ItemList = ({ item }) => {
  return (
    <div className="tarjetas3">
      {item.map((item) => (
        <div className="productos1" key={item.id}>
          <Item item={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
