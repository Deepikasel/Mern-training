import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Products = () => {
const [products,setProducts]=useState([])
const getProducts=async()=>{
  const res=await axios.get('https://fakestoreapi.com/products')
  setProducts(res.data)
}
    useEffect(()=>{
       getProducts()
    },[])
   return (
    <div>
        <h1>Products</h1>
        {products.map((product)=>(
            <div key={product.id}>
  <h4>{product.title}</h4>
  <h5>{product.price}</h5>
  <Link to={`/products/${product.id}`}>
   View Details
     </Link>
   </div>
   ) )}
    </div>
  )
}

export default Products