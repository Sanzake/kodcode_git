import { useState } from "react";

export default function useCounter(initial: number, step: number) {
    const [count, setCount] = useState(initial)

    const increment = () => setCount(count + step)
    const decrement = () => setCount(count - step)
    const reset = () => setCount(0)

    return {count, increment, decrement, reset}

}