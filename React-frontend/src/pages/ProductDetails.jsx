import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
     const products=[{
        id:1,name:"Laptop",price:"30000",Description:"Laptop hp"
    },{id:2,name:"Mouse",price:1000,Description:"Hp Mouse"},{id:3,name:"Mobile",price:"50000",Description:"Vivo phone"},{id:4,name:"keyboard",price:"30000",Description:"KeyBoard hp"}
]
const {id}=useParams()
const product=products.find((p)=>p.id===Number(id))
  return (
    <div>
        <h1>
        ProductDetails
       </h1>
       <h2>{product.name}</h2>
       <p>Price:₹{product.price}</p>
       <p>Description:{product.Description}</p>
    </div>
  )
}

export default ProductDetails