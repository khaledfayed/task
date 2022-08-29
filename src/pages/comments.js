import React, { Profiler, useEffect, useState } from 'react'
import CommentsContainer from '../components/CommentsContainer'
import { useAppState, useActions } from '../overmind'
import './comments.css'

function Comments (props) {
  const actions = useActions()
  const state = useAppState()

  const [isLoading, setIsLoading] = useState(true)

  const performance = (
    profilerId,
    mode,
    actualTime,
    baseTime,
    startTime,
    commitTime
  ) => {
    actions.performance.getPerformance({
      profilerId,
      mode,
      actualTime,
      baseTime,
      startTime,
      commitTime
    })
    actions.performance.pushToLocalStorage()
  }

  useEffect(() => {
    actions.comments.getComments().then(() => {
      setIsLoading(false)
    })
  }, [])

  return (
    <div>
      {isLoading ? (
        <div className='Main1'>loading..</div>
      ) : (
        <Profiler id='comments' onRender={performance}>
          <CommentsContainer />
        </Profiler>
      )}
    </div>
  )
}

export default Comments
