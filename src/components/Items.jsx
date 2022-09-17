import React from 'react'
import { Link } from 'react-router-dom';

function Items({id,marca,precio,imagen,product}) {
  return (
        <>
          <div class="col-4">
            <div className="card mb-4 product-wap rounded-0">
                <div className="" style={{ margin: "0 auto" }}>
                    <img 
                      className="card-img rounded-0 img-fluid" 
                      src={`/${imagen}`} 
                      alt="PC" 
                      style={{
                        width: "250px",
                        height: "280px",
                      }}/>
                </div>
                <div className="card-body text-center back-white">
                    <h3 href="shop-single.html" className="h3 text-decoration-none">{ product }</h3>
                      <p><strong>Marca: </strong>{ marca } <br />
                      <strong>Precio: </strong>${ precio }</p>
                    
                      <Link type='buttom' to={`/${id}`} className="btn btn-success btn-lg px-3 text-white">Ver más</Link>  
                </div>
            </div>
          </div>
        </>
  );
}

export default Items

