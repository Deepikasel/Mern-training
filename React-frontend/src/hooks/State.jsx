import React from 'react'
import { useState } from 'react'
const State = () => {
    const [count,setCount]=useState(-1)
  return (
    <div>
        <h3>UseState Example</h3>
        <h3>Count:{count}</h3>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default State