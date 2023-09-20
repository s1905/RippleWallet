import { useState, useEffect, createContext } from "react"

export const UiModeContext = createContext()

export const UiModeProvider = ({ children }) => {

    const [userTheme, setUserTheme] = useState(localStorage.getItem("theme"))
    const [systemTheme, setSystemTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light")

    useEffect(() => {
        if(userTheme === "dark" || (!userTheme && systemTheme === "dark")) {
            setUserTheme("dark")
        }
        else {
            setUserTheme("light")
        }
    }, [])

    useEffect(() => {
        if(userTheme == "dark") {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }
        else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [userTheme])

    const changeTheme = () => {
        setUserTheme(userTheme === "dark" ? light : dark)
    }

    return (
        <UiModeContext.Provider value={{userTheme, changeTheme}} >
            {children}
        </UiModeContext.Provider>
    )
}