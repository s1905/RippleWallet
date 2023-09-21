import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

const PrivateRoutes = () => {
    const { currentUser } = useContext(AuthContext)

    return (
      currentUser ? <Outlet /> : <Navigate to="/"/>
    )
}

export default PrivateRoutes