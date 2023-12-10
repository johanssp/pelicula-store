import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import movie from "./Json/movie.json";
import ItemList from "../components/ItemList/ItemList";

const ItemListContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(id ? movie.filter((item) => item.genero === id) : movie);
          }, 1000);
        });
        setItem(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="tarjeta1">
      <div className="tarjeta">
        <ItemList item={item} />
      </div>
    </div>
  );
};

export default ItemListContainer;
