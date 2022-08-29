import React from 'react'
import './header.css'
import butterfly from './butterfly.png'

function Header () {
  return (
    <div className='Header'>
      <div className='Header1'>
        <img src={butterfly} className='Header-logo' />
      </div>
      <div className='Header2'>
        <h1 className='Header-text'>Home</h1>
        <h1 className='Header-text'>Comments</h1>
        <h1 className='Header-text'>Performance</h1>
      </div>
      <div className='Header3'></div>
    </div>
  )
}

export default Header
