import React from 'react'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <div className='cabeza'> 
     <div class="pp">
          <p class="ppp">rincon del cine</p>
    </div>
    <div id="buscador3" class="buscar">
          <input id="buscador2" class="buscador" type="text" name="buscar" />
          <button id="boton3" class="barra">buscar</button>
        </div>
      <nav>
          <i className="fa-solid fa-bars"></i>
          <ul className="enlaces">
            <li><a href="">Inicio</a></li>
            <li><a href="">Nosotros</a></li>
            <li><a href="">Peliculas</a></li>
            <li><a href="">Series</a></li>
            <li><a href="">Anime</a></li>
            <li><a href=""><CartWidget /></a></li>
          </ul>
        </nav>
    </div>
   
  )
}

export default Navbar
