import React, { useState } from 'react'

const ItemsList = () => {
    const [items, setItems] = useState<string[]>(["1", "2", "3"])

    return (
        <div>
            <p>{items}</p>
            <button type='button' onClick={() => setItems(prev => [...prev, "new"])}>add</button>
            <button type='button' onClick={() => setItems(prev => prev.filter(i => i !== "2"))}>remove</button>
        </div>

    )
}

export default ItemsList