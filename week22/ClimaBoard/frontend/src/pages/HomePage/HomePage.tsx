import type React from "react"
import { useCurrentUserStore } from "../../store/currentUsername"
import { useRef } from "react"

export default function HomePage() {
    const username = useCurrentUserStore((s) => s.currentUser)
    const setUsername = useCurrentUserStore((s) => s.setCurrentUser)

    const inputRef = useRef<HTMLInputElement>(null)

    const sendUsername = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newUsername = inputRef.current?.value
        if (newUsername && newUsername.length > 0) setUsername(newUsername)
    }
    return (
        <div>
            <h1>Welcome, {username}!</h1>
            <form onSubmit={sendUsername}>
                <input type="text" placeholder="Your username..." ref={inputRef}/>
                <button onClick={() => sendUsername}>send</button>
            </form>
        </div>
    )
}
