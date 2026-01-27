import React from 'react'

const Profile = ({name,age,skills}) => {
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