import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const {id}=useParams()
  const [product,setProducts]=useState({})

useEffect(()=>{
  /* fetch(`https://fakestoreapi.com/products/${id}`)
  .then(response => response.json())
  .then(data => setProducts(data)); */

  fetch('https://fakestoreapi.com/users')
  .then(response => response.json())
  .then(data => setProducts(data));
},[])
console.log(product)
  return (
    <div>
        <h1>
        UserDetails
       </h1>
       <h2>Email:{product.email}</h2>
       <p>Username:{product.username}</p>
       <p>Password:{product.password}</p>
       <p>Address:{product.address}</p>
    </div>
  )
}

export default ProductDetails