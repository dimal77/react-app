import React from 'react'
import { Link } from 'react-router-dom';



function Items({id,marca,precio,imagen,product}) {
  return (
    <div style={{marginLeft: "10px",}}>
          <div className="card" style={{  width: "255px",
            }}>
            <img src={imagen} className="card-img-top mx-auto"
              alt="PC"
              style={{
                width: "250px",
                height: "250px",
              }}
            />
            <div className="card-body">
              <h4 className="card-title">{product}</h4>
              <p>{marca}</p>
              <p>{precio}</p>
              <Link to={`/${id}`}> Ver más </Link>
            </div>
          </div>
    </div>
  );
}

export default Items