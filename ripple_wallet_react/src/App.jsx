import { useContext, useState, useEffect } from "react"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { UiModeContext } from "./context/UiModeContext"
import { AuthContext } from "./context/AuthContext"

import SignIn from "./components/SignIn"

function App() {

  const { userTheme } = useContext(UiModeContext)

  return (
    <div className="w-screen min-h-screen bg-primary-light dark:bg-primary-dark">
      <div className="mx-auto sm:max-w-screen sm:max-w-3xl">
        <BrowserRouter>
          <Routes>
            <Route path='/signin' element={ <SignIn /> }></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
