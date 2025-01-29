import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import TrackerPage from './pages/TrackerPage/TrackerPage'
import Landing from './pages/Landing/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Landing />
        <TrackerPage />
        
      </div>
    </>
  )
}

export default App
