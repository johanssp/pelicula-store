import React from "react";
import { useParams } from "react-router-dom";

const Drama = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>este producto es el id : {id}</h2>
    </div>
  );
};

export default Drama;
