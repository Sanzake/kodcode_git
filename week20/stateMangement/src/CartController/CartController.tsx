import React, { useState } from 'react'
import { cartStore } from '../Stores/ZustandStore'

export default function CartController() {

    const add = cartStore((s) => s.add)
    const remove = cartStore((s) => s.remove)

    const [inputedId, setInputedId] = useState()

    const handleRemove = () => {
      remove(inputedId)
    }
  return (
    <div>
        <button type='button' onClick={() => add({id: Date.now(), name: "qwe", qty: 5})}>add</button>
        <input type="number" placeholder='input id to remove' onChange={(e) => setInputedId(Number(e.target.value))}/>
        <button type='button' onClick={() => handleRemove()}>remove</button>
    </div>
  )
}
