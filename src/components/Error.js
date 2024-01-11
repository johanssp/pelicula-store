import React from "react";
import { useParams } from "react-router-dom";

const Error = () => {
  const { id } = useParams;

  return (
    <div>
      <p>error</p>
    </div>
  );
};

export default Error;
