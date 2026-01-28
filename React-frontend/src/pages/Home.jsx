import React from 'react'
import Profile from '../components/Profile'
import State from '../hooks/State'
import Parent from '../components/Parent'
import Form from '../hooks/Form'
import { Link } from 'react-router-dom'
import { userContext } from '../App'
import { useState } from 'react'
const Home = () => {
  const [user,setUser]=useState("deepi")
  return (
    <div>
      <Link to={'/form'}>Form</Link><br/>
      <Link to={'/state'}>Usestate Example</Link><br/>
      <Link to={'/reducer'}>Usereducer Example</Link><br/>
      <userContext.Provider value={user}>
        <Profile  age={20} skills={["html","c++","java"]} />
        </userContext.Provider>
  <State/>
  <Parent/>
  <Form/>
    </div>
  )
}

export default Home