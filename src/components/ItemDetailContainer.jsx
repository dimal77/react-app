import React, { useEffect, useState } from "react";
import data from "./data/data.js";
import ItemDetail from "./ItemDetail.jsx";
import { useParams } from "react-router-dom";
import firestoredb from "../services/firebase";
import { getDoc, collection, query, where, doc } from "firebase/firestore";


function ItemDetailContainer() {
  const {id} = useParams();
  console.log(id);

/*  function getDetalle() {
    return new Promise((resolve,reject) => {
      let producto = data.find((producto) => producto.id == idParam);
      if (producto === undefined) 
        reject ("No se encontró el producto");
      else
        resolve(producto);  
    });
  }*/

    function getDetalle(id) {
      return new Promise((resolve) => {
        const preyectoCollection = collection(firestoredb, "tecno");
        const docRef = doc(preyectoCollection, id);
        
        getDoc(docRef).then((snapshot) => {
          resolve(
            {...snapshot.data(), id: snapshot.id});
        });
      });
    }


  const [dataitem, setItem] = useState([]);

  useEffect(() => {
    getDetalle(id)
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
        stock={dataitem.stock}
        id={dataitem.id}
      />
    </div>
  );
}

export default ItemDetailContainer;
