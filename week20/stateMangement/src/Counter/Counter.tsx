import { userStore } from '../Stores/UserStore'

export default function Counter() {
    const counter = userStore(s => s.counter)
    const increment = userStore(s => s.increment)
    const decrement = userStore(s => s.decrement)

    console.log("counter render")

    return (
        <div>
            {counter}
            <button onClick={(e) => increment()}>+</button>
            <button onClick={(e) => decrement()}>-</button>
        </div>
    )
}
