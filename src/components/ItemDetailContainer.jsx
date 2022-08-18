import React, { useEffect, useState } from "react";
import data from "./data/data.js";
import ItemDetail from "./ItemDetail.jsx";
import { useParams } from "react-router-dom";


function ItemDetailContainer() {
  const idParam = useParams().id;
  console.log(idParam);

  function getDetalle() {
    return new Promise((resolve,reject) => {
      let producto = data.find((producto) => producto.id == idParam);
      if (producto === undefined) 
        reject ("No se encontró el producto");
      else
        resolve(producto);  
    });
  }
 
  const [dataitem, setItem] = useState([]);

  useEffect(() => {
    getDetalle()
      .then((respuesta) => {
        setItem(respuesta);
      })
      .catch((error) => {
        alert(error);
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
