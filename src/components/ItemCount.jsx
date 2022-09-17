import React, { useState } from "react";

function ItemCount(props) {
  const stock = props.inventory;
  const [count, setCount] = useState(1);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
  if (count > 1) {
    setCount(count - 1);
  }
}

  return (
    <div>
      
      <div className="counter">
        <button onClick={decrease} className="btn btn-success">
          -
        </button>{" "}
        <strong>{count} </strong>
        <button
          onClick={count < stock ? increase : null}
          className="btn btn-success"
        >
          +
        </button>
      </div>
      <br></br>
      <button
        onClick={() => props.onAdd(count)}
        id="btnAddToCart"
        className="btn btn-success"
      >
        Add to cart
      </button>
    </div>
  );
}

export default ItemCount;
