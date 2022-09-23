import React from 'react'

function Card(props) {
  return (
    
        <div className="card m-2" style={{width:"300px"}}>
    <h5 className="card-header">Tiles {props.index+1}</h5>
    <div className="card-body">
      <h5 className="card-title">Tile Name : {props.name}</h5>
      <p className="card-text">Tile Model : {props.model}</p>
      <p className="card-text">Tile Price : {props.price}</p>

      <a href="#" className="btn btn-primary">Buy Now</a>
    </div>
  </div>
  
  )
}

export default Card