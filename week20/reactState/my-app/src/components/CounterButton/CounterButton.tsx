import { useState } from "react"

const CounterButton = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>{count}</p>
            <button type="button" onClick={() => setCount(prev => prev + 1)}>
                +
            </button>
            <button type="button" onClick={() => setCount(prev => prev - 1)}>
                -
            </button>
            <button type="button" onClick={() => setCount(prev => 0)}>
                reset
            </button>
        </div>
    )
}

export default CounterButton