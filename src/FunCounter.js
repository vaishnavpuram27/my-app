import React, { useState } from 'react'

const FunCounter = () => {
    const [count,setCount] = useState(0);
    const updateCounter = ()=>{
        setCount((prev)=>prev+1)
    }
    const update5=()=>{
        updateCounter();
        updateCounter();
        updateCounter();
        updateCounter();
        updateCounter();


    }
  return (
    <div className='countPage'>
        <h1>Counter using useState Hook</h1>
        <p>{count}</p>
        <button onClick={()=>update5()}>Increment</button>
    </div>
  )
}

export default FunCounter