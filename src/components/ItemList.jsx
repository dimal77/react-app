import React from 'react'
import Items from './Items';

function ItemList({data}) {
  return (
    <>
      {data.map((unitProduct) => {
        return (
          <Items
            key={unitProduct.id}
            id={unitProduct.id}
            product={unitProduct.product}
            marca={unitProduct.marca}
            precio={unitProduct.precio}
            imagen={unitProduct.imagen}
          />
        );
      })}
    </>
  );
}

export default ItemList