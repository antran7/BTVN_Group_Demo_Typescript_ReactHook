import { useState } from 'react'
import GooglePage from './pages/GooglePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SearchProvider } from './context/SearchContext'
import GoogleSearchPage from './components/google/GoogleSearchPage'

function App() {


  return (
    <>
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<GooglePage />}></Route>
            <Route path='/search/:content' element={<GoogleSearchPage />} />
          </Routes>
        </BrowserRouter>
      </SearchProvider>


    </>
  )
}

export default App
