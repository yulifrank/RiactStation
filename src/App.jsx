import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Station from './Components/station/Station'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Station></Station>
    </>
  )
}

export default App
