import React from 'react'

const Nav = () => {
  return (
    <nav>
        <div className='logo'>
            <img src="/images/logo.png" alt="logo" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Nav