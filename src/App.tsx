import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  const details={
    name:"imran"
  }
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home details={details} />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
