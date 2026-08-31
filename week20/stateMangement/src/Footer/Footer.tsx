import React from 'react'
import { userStore } from '../Stores/UserStore'

export default function Footer() {
    const age = userStore((s) => s.user?.age)
    console.log("footer render")
  return (
    <div>{age}</div>
  )
}
