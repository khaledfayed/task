import React from 'react'
import { useLocation } from 'react-router-dom'
import './details.css'

function Details (props) {
  var { state } = useLocation()
  state = JSON.parse(state)

  return (
    <div className='Details-container'>
      <div>
        {Object.keys(state).map(data => (
          <h1 className='Details-text'>{data}:</h1>
        ))}
      </div>
      <div>
        {Object.values(state).map(value => (
          <h1 className='Details-text'>{value}</h1>
        ))}
      </div>
    </div>
  )
}

export default Details
