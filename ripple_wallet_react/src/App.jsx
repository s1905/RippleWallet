import { useContext, useState, useEffect } from "react"
import { UiModeContext } from "./context/UiModeContext"
import { AuthContext } from "./context/AuthContext"

function App() {

  const { userTheme } = useContext(UiModeContext)
  const { 
    currentUser,
    signIn,  
    signInWithGooglePopup, 
    signInWithGoogleRedirect,
    logOut 
  } = useContext(AuthContext)

  console.log(currentUser)

  return (
    <div>
      <h1 className="text-3xl font-bold dark:text-white">
        Hello world!
      </h1>
      <button 
        className="w-full px-6 py-3 mt-5 text-lg font-bold text-white bg-red-800 rounded-lg sm:w-2/3"
        onClick={async () => {await signIn('email@gmail.com', 'passuChassu99')}}
      >
        SignUp
      </button>

      <button className="w-full px-6 py-3 text-lg text-white bg-red-800 rounded-lg" 
        onClick={logOut}
      >
        Sign Out
      </button>
      
    </div>
  )
}

export default App
