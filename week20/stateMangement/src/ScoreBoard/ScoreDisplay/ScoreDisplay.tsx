interface ScoreDisplayProps {
    score: number
}

export default function ScoreDisplay(props: ScoreDisplayProps) {
  return (
    <div>{props.score}</div>
  )
}
