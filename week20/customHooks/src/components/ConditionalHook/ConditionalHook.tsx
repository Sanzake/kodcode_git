import useCounter from '../../hooks/useCounter'

export default function ConditionalHook() {
    const run = true
    if (run) {
        const counter = useCounter(50, 5)
    
    if (counter) {
        const result = 100
    } else {
        const result = counter.count
    }

    return (
        <div>{result}</div>
    )
}
