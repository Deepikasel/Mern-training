import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const Form = () => {
    const [form,setForm]=useState({
        name:"",
        email:"",
        age:"",
        department:""
    })
    useEffect(()=>{
        console.log("useeffect is running");
    })
    const handleChange=(e)=>{
        const {name,value}=e.target
        setForm((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(form)
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" value={form.name} onChange={handleChange}/><br/>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" value={form.email} onChange={handleChange}/><br/>
            <label htmlFor="age">Age:</label>
            <input type="text" name="age" value={form.age} onChange={handleChange}/><br/>
            <label htmlFor="department">Department:</label>
            <input type="text" name="department" value={form.department} onChange={handleChange}/><br/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form