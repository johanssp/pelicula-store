import React from "react";
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="cabeza">
      <div className="pp">
        <p className="ppp">rincon del cine</p>
      </div>
      <div id="buscador3" className="buscar">
        <input id="buscador2" className="buscador" type="text" name="buscar" />
        <button id="boton3" className="barra">
          buscar
        </button>
      </div>
      <nav>
        <i className="fa-solid fa-bars"></i>
        <ul className="enlaces">
          <Link to="/">inicio</Link>
          <Link to="/category/Terror.js">Terror</Link>
          <Link to="/category/Accion.js">Accion</Link>
          <Link to="/category/Drama.js">Drama</Link>
          <Link to="">
            <CartWidget />
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
