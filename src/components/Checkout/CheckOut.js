import React from "react";
import { useState } from "react";
import { useCartContext } from "../Context/CartContext";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";

const CheckOut = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApeliido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrderId] = useState("");
  const [mensaje, setMensaje] = useState("");

  const { cart, totalPrice, removeProduct } = useCartContext();
  const manejadorFormulario = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("completar datos");
      return;
    }
    if (email !== emailConfirmacion) {
      setError("el email no an coincidido intentelo de nuevo");
      return;
    }

    const total = totalPrice();
    const orden = {
      items: cart.map((product) => ({
        id: product.id,
        nombre: product.title,
        cantidad: product.quantity,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    Promise.all(
      orden.items.map(async (productOrden) => {
        const db = getFirestore();
        const productoRef = doc(db, "product", productOrden.id);

        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;

        await updateDoc(productoRef, {
          stock: stockActual - productOrden.cantidad,
        });
      })
    )
      .then(() => {
        const db = getFirestore();
        addDoc(collection(db, "orders"), orden)
          .then((docRef) => {
            setOrderId(docRef.id);
            removeProduct();
          })
          .catch((error) => {
            console.log("no se pudo crear la orden", error);
            setError("error en la orden");
          });
      })
      .catch((error) => {
        console.log("no se pudo actualizar el stock", error);
        setError("no se actualizo el stock");
      });
    setNombre("");
    setApeliido("");
    setTelefono("");
    setEmail("");
    setEmailConfirmacion("");
    setMensaje("");
  };

  return (
    <div>
      <div className="tarjetas2">
        <h2 className="subtitulo2">
          Complete el formulario para poder comprar
        </h2>
      </div>
      <form className="formulario1" onSubmit={manejadorFormulario}>
        {cart.map((product) => (
          <div key={product.id}>
            <p>
              {""}
              {product.nombre} {product.cantidad}
            </p>
            <p>{product.precio}</p>
          </div>
        ))}
        <div>
          <label className="mensaje-login">Ingrese su Nombre</label>
          <input
            className="input"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          ></input>
        </div>
        <div>
          <label className="mensaje-login">Ingrese su Apellido</label>
          <input
            className="input"
            type="text"
            value={apellido}
            onChange={(e) => setApeliido(e.target.value)}
          ></input>
        </div>
        <div>
          <label className="mensaje-login">Telefono</label>
          <input
            className="input"
            type="number"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          ></input>
        </div>
        <div>
          <label className="mensaje-login">Email</label>
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label className="mensaje-login">Repetir Email</label>
          <input
            className="input"
            type="email"
            value={emailConfirmacion}
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          ></input>
        </div>

        {error && <p>{error}</p>}
        {ordenId && (
          <p>
            gracias por tu compra , tu numero de seguimiento es :
            <div>
              {""} {ordenId}
              {""}
            </div>
          </p>
        )}
        <div>
          <button className="registro" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
