import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Registro from './Components/Registro'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Registro/>
    </>
  )
}

export default App
