import { useEffect, useRef, useState } from "react"

const Learn = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inputRef.current?.focus()
    })

    return (
    <div>
        <input type="text" ref={inputRef} />
    </div>
    )
}

export default Learn