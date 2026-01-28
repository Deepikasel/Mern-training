import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const State = () => {
    const [count,setCount]=useState(0)
    const [like,setLike]=useState(0)
    useEffect(()=>
    {
      console.log("from useEffect")
    })
  return (
    <div>
        <h3>UseState Example</h3>
        <h3>Count:{count}</h3>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <h3>Like:{like}</h3>
        <button onClick={()=>setLike(like+2)}>Like</button> 
    </div>
  )
}

export default State