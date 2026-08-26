import React from 'react'

export default function Menu() {
  return (
    <div style={{ marginRight: "auto", color: 'black', display: 'flex', alignItems: 'center' }}>
      <span style={{fontSize: 25}}>Menu</span>
      
      <ul style={{display: 'flex', gap: 35}}>
        <li><a href="some">Home page</a></li>
        <li><a href="some">Main</a></li>
        <li><a href="some">About us</a></li>
      </ul>
      
    </div>
  )
}
