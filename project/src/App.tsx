import { useState } from 'react'
import GooglePage from './pages/GooglePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EnumPage from './pages/EnumPage'
import UnionTypesPage from './pages/UnionTypesPage'

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<GooglePage />}></Route>
        <Route path='UnionTypesPage' element={<UnionTypesPage />}></Route>
        <Route path='/EnumPage' element={<EnumPage />}></Route>
      </Routes>
        
      </BrowserRouter>

    </>
  )
}

export default App
