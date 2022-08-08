import React from 'react'
import ItemCount from '../components/ItemCount.jsx';


function Items({marca,precio,imagen,product}) {
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
              <div >
                <ItemCount initial={1} stock={20} />
                <a href="#" className="btn btn-primary mx-auto">
                  Comprar
                </a>
              </div>
            </div>
          </div>
    </div>
  );
}

export default Items