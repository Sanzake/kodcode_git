import React, { useState } from 'react'
import ScoreDisplay from './ScoreDisplay/ScoreDisplay'
import ScoreControls from './ScoreControls/ScoreControls'

export default function ScoreBoard() {
    const [score, setScore] = useState(0)
    return (
        <div>
            <ScoreDisplay score={score}/>
            <ScoreControls score={score} setScore={setScore}/>
        </div>
  )
}
