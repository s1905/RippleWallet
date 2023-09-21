import { useContext, useState, useEffect } from "react"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { UiModeContext } from "./context/UiModeContext"
import { AuthContext } from "./context/AuthContext"

import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"

function App() {

  const { userTheme } = useContext(UiModeContext)
  const { 
    logOut
  } = useContext(AuthContext)

  return (
    <div className="w-screen min-h-screen bg-primary-light dark:bg-primary-dark">
      <div className="mx-auto sm:max-w-screen sm:max-w-3xl">
        <BrowserRouter>
          <Routes>
            <Route path='/signin' element={ <SignIn /> }></Route>
            <Route path='/signup' element={ <SignUp /> }></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
/*
<button
          className="relative flex items-center justify-between w-full overflow-hidden text-lg font-bold text-white rounded-lg bg-primary-blue p-7 sm:w-2/3"
          onClick={logOut}
        >
          LogOut
        </button>
*/