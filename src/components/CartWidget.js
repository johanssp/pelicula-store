import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useCartContext } from "./Context/CartContext";

const CartWidget = () => {
  const { totalProduct, cart } = useCartContext();
  return (
    <div className="">
      <button>
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="">{totalProduct() || cart}</span>
      </button>
    </div>
  );
};

export default CartWidget;
