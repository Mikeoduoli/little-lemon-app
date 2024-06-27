import React, { useState } from 'react'

const Homepage = () => {
  const [colour, setColour] = useState('pick color');

  const clientColor = (e) => {
    e.preventDefault();

    setColour({
      color: "blue",
      size: "Medium"
    })

    return setColour
  }

  return (
    <div>
      <h1>Hello!</h1>
    </div>
  )
}

export default Homepage
