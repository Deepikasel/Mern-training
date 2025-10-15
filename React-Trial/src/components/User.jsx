import React from 'react'

const User = ({name,department,skills,values}) => {
  return (
    <div> <h1>i am {name} from {department} department.</h1>
    <ol>{skills.map((skills)=>(
        <li>{skills}</li>
    ))}</ol>
    <ol>{values.map((values)=>(
        <li>{values}</li>
    ))}</ol>
    </div>
  )
}

export default User