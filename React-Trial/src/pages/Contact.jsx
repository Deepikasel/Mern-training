/* import React, { useState } from 'react'

const Contact = () => {
    const [form,setform]=useState(
    {
        name='';
        email='';
        password='';
        gender='';
    })
    const handlechange=(e)=>{
        e.target.name
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(form)
    }
  return (
    <div>
        <h1>Valdiation Form</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label>
        <input type="name" name="name"><label>Name</label>
        value={form.name}/>
            <label htmlFor="">Email:</label>
        <input type="email" name="email"><label>Name</label>
        value={form.email}/>
    <label htmlFor="">Password:</label>
        <input type="password" name="password"><label>Password</label>
        value={form.password}/>

   <input type="checkbox"><label>gender</label><br>
     <input type="checkbox"><label>male</label><br>
<input type="checkbox"><label>female</label><br>
<button>submit</button>
    </div>

  )
}
</form>
export default Contact */

import React, { useState } from 'react'
import { data } from 'react-router-dom'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    gender: ''
  })
  const handleChange = (e) => {
    const {name,value}=e.target
    setForm((prev)=>({
        ...prev,
        [name]:value
  }))
  }
  const handleSubmit = (e) => {
   e.preventDefault();
   const data=`Nmae: ${form.name}
    Email: ${form.email} 
    Password ${form.password} 
    Gender ${form.gender}`
   alert("Form Submitted\n\n"+data);
   console.log(data);
} 
  return (
    <div>
      <h1>Validation Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        /><br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        /><br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        /><br />
        <label>Gender:</label><br />
        <input
          type="checkbox"
          name="gender"
          value="male"
          onChange={handleChange}
        />
        <label>male</label><br />
        <input
          type="checkbox"
          name="gender"
          value="female"
          onChange={handleChange}
        />
        <label>female</label><br />
      <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default Contact
