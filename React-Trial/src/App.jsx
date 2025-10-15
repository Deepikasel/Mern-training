import React from 'react'
import User from './components/User'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <>
    <User name="ronaldo" department="cse" skills={["c","c++","java","Mern","python"]} values={[1,2,3,4,5]}/>
   <Routes><Route path="/" Component={Home}/></Routes>
    </>
  
  )
}

export default App

// import React from 'react'
// import User from './components/User'
// import Home from './pages/Home'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

// const App = () => {
//   return (
//     <>
//       <User 
//         name="ronaldo" 
//         department="cse" 
//         skills={["c", "c++", "java", "Mern", "python"]} 
//         values={[1, 2, 3, 4, 5]} 
//       />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App
