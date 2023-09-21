import { BrowserRouter, Routes, Route } from "react-router-dom"

import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Home from "./pages/Home"
import PrivateRoutes from "./utils/PrivateRoutes"

function App() {

  return (
    <div className="w-screen min-h-screen bg-primary-light dark:bg-primary-dark">
      <div className="mx-auto sm:max-w-screen sm:max-w-3xl">
        <BrowserRouter>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path='/' element={ <Home /> }></Route>
            </Route>
            <Route path='/signin' element={ <SignIn /> }></Route>
            <Route path='/signup' element={ <SignUp /> }></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App