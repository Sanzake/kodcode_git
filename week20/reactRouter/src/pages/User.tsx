import React from 'react'
import { useNavigate, useParams } from 'react-router'

export default function User() {
    const params = useParams()

    const navigate = useNavigate()

  return (
    <>
        <div>{params.id}</div>
        <button type='button' onClick={e => navigate("/", {replace: true})}>nav</button>
    </>
  )
}
