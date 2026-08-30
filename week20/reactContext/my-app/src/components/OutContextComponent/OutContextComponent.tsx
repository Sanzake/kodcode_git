import React, { useCallback, useContext } from 'react'
import ThemeСontext from '../../context/ThemeContext'

export default function OutContextComponent() {
    const context = useContext(ThemeСontext)
    return (
        <div>{context.theme}</div>
    )
}
