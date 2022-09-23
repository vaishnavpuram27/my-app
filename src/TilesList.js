import React, { useState ,useRef} from 'react'
import Card from './Card';
import NavBar from './NavBar';


function TilesList() {
    const nameRef = useRef();
    const modelRef = useRef();
    const priceRef = useRef();
    const picRef = useRef();

    const initialTiles = [
        {"name":"somany","model":"nit-01","price":200,"img":"https://th.bing.com/th/id/OIP.ed_x1Lu_cxekEvcaXPPh9AHaHa?w=158&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"},
        {"name":"johnson","model":"nit-02","price":100,"img":"https://th.bing.com/th/id/OIP.G1AgNufA0YEP2X8wp3kwjwHaHa?w=158&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"},
        {"name":"hsil","model":"nit-03","price":150},
        {"name":"clayhaus","model":"nit-04","price":350}
]
const [tiles,setTiles] = useState(initialTiles)

const addTiles=(e)=>{
    e.preventDefault();
    
    const tile ={
        name:nameRef.current.value,
        model:modelRef.current.value,
        price:priceRef.current.value,
        img:picRef.current.value,

    }
    console.log(tile);
    setTiles([...tiles,tile])
}

const tilesArr = tiles.map((tile,index)=>{
    return(
        // <tr key = {index}>
        //     <td>{tile.name}</td>
        //     <td>{tile.model}</td>
        //     <td>{tile.price}</td>
        // </tr>

        // <li class="list-group-item">
            // <Card name = {tile.name} model={tile.model}  price = {tile.price} index={index}/>
          
        <div className="card m-2" style={{width:"300px"}}>
        <h5 className="card-header">Tiles {index+1}</h5>
        <img src={tile.img} className="card-img-top" alt="--- Tile Pic---"></img>
        <div className="card-body">
          <h5 className="card-title">Tile Name : {tile.name}</h5>
          <p className="card-text">Tile Model : {tile.model}</p>
          <p className="card-text">Tile Price : {tile.price}</p>
    
          <a href="#" className="btn btn-primary">Buy Now</a>
        </div>
      </div>
        // </li>
        
    )
})
  return (
    <div>
    <div className='tilesPage'>
    <h1>Adding Tiles into the table</h1>
    {/* <form onSubmit={addTiles}>
    <label >Name: </label>
    <input type="text" ref={nameRef} style={{marginLeft:"5px"}}/><br />
    <label >Model: </label>
    <input type="text" ref={modelRef}  style={{marginLeft:"5px"}}/><br />  
    <label >Price: </label>
    <input type="text" ref={priceRef} style={{marginLeft:"5px"}} /><br />
    <label >Pic link: </label>
    <input type="text" ref={picRef} style={{marginLeft:"5px"}} /><br />
    <input type="submit"  value="Add tile" className="btn btn-success"/>
    </form> */}
    <div className='container-sm'>
    <form onSubmit={addTiles}>
  <div className="form-group">
    <label for="exampleInputText">Tile Name</label>
    <input type="text" className="form-control" id="exampleInputText" aria-describedby="TextHelp" placeholder="Name" ref={nameRef} style={{marginLeft:"5px"}}/>
 
  </div>
  <div className="form-group">
    <label for="exampleInputText">Tile Model</label>
    <input type="text" className="form-control" id="exampleInputText" aria-describedby="TextHelp" placeholder="Model" ref={modelRef} style={{marginLeft:"5px"}}/>
 
  </div>
  <div className="form-group">
    <label for="exampleInputText">Tile Price</label>
    <input type="text" className="form-control" id="exampleInputText" aria-describedby="TextHelp" placeholder="Price" ref={priceRef} style={{marginLeft:"5px"}}/>
 
  </div>
  <div className="form-group">
    <label for="exampleInputText">Tile URL</label>
    <input type="text" className="form-control" id="exampleInputText" aria-describedby="TextHelp" placeholder="Price" ref={picRef} style={{marginLeft:"5px"}}/>
 
  </div>
  <input type="submit"  value="Add tile" className="btn btn-success"/>
</form>
</div>
    <div className="container">
        <div className='d-flex flex-wrap'>
       
             {tilesArr}
            
        </div>
    </div>
</div>
</div>
  )
}

export default TilesList