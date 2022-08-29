import React, {useEffect, useState} from 'react';
import data from './data/data.js';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import firestoredb from "../services/firebase";
import {getDocs, collection} from 'firebase/firestore';

const ItemListContainer = () =>{
  const [dataproduct, setData] = useState([]);


/*  function getProductos() {
    return new Promise((resolve) => {
      setTimeout(() => {
      resolve(data);
      }, 500);
    });
  }*/

  function getProductos() {
    return new Promise((resolve) => {
      const preyectoCollection = collection(firestoredb,"tecno");

      getDocs(preyectoCollection).then((snapshot) =>{
        const docsData = snapshot.docs.map(doc=>{
          return{...doc.data(),id:doc.id}
        });
        resolve(docsData);
        });
    })
  };

  useEffect(()=>{
    getProductos()
      .then((respuesta) => {
        setData(respuesta)
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

  return (
    <div>
      <h1>Encontra acá los mejores productos</h1>
      <div className="d-flex flex-row" style={{flexWrap:"wrap"}} >
        <ItemList data={dataproduct} />
      </div>
    </div>
  );
}

export default ItemListContainer