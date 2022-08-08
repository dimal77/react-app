import React, {useEffect, useState} from 'react';
import data from './data/data.js';
import ItemList from './ItemList';
import Items from './Items';

function getProductos (){
  return new Promise((resolve)=>{
    setTimeout (()=>resolve(data),2000)
});
}

const ItemListContainer = () =>{
  const [dataproduct, setData] = useState([]);

  useEffect(()=>{
    getProductos()
      .then((respuesta) => {
        setData(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

  return (
    <div>
      <h1>Hola Mundo</h1>
      <div className="d-flex flex-row" style={{flexWrap:"wrap"}} >
        <ItemList data={dataproduct} />
      </div>
    </div>
  );
}

export default ItemListContainer