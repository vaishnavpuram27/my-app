import React, { Component } from 'react'

export class Counter extends Component {
    state={
        count:0
    }
    add(){
        this.setState((prev)=>({
            count: prev.count+ Number(this.props.counter)
        }))
    }
    increment(){
        this.setState((prev) => ({
            count: prev.count + 1
        }));
    }
    increment5(){
            this.increment();
            this.increment();
            this.increment();
            this.increment();
            this.increment();


    }
    sub(){
        this.setState({
            count: this.state.count - Number(this.props.counter)
        })
    }
  render() {
    return (
        <div className='countPage'>
        <h1>Counter using Classes</h1>
      <div className='counterPage'>
        <h1>Increment and decrement by {Number(this.props.counter)}</h1>
        <button onClick={()=>this.add()}>+</button>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.sub()}>-</button>


    </div>
    </div>
    )
  }
}

export default Counter