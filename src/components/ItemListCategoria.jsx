import React, {useEffect, useState} from 'react';
import data from './data/data.js';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";


const ItemListContainer = () =>{
  const [dataproduct, setData] = useState([]);
  const idCategoria = useParams().categoria;
  console.log(idCategoria);

  function getProductos() {
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
  }

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