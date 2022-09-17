import React, {useEffect, useState} from 'react';
import data from './data/data.js';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import firestoredb from "../services/firebase";
import {getDocs, collection} from 'firebase/firestore';
import { Banner } from './Banner.jsx';

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
    <>
      <Banner />
      <div className="container py-2">
        <h1 className="h2 pb-4">Encontra el producto a tu medida!</h1>

        <div className="row">
            <ItemList data={dataproduct} />
        </div>
      </div>
    </>
  );
}

export default ItemListContainer