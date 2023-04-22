import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {GlobalContext} from "./GlobalContext"
import Home from './pages/Home'

function App() {
  const [username,setUsername]=useState("imran")
  return (
    <>
    <GlobalContext.Provider value={{username}}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </GlobalContext.Provider>
    </>
  )
}

export default App
