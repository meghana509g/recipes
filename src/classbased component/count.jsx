import React from "react"

class Counter extends React.Component{
    state={
        count:0
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    decrement=()=>{
        this.setState({count:this.state.count-1})
    }
    render(){
        return <div>
                <button onClick={this.increment}>increment</button>
                <h2>{this.state.count}</h2>
                <button onClick={this.decrement}>decrement</button>
               </div>
    }
}
export default Counter