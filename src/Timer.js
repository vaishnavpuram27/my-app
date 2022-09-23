import React, { useEffect, useState } from 'react'

function Timer() {
  const [count ,setCount] = useState(0)
  const [name,setName] = useState("")
  useEffect(()=>{
    console.log("Effect Ran, Count updated");
    document.title = `${count} times`
    
      
  },[count]);
  useEffect(()=>{
    console.log(`${name} is has updated` )
  },[name])
  const addCount =()=>{  setCount((count)=>count+1);}
  const updateName =(e)=>{  setName((name) =>name =e.target.value);}

  const myStyle={
    fontFamily:'monospace',color:"blue"
  }
  return (
    <div>
      <h1 style={{fontFamily:'monospace',color:"blue"}}>{count}</h1>
      <button onClick={addCount}>Click Me</button>
      <h1 style={myStyle}>{name}</h1>
      <input type="text" onChange={updateName} />
    </div>
  )
}

export default Timer