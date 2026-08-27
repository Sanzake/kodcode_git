import { useState } from "react"

const CounterUpdateLearning = () => {
    const [count, setCount] = useState(0)

    const doubleUpdate = () => {
        setCount(count + 1)
        setCount(count + 1)
    }

    return (
        <div>
            <p>{count}</p>
            <button type="button" onClick={() => doubleUpdate()}>
                +
            </button>
            <button type="button" onClick={() => setCount(prev => prev - 1)}>
                -
            </button>
            <button type="button" onClick={() => setCount(0)}>
                reset
            </button>
        </div>
    )
}

export default CounterUpdateLearning