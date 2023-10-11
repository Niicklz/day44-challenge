import React, { useEffect, useState } from 'react'
import "./styles.css"

export const App = () => {
   
    const [value, setValue] = useState(0)


    const handleInputChange = (e)=> {
        setValue(e.target.value)

    }
  return (
    <div className='input-container'>
        <h1>Custon Range Slider</h1>
        <label htmlFor="input" style={{left: `${-15 + (2.8*value)}px`}}>{value}</label>
        <input type="range" value={value}  onChange={handleInputChange} />
    </div>
  )
}
