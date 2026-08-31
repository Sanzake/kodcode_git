import React from 'react'

interface ScoreControlsProps {
    score: number
    setScore: (newScore: number) => void
}

export default function ScoreControls(props: ScoreControlsProps) {
  return (
    <div>
        <button type="button" onClick={() => props.setScore(props.score + 10)}>+10</button>
        <button type="button" onClick={() => props.setScore(props.score - 10)}>-10</button>
        <button type="button" onClick={() => props.setScore(0)}>reset</button>
    </div>
  )
}
