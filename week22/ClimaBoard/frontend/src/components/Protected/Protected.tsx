import type React from "react"
import { useCurrentUserStore } from "../../store/currentUsername"
import { Navigate } from "react-router"

interface ProtectedProps {
    children: React.ReactNode
}
export default function Protected({children}: ProtectedProps) {
    const username = useCurrentUserStore((s) => s.currentUser)
    if (username === "guest") {
        return <Navigate to={"/"}/>
    }
    return children
}
