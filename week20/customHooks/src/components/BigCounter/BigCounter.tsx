import useCounter from "../../hooks/useCounter"

export default function BigCounter() {
    const counter = useCounter(100, 10)

    const inc = counter.increment
    const dec = counter.decrement
    const res = counter.reset
    return (
        <div>

            <p>{counter.count}</p>
            <button type='button' onClick={inc}>+</button>
            <button type='button' onClick={res}>reset</button>
            <button type='button' onClick={dec}>-</button>
        </div>
  )
}
