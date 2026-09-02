interface ButtonProps {
  count: number
  handleCount: () => void
}

export default function Button(props: ButtonProps) {
  console.log("render button")
  return (
    <button type='button' onClick={() => props.handleCount()}>{props.count}</button>
  )
}
