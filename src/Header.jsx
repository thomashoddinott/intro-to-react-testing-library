import React from 'react'

function Header({text='Hello, World!'}) {
  return (
    <header>
      <h1 data-testid='h1tag' className='fancy-h1'>{text}</h1>
    </header>
  )
}

export default Header
