import { main } from '@popperjs/core'
import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Login from './components/login'



const App = () => {
  return (

    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App