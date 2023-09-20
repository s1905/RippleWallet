import { useContext, useState } from "react"
import { UiModeContext } from "./context/UiModeContext"

function App() {

  const { userTheme } = useContext(UiModeContext)
  
  return (
    <>
      <h1 className="text-3xl font-bold dark:text-white">
        Hello world!
      </h1>
    </>
  )
}

export default App
