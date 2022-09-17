import React, {useEffect, useState} from 'react';
import data from './data/data.js';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import firestoredb from "../services/firebase";
import {getDocs, collection, query, where} from 'firebase/firestore';

const ItemListCategoria = () => {
  const [dataproduct, setData] = useState([]);
  const idCategoria = useParams().categoria;
  console.log(idCategoria);

/*  function getProductos() {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (idCategoria === undefined) {
          resolve(data);
        } else {
          let filtrado = data.filter(
            (elemento) => elemento.categoria == idCategoria
          );
          resolve(filtrado);
        }
      }, 500);
    });
  }*/

  function getProductos() {
    return new Promise((resolve) => {
      const preyectoCollection = collection(firestoredb, "tecno");
      const q = query(preyectoCollection, where("categoria", "==", idCategoria));
      getDocs(q).then((snapshot) => {
        const docsData = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        resolve(docsData);
      });
    });
  }

  useEffect(() => {
    getProductos()
      .then((respuesta) => {
        setData(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idCategoria]);

  return (
    <div className="container py-2">
      <h1 className="h2 pb-4">
        {idCategoria}
      </h1>
      <div className="row">
        <ItemList data={dataproduct} />
      </div>
    </div>
  );
};

export default ItemListCategoria;