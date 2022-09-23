import React from 'react'

const GreetingProps = (props)=> {
    
  return (
    <div className='greet'>
        <h3>
            Hello {props.name}
        </h3>
    </div>
  )
}

export default GreetingProps