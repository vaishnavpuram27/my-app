import React, { Component } from 'react'

export default class MyComp extends Component {
   state = {
    phones :[{
      brand : "Apple",
      model :"iphone8",
      price:30000
    },
    {
      brand : "Apple",
      model :"iphone9",
      price:30000
    },
    {
      brand : "Apple",
      model :"iphoneX",
      price:30000
    },
    
  ]
  }
  phonesDiv = this.state.phones.map((phone,index)=>{
    return(
      <div className='box '>
      <h2>Phone number: {index+1}</h2>
      <p>Phone Brand: {phone.brand}</p>
        <p>Phone Model : {phone.model}</p>
        <p>Phone Price : {phone.price}</p>
        </div>
    )
  })
  render() {
   
    return (
      <div className='class'>
        <h1>Welcome to react by the class component</h1>
        {this.phonesDiv}

      </div>
    )
  }
}
