import React from 'react'
import { Link } from 'react-router-dom'
import './button.css'
import Arrow from './left-arrow.png'

function Button (props) {
  return (
    <Link to={props.link} className='Button'>
      <div className='Button1'>{props.text}</div>
      <div className='Button2'>
        <img src={Arrow} className='Arrow-img' />
      </div>
    </Link>
  )
}

export default Button
