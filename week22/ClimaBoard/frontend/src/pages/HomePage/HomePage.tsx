import type React from "react"
import { useRef } from "react"
import { useCurrentUserStore } from "../../store/currentUsername"
import "./HomePage.css"

export default function HomePage() {
    const username = useCurrentUserStore((s) => s.currentUser)
    const setUsername = useCurrentUserStore((s) => s.setCurrentUser)

    const inputRef = useRef<HTMLInputElement>(null)

    const sendUsername = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newUsername = inputRef.current?.value
        if (newUsername && newUsername.length > 0) {
            setUsername(newUsername)
            if (inputRef.current) {
                inputRef.current.value = ""
            }
        }
    }
    return (
        <div className="homePage">
            <h1>Welcome, {username}!</h1>
            <h2>This app allows you to check weather!</h2>
            <form className="usernameForm" onSubmit={sendUsername}>
                <input className="usernameInput" type="text" placeholder="Your username..." ref={inputRef}/>
                <button className="usernameButton" type="submit">send</button>
            </form>
        </div>
    )
}
