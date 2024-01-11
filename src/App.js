import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import CartWidget from "./components/CartWidget";
import CartProvider from "./components/Context/CartContext";
import LoaderComponent from "./components/LoaderComponent";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LoaderComponent />
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"*"} element={<Error />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
