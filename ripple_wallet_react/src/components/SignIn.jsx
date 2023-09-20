import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../context/AuthContext"

const SignIn = () => {
    
    const [formData, setFormData] = useState({
        email : "",
        password : ""
    })

    const {
        currentUser,
        signIn,  
        signInWithGooglePopup, 
        signInWithGoogleRedirect
    } = useContext(AuthContext)

    const navigate = useNavigate()

    const navigateHome = () => {
        navigate("/")
    }

    const navigateSignUp = () => {
        navigate("/signup")
    }

    useEffect(() => {
        console.log("SignIn use effect ran...", currentUser)
        currentUser ? navigateHome() : console.log("false")
    })

    const handleChange = (event) => {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen p-5">
            <h1 className="text-3xl font-bold sm:text-2xl dark:text-white">Welcome Back!</h1>
            {/*<img className="mt-5 w-36 h-36" src={} alt="signin-img" />*/}
            <form className="w-full sm:w-2/3">
                <input
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    className="w-full p-3 mt-3 bg-gray-100 rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                    className="w-full p-3 mt-3 bg-gray-100 rounded"
                />
            </form>
            
            <button 
              className="w-full px-6 py-3 mt-5 text-lg font-bold text-white rounded-lg bg-primary-blue sm:w-2/3"
              onClick={async () => {await signIn(formData.email, formData.password)}}
            >
                Sign In
            </button>

            <p className="w-full mt-5 mb-5 text-center dark:text-white">OR</p>

            <button 
                className="relative flex items-center justify-between w-full overflow-hidden text-lg font-bold text-white rounded-lg bg-primary-blue p-7 sm:w-2/3"
                onClick={window.innerWidth >= 640 ? signInWithGooglePopup : signInWithGoogleRedirect}
            >
                <div className="absolute left-0 flex items-center justify-center w-2/6 h-full bg-gray-100">
                    {/*<img className="w-6 h-6" src={google} alt="Google"/>*/}
                </div>
                <div className="absolute right-0 flex items-center justify-center w-4/6 h-full">
                    Sign In with Google
                </div>
            </button>

            <p 
                className="mt-5 text-center dark:text-white text-s"
            >
                Don't have an account? 
                <span className="font-bold text-primary-blue hover:cursor-pointer" onClick={navigateSignUp}> Sign Up </span>
            </p>
        </div>
    )
}

export default SignIn