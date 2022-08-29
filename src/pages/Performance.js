import React, { useState, useEffect } from 'react'
import Table from '../components/Table'
import './performance.css'
import { useAppState, useActions } from '../overmind'

function Performance (props) {
  const state = useAppState()
  const actions = useActions()

  const [record, setRecord] = useState('')
  const [show, setShow] = useState(false)

  const onClick = value => {
    setRecord(value)
  }

  const onRefresh = () => {
    setShow(Boolean(state.performance.data))
  }

  useEffect(() => {
    actions.performance.setPerformance()
    actions.performance.setResponseDict()
  }, [])

  return (
    <div className='Table-page'>
      <div className='Performance-header'>
        <h1 className='Performance-Title'>
          Pick one of the following records to display:
        </h1>
        <button className='Button4' onClick={() => onRefresh()}>
          show
        </button>
        {show ? (
          <div className='Buttons-container'>
            {Object.keys(state.performance.data).map(key => (
              <button className='Button4' onClick={() => onClick(key)}>
                {key}
              </button>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
      {record == '' ? (
        <div></div>
      ) : (
        <Table
          data={state.performance.data[record]}
          latency={state.performance.responseDict[record]}
        />
      )}
    </div>
  )
}

export default Performance
