import React from 'react'
import { Link } from 'react-router'
import Users from './Users'

export default function Home() {
  return (
    <div>
        <Link to={"/users"}>users</Link>
    </div>
  )
}
