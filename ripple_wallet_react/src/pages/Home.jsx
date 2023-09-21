import { useContext } from "react"

import { AuthContext } from "../context/AuthContext"

const Home = () => {

    const { logOut } = useContext(AuthContext)
    
    return (
        <div className="flex flex-col items-center justify-center h-screen p-5">
            <button
                className="relative flex items-center justify-between overflow-hidden text-lg font-bold text-white rounded-lg bg-primary-blue p-7"
                onClick={logOut}
            >
                LogOut
            </button>
        </div>
    )
}

export default Home