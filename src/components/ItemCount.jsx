import React, { useState } from "react";

function ItemCount(props) {
  const [clicks, setClicks] = useState(props.initial);
  console.log(props.stock);

  const incrementa = () =>
    clicks < props.stock ? setClicks(clicks + 1) : setClicks(clicks);
  const decremanta = () =>
    clicks > 1 ? setClicks(clicks - 1) : setClicks(clicks);

  return (
    <div style={{ marginBottom: "2px" }}>
      <button onClick={decremanta} className="btn btn-primary">
        &nbsp;- &nbsp;{" "}
      </button>
      <span>&nbsp;&nbsp;{clicks}&nbsp;&nbsp;</span>
      <button onClick={incrementa} className="btn btn-primary">
        &nbsp;+ &nbsp;
      </button>
    </div>
  );
}

export default ItemCount;
