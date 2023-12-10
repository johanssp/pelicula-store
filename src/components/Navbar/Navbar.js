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
          <Link className="nv" to="/">
            inicio
          </Link>
          <Link className="nv" to="/category/terror">
            Terror
          </Link>
          <Link className="nv" to="/category/accion">
            Accion
          </Link>
          <Link className="nv" to="/category/romance">
            Drama
          </Link>
          <Link className="nv" to="/cart">
            <CartWidget />
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
