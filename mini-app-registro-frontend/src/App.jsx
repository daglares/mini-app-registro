import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Registro from './Components/Registro'
import ListaDeUsuarios from './Components/ListaDeUsuarios'
import './App.css'

function App() {

  return (
    <>
    <Registro/>
    <hr />
    <ListaDeUsuarios />
    </>
  )
}

export default App
