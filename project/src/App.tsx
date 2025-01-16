import { useState } from 'react'
import GooglePage from './pages/GooglePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<GooglePage />}></Route>
      </Routes>
        
      </BrowserRouter>

    </>
  )
}

export default App
