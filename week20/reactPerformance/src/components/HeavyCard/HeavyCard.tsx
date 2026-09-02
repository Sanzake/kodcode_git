import React from "react"

function HeavyCard() {
    console.log("render HeavyCard")

  return (
    <div>
        <div>HeavyCard</div>
    </div>
  )
}

export default React.memo(HeavyCard)