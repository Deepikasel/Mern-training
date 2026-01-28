import React, { useContext } from 'react'
import { userContext } from '../App'

const Profile = ({age,skills}) => {
  const name=useContext(userContext)
  return (
    <div><h1>I am {name} Engineering student {age} years old</h1>
    <ul>
        {skills.map((skill)=>(
            <li key={skill}>{skill}</li>
 ))}
    </ul>
    </div>
  )
}

export default Profile