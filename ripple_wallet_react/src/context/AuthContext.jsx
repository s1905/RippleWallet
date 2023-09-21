import { useState, useEffect, createContext } from "react"
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup, // Google SignIn
    signInWithRedirect, // Google SignIn
    getRedirectResult,
    onAuthStateChanged,
    signOut
} from "firebase/auth"
import { auth } from "../utils/firebase"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null)
    const provider = new GoogleAuthProvider() // Google sign in provider

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // current user is set to res.user
            setCurrentUser(user)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    // get google OAuth object when signing in with redirect
    useEffect(() => {
        const getDataPostRedirect = async () => {
          await getRedirectResult(auth)
        }  
        getDataPostRedirect()
        console.log("User signed in with redirect!")
    }, [])

    // Email signup
    const signUp = async (email, password) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            console.log("User Signed Up!")
        } 
        catch (error) {
            console.log("errorCode = " + error.code)
            console.log("errorMessage = " + error.message)
            throw error
        }
    }

    // Email signIn
    const signIn = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            console.log("User Signed In!")
        } 
        catch (error) {
            console.log("errorCode = " + error.code)
            console.log("errorMessage = " + error.message)
            throw error
        }
    }

    const signInWithGooglePopup = async () => {
        try {
            await signInWithPopup(auth, provider)
            console.log("User signed in with Google popup")
        }
        catch (error) {
            console.log("errorCode = " + error.code)
            console.log("errorMessage = " + error.message)
            throw error
        }
    }

    const signInWithGoogleRedirect = async () => {
        try {
            signInWithRedirect(auth, provider)
        }
        catch (error) {
            console.log("errorCode = " + error.code)
            console.log("errorMessage = " + error.message)
            throw error
        }
    }

    const logOut = async () => {
        signOut(auth)
        console.log("User signed out!")
    }

    return (
        <AuthContext.Provider value={{
            currentUser, 
            signIn, 
            signUp, 
            signInWithGooglePopup, 
            signInWithGoogleRedirect, 
            logOut
        }} >
            {children}
        </AuthContext.Provider>
    )
}