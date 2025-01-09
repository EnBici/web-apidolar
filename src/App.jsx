import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from '../pages/pagina1'
import Apidolarpage from '../pages/apidolar'

function App() {
  return (

    <Routes>
      <Route path='/web-apidolar/' element={<Apidolarpage></Apidolarpage>}/>
    </Routes>
  )
}

export default App