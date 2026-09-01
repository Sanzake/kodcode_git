import { useEffect } from "react"

export default function useLocalStorage(key: string, initial: string) {
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(initial))
    }, [key, initial])

    let theme = JSON.parse(localStorage.getItem(key))

    const changeTheme = () => {
        theme  = JSON.parse(localStorage.getItem(key))
        theme === initial ? localStorage.setItem(key, JSON.stringify("dark")) : localStorage.setItem(key, JSON.stringify(initial))
    }

    return {theme, changeTheme}
}
