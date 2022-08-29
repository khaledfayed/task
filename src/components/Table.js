import React from 'react'
import { Link } from 'react-router-dom'

import './table.css'

const headers = [
  'profilerId',
  'mode',
  'actualTime',
  'baseTime',
  'startTime',
  'commitTime'
]

function Table (props) {
  return (
    <div className='Table'>
      <div className='Request-container'>
        <h3 className='Table-text'> Request Latency: </h3>
        <h3 className='Table-text'>{props.latency}</h3>
      </div>

      <div className='Table-row'>
        {headers.map(key => (
          <div className='Table-cell'>
            <h3 className='Table-text'>{key}</h3>{' '}
          </div>
        ))}
      </div>
      {Object.values(props.data).map(row => (
        <Link
          to={`/details/${row.profilerId}`}
          state={JSON.stringify(row)}
          className='Table-row'
        >
          {Object.values(row).map(cell => (
            <div className='Table-cell'>
              <h3 className='Table-text'>{cell}</h3>{' '}
            </div>
          ))}
        </Link>
      ))}
    </div>
  )
}

export default Table
