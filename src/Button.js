import React, { Component } from 'react'

export class Button extends Component {
    state={
        message:"Hello"
    }
    changeStateMsg(){
        this.setState({
            message:"There is no surprise go da!"
        })
    }
  render() {
    return (
      <div className='buttonPage'>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.changeStateMsg()}>Click for surprise!</button>
    </div>
    )
  }
}

export default Button