import React from 'react'
import Profile from '../components/Profile'
import State from '../hooks/State'
import Parent from '../components/Parent'
import Form from '../hooks/Form'
const Home = () => {
  return (
    <div>
        <Profile name='Deepika S' age={20} skills={["html","c++","java"]} />
  <State/>
  <Parent/>
  <Form/>
    </div>
  )
}

export default Home