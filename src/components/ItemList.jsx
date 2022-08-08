import React from 'react'
import Items from './Items';

function ItemList({data}) {
  return (
    <>
      {data.map((unitProduct) => {
        return (
          <Items
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