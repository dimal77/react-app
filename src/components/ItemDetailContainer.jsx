import React, { useEffect, useState } from "react";
import data from "./data/data.js";
import ItemDetail from "./ItemDetail.jsx";

function getDetalle() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data[0]), 2000);
  });
}

function ItemDetailContainer() {
  const [dataitem, setItem] = useState([]);

  useEffect(() => {
    getDetalle()
      .then((respuesta) => {
        setItem(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <ItemDetail
        product={dataitem.product}
        marca={dataitem.marca}
        precio={dataitem.precio}
        imagen={dataitem.imagen}
      />
    </div>
  );
}

export default ItemDetailContainer;
