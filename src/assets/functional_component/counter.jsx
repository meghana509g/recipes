import { useState } from "react"


function Counterapp(){
    const [value,setvalue]=useState(10)
    const incre=()=>{
        setvalue(value+1)
    }
    const decre=()=>{
        setvalue(value-1)
    }
    return <div>
            <button style={{backgroundColor:'green',color:'white',borderRadius:'10px'}}onClick={incre}>increment</button>
            <h2>{value}</h2>
            <button onClick={decre}>decrement</button>
           </div>
}
export default Counterapp