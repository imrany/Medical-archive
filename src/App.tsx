import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalContext } from './GlobalContext'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Topic from './pages/Topic'

function App() {
  const [globalContent,setGlobalContent]=useState({
    name:"Medical Archive",
    path:"/"
  })

  return (
    <>
    <GlobalContext.Provider value={globalContent}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/topic/:slug" element={<Topic/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </GlobalContext.Provider>
    </>
  )
}

export default App
